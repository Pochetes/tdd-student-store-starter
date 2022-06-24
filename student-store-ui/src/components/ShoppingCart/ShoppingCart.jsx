import React, { Fragment } from "react"
import "./ShoppingCart.css"

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Your Order</h2>
            {shoppingCart.length > 0 ? (
                shoppingCart.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="card-product">
                                <h1 className="card-product-name">{products[item.itemId - 1].name}</h1>
                                <h2 className="card-product-quantity">{item.quantity}</h2>
                            </div>
                        </Fragment>
                    )
                })
            ) : (
                <div className="notification">
                    No items items in the cart yet.
                </div>
            )}
            <div className="shopping-cart-price">
                <div className="shopping-cart-line"></div>
                <div className="subtotal">
                    Price (without taxes): 200
                </div>
                <div className="taxes">
                    Taxes: 0.11
                </div>
                <div className="shopping-cart-line total"></div>
                <div className="total-price">
                    Total Price: <span>$200.00</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
