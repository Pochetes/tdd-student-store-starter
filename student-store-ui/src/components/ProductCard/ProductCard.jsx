import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription, isProductView }) => {
    const { name, image, price, description } = product

    return (
        <div className={isProductView ? "product-card product-view" : "product-card"}>
            <div className={isProductView ? "media product-view" : "media"}>
                <Link to={`/products/${productId}`}>
                    <img src={image} alt={`${name} image`} />
                </Link>
            </div>
            <div className="product-details">
                <div className={isProductView ? "product-name product-view" : "product-name"}>
                    {name}
                </div>
                <div className={isProductView ? "product-price product-view" : "product-price"}>
                    ${Number(price).toFixed(2)}
                </div>
            </div>
            <div className={showDescription ? `product-desc show` : "product-desc"}>
                {description}
            </div>
            <div className={isProductView ? "product-card-cart product-view" : "product-card-cart"}>
                <div className="product-quantity">{quantity === 0 || quantity === undefined ? null : quantity}</div>
                <button
                className="add"
                onClick={() => handleAddItemToCart(productId)}
                >
                    +
                </button>
                <button
                className="remove"
                onClick={() => handleRemoveItemFromCart(productId)}
                >
                    -
                </button>
            </div>
        </div>
    )
}

export default ProductCard
