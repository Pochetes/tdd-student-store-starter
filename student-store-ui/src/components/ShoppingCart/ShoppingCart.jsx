import React, { Fragment } from "react"
import "./ShoppingCart.css"

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
    console.log('shoppingCart: ', shoppingCart);

    return (
        <div className="shopping-cart">
            {shoppingCart.length > 0 ? (
                shoppingCart.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <h1>{products[item.itemId - 1].name}</h1>
                            <p>{item.quantity}</p>
                        </Fragment>
                    )
                })
            ) : (
                <div>
                    No items items in the cart yet.
                </div>
            )}
            <div className="subtotal">
                Price (without taxes): 200
            </div>
            <div className="taxes">
                Taxes: 0.11
            </div>
            <div className="total-price">
                Total Price: 200.11
            </div>
        </div>
    )
}

export default ShoppingCart
