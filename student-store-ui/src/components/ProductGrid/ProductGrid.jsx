import React, { Fragment } from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
    const productQuantity = productId => {
        for (let i = 0; i < shoppingCart.length; i++) {
            if (shoppingCart[i].itemId === productId) {
                return shoppingCart[i].quantity
            }
        }
        return 0
    }

    return (
        <>
            <h1>Best Selling Products</h1>
            <div className="product-grid">
                {products.map((product, index) => {
                    return (
                        <Fragment key={index}>
                            <ProductCard
                                product={product}
                                productId={product.id}
                                quantity={productQuantity(product.id)}
                                handleAddItemToCart={handleAddItemToCart}
                                handleRemoveItemFromCart={handleRemoveItemFromCart}
                                showDescription={false}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default ProductGrid
