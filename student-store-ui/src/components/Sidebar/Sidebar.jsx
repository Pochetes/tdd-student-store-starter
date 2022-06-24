import * as React from "react"
import shoppingCartIcon from "/shoppingCartIcon.png"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error, success }) {
  return (
    <section className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
      className="toggle-button"
      onClick={() => handleOnToggle()}
      >
        <img src={shoppingCartIcon} alt="shopping cart icon" />
      </button>
      <ShoppingCart
      isOpen={isOpen}
      products={products}
      shoppingCart={shoppingCart}
      />
      <CheckoutForm
      isOpen={isOpen}
      shoppingCart={shoppingCart}
      checkoutForm={checkoutForm}
      handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      error={error}
      success={success}
      />
    </section>
  )
}
