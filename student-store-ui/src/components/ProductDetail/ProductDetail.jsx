import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import "./ProductDetail.css"
import productQuantity from "../../utils/productQuantity"
import ProductView from "../ProductView/ProductView"
import Loader from "../Loader/Loader"
import NotFound from "../NotFound/NotFound"
import { BASE_API_URL } from "../../constants"

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
                `${BASE_API_URL}/store/${productId}`
            )
            setIsFetching(false)

            if (fetchedProduct.status != 200) setError(fetchedProduct.statusText)
            else if (fetchedProduct.data.length === 0) setError("No product found.")
            else setProduct(fetchedProduct.data)
        } catch {
            setError("Product fetching error")
        }
    }

    return (
        <div className="product-detail">
            {isFetching ? (
                    <Loader />
                ) : (
                    <>
                        {!isFetching && error == "" ? (
                            <ProductView
                                product={product}
                                productId={productId}
                                quantity={productQuantity(productId, shoppingCart)}
                                handleAddItemToCart={handleAddItemToCart}
                                handleRemoveItemFromCart={handleRemoveItemFromCart}
                            />
                        ) : (
                            error != "" && <NotFound />
                        )}
                    </>
                )
            }
        </div>
    )
}

export default ProductDetail
