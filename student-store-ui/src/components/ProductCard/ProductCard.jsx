import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({ product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription }) => {
    const { name, image, price, description } = product

    return (
        <div className="product-card">
            <div className="media">
                <Link to={`/products/${productId}`}>
                    <img src={image} alt={`${name} image`} />
                </Link>
            </div>
            <div className="product-details">
                <div className="product-name">
                    {name}
                </div>
                <div className="product-price">
                    ${price}
                </div>
            </div>
            <div className={showDescription ? `product-desc ${show}` : "product-desc"}>
                {description}
            </div>
            <div className="product-card-cart">
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
