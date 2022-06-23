import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import "./ProductDetail.css"
import productQuantity from "../../utils/productQuantity"
import ProductView from "../ProductView/ProductView"
import Loader from "../Loader/Loader"
import NotFound from "../NotFound/NotFound"

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
    console.log('shoppingCart: ', shoppingCart);
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
