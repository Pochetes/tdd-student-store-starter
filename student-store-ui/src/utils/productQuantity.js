const productQuantity = (productId, shoppingCart) => {
    if (shoppingCart === undefined) return 0

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].itemId === productId) {
            return shoppingCart[i].quantity
        }
    }
    return 0
}

export default productQuantity
