import React, { useState, useEffect } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import "./App.css"

const URL = "https://codepath-store-api.herokuapp.com/store"

export default function App() {
  const [products, setProducts] = useState([])
  const [globalProducts, setGlobalProducts] = useState([])
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [isFetchingCheckoutForm, setIsFetchingCheckoutForm] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // user checking items out
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({
    email: "",
    name: "",
  })

  useEffect(async () => {
    fetchData()
  }, [])

  // api request(s)
  const fetchData = async () => {
    try {
      setIsFetching(true)
      const data = await axios.get(URL)
      setIsFetching(false)

      if (data.status != 200) setError(data.statusText)
      else if (data.data.products.length === 0) setError("No Products Found.")
      else {
        setProducts(data.data.products)
        setGlobalProducts(data.data.products)
      }
    } catch {
      setError("Server Error")
    }
  }

  // handlers
  const handleOnToggle = () => {
    setIsOpen(currentState => !currentState)
  }

  const handleAddItemToCart = productId => {
    let newShoppingCart = []
    let exists = false

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId != productId) {
        newShoppingCart.push(shoppingCart[i])
      } else {
        newShoppingCart[i] = {
          itemId: productId,
          quantity: shoppingCart[i].quantity + 1,
        }
        exists = true
      }
    }

    if (!exists) {
      newShoppingCart.push({
        itemId: productId,
        quantity: 1,
      })
    }

    setShoppingCart(newShoppingCart)
  }

  const handleRemoveItemFromCart = productId => {
    let newShoppingCart = []

    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId != productId) {
        newShoppingCart.push(shoppingCart[i])
      } else if (shoppingCart[i].quantity - 1 > 0) {
        newShoppingCart[i] = {
          itemId: productId,
          quantity: shoppingCart[i].quantity - 1
        }
      }
    }

    setShoppingCart(newShoppingCart)
  }

  const handleOnCheckoutFormChange = (name, value) => {
    const newCheckoutForm = {
      ...checkoutForm,
      [name]: value
    }

    setCheckoutForm(newCheckoutForm)
  }

  const handleOnSubmitCheckoutForm =  async () => {
    console.log(checkoutForm)
    setIsFetchingCheckoutForm(true)
    try {
      if (checkoutForm.name === "" || checkoutForm.email == "") {
        setError("Name or email is missing!")
        return
      }
      if (shoppingCart.length === 0) {
        setError("Cannot checkout without selecting at least 1 item!")
        return
      }

      const dataToSend = await axios.post(
        URL,
        {
          user: checkoutForm,
          shoppingCart: shoppingCart,
        }
      )

      setIsFetchingCheckoutForm(false)
      if (dataToSend.status != 201) {
        setError("Could not complete transaction")
        return
      }
      setSuccess("Transaction successful")

      // reset shopping cart and user's checkout form
      setShoppingCart([])
      setCheckoutForm({
        name: "",
        email: "",
      })

    } catch (err) {
      setError("Server Error")
    }
  }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleOnToggle={handleOnToggle}
          error={error}
          success={success}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                products={products}
                globalProducts={globalProducts}
                setProducts={setProducts}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                shoppingCart={shoppingCart}
                />
              }
            />
            <Route
            path="/products/:productId"
            element={
              <ProductDetail
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                shoppingCart={shoppingCart}
              />
            }
            />
            <Route
              path="/#about"
              element={<About />}
            />
            <Route
              path="/#contact"
              element={<Contact />}
            />
            <Route
            path="*"
            element={<NotFound />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
