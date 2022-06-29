const express = require('express')
const Store = require('../models/store')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const products = await Store.fetchAllProducts()
        res.status(200).send(products)
    } catch(err) {
        next(err)
    }
})

router.get('/:productId', async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchProductById(productId)
        res.status(200).send(product)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { user, shoppingCart } = req.body
        const purchaseOrder = await Store.createPurchaseOrder(user, shoppingCart)
        res.status(200).send(purchaseOrder)
    } catch(err) {
        next(err)
    }
})

module.exports = router
