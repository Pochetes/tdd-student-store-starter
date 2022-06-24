import * as React from "react"
import shoppingCartIcon from "/shoppingCartIcon.png"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
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
    </section>
  )
}
