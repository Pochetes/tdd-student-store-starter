import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

const ProductView = ({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart }) => {
    const { name, image, description, price } = product

    return (
        <div className="product-view">
            <h1 className="product-view-title">{`Product ${productId}`}</h1>
            <ProductCard
            product={product}
            productId={productId}
            quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            showDescription={true}
            isProductView={true}
            />
        </div>
    )
}

export default ProductView
