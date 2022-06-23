import * as React from "react"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
    console.log('product: ', product);
    const { name, image } = product

    return (
        <div className="product-card">
            <img src={image} alt={`${name} image`} />
            <div className="product-details">
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default ProductCard
