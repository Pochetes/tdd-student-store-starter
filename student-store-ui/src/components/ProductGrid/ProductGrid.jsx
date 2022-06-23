import React, { Fragment } from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

const ProductGrid = ({ products }) => {
    return (
        <>
            <h1>Best Selling Products</h1>
            <div className="product-grid">
                {products.map((product, index) => {
                    return (
                        <Fragment key={index}>
                            <ProductCard
                                product={product}
                            />
                        </Fragment>
                    )
                })}
            </div>
        </>
    )
}

export default ProductGrid
