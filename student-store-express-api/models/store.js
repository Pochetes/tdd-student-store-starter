const { v4 } = require('uuid')
const receipt = require('receipt')
const { BadRequestError, NotFoundError } = require('../utils/errors')
const { storage } = require('../data/storage')
const { CURRENCY, WIDTH, RULER } = require('../constants')
const { create } = require('receipt')

class Store {
    static get TAX_RATE() {
        return 0.0875
    }

    static async fetchAllProducts() {
        const allProducts = storage.get('products').value()
        return allProducts
    }

    static async fetchProductById(productId) {
        const product = storage.get('products').value().find(product => product.id == productId)
        return product
    }

    static async createPurchaseOrder(userInfo, shoppingCart) {
        if (!shoppingCart || Object.keys(shoppingCart).length === 0) {
            return new BadRequestError("No shopping cart to create purchase order")
        }
        if (!userInfo || Object.keys(userInfo).length === 0) {
            return new BadRequestError("No user info found to create purchase order ")
        }

        const id = v4()
        const d = new Date
        const createdAt =
        [
            d.getMonth()+1,
            d.getDate(),
            d.getFullYear()
        ].join('/')
        + ' ' +
        [
            d.getHours(),
            d.getMinutes(),
        ].join(':')

        const products = await this.fetchAllProducts()

        const subTotal = this.calculateSubtotal(shoppingCart, products)
        const totalPrice = this.calculateTotalPrice(subTotal)

        const receiptCreated = this.createReceipt(
            shoppingCart,
            subTotal,
            totalPrice,
            products,
            userInfo,
            id,
            createdAt
        )

        const purchase = {
            id: id,
            name: userInfo.name,
            email: userInfo.email,
            order: shoppingCart,
            total: totalPrice,
            createdAt: createdAt,
            receipt: receiptCreated,
        }

        // adding purchase order to db.json
        storage.get('purchases').push(purchase).write()

        return purchase
    }

    static createReceipt(
        shoppingCart,
        subTotal,
        total,
        products,
        userInfo,
        id,
        createdAt,
    ) {
        receipt.config.currency = CURRENCY
        receipt.config.width = WIDTH
        receipt.config.ruler = RULER

        const purchasedProducts = shoppingCart.map(item => {
            return {
                item: products[item.itemId - 1].name,
                qty: item.quantity,
                cost: products[item.itemId - 1].price * item.quantity
            }
        })

        console.log('purchasedProducts: ', purchasedProducts);

        const receiptCreated = receipt.create([
            {
                type: 'text',
                value: [
                    'STUDENT STORE',
                    '123 Fake Street',
                    'code@path.org',
                    'studentstore.com'
                ],
                align: 'center'
            },
            {
                type: 'empty',
            },
            {
                type: 'properties',
                lines: [
                    {
                        name: 'Order Number',
                        value: id
                    },
                    {
                        name: 'Name',
                        value: userInfo.name
                    },
                    {
                        name: 'Email',
                        value: userInfo.email
                    },
                    {
                        name: 'Date',
                        value: createdAt
                    }
                ]
            },
            {
                type: 'table',
                lines: purchasedProducts
            },
            {
                type: 'empty'
            },
            {
                type: 'empty'
            },
            {
                type: 'empty'
            },
            {
                type: 'text',
                value: [
                    `Subtotal:    ${Number(subTotal).toFixed(2)}`,
                    `Taxes:     ${this.TAX_RATE}`,
                    `Total:       ${total}`
                ],
                align: 'right'
            },
            {
                type: 'empty'
            },
            {
                type: 'text',
                value: 'Thank you for shopping at Student Store!',
                align: 'center'
            },
        ])

        console.log(receiptCreated)

        return receiptCreated
    }

    static calculateSubtotal(shoppingCart, products) {
        let subTotal = 0

        shoppingCart.forEach(item => {
            let productFound = products.find(product => product.id == item.itemId)
            let productPrice = productFound.price
            let productQuantity = item.quantity

            subTotal += productPrice * productQuantity
        })
        return subTotal
    }

    static calculateTotalPrice(subtotal) {
        const calculatedTaxes = subtotal * this.TAX_RATE
        const totalPrice = subtotal + calculatedTaxes
        return Number(totalPrice).toFixed(2)
    }
}

module.exports = Store
