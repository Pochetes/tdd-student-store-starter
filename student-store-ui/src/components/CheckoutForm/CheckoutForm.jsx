import * as React from "react"
import Loader from "../Loader/Loader"
import "./CheckoutForm.css"

const CheckoutForm = ({ isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, isFetchingCheckoutForm, error, success }) => {
    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <input
            value={checkoutForm.email}
            type="email"
            name="email"
            placeholder="student@codepath.org"
            className="checkout-form-input"
            onChange={e => handleOnCheckoutFormChange("email", e.target.value)}
            />
            <input
            value={checkoutForm.name}
            type="text"
            name="name"
            placeholder="Student Name"
            className="checkout-form-input"
            onChange={e => handleOnCheckoutFormChange("name", e.target.value)}
            />
            <button
            type="submit"
            className="checkout-button"
            onClick={handleOnSubmitCheckoutForm}
            >
                {isFetchingCheckoutForm ? (
                    <Loader />
                ) : "Checkout"}
            </button>
            {error != "" && <div className="error">{error}</div>}
            {success != "" && <div className="success">{success}</div>}
        </div>
    )
}

export default CheckoutForm
