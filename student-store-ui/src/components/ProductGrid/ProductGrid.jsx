import React, { Fragment } from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import productQuantity from "../../utils/productQuantity"

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
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
                                quantity={productQuantity(product.id, shoppingCart)}
                                handleAddItemToCart={handleAddItemToCart}
                                handleRemoveItemFromCart={handleRemoveItemFromCart}
                                showDescription={false}
                                isProductView={false}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default ProductGrid
