const TAX_RATE = 0.0875

const handlePricing = (shoppingCart, products) => {
    let subTotal = 0;
    shoppingCart.forEach(item => {
        let productFound = products.find(product => product.id === item.itemId)
        let productPrice = productFound.price
        let productQuantity = item.quantity

        subTotal += productPrice * productQuantity
    })

    const calculatedTaxes = subTotal * TAX_RATE
    const totalPrice = subTotal + calculatedTaxes

    return {
        _subTotal: Number(subTotal).toFixed(2),
        _calculatedTaxes: Number(calculatedTaxes).toFixed(2),
        _totalPrice: Number(totalPrice).toFixed(2),
    }
}

export default handlePricing
