import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import "./ProductDetail.css"
import productQuantity from "../../utils/productQuantity"

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
    const [product, setProduct] = useState({})
    const [error, setError] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const { productId } = useParams()

    // fetching data
    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        try {
            setIsFetching(true)
            const fetchedProduct = await axios.get(
                `https://codepath-store-api.herokuapp.com/store/${productId}`
            )
            setIsFetching(false)

            if (fetchedProduct.status != 200) setError(fetchedProduct.statusText)
            else if (fetchedProduct.data.product.length === 0) setError("No product found.")
            else setProduct(fetchedProduct.data.product)
            console.log('fetchedProduct.data.product: ', fetchedProduct.data.product);
        } catch {
            setError("Product fetching error")
        }
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={`${product.name} image`} />
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <p>{productQuantity(productId, shoppingCart)}</p>
        </div>
    )
}

export default ProductDetail
