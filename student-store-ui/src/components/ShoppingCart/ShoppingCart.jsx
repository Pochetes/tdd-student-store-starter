import React, { Fragment } from "react"
import handlePricing from "../../utils/handlePricing"
import "./ShoppingCart.css"

const ShoppingCart = ({ isOpen, globalProducts, products, shoppingCart }) => {

    const pricingInfo = handlePricing(shoppingCart, globalProducts)

    return (
        <div className="shopping-cart">
            <h2>Your Order</h2>
            <div className="order-headers">
                <div>Name</div>
                <div>Quantity</div>
                <div>Unit<br></br>Price</div>
                <div>Cost</div>
            </div>
            {shoppingCart.length > 0 ? (
                shoppingCart.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="card-product">
                                <h1 className="card-product-name">{products[item.itemId - 1].name}</h1>
                                <h2 className="card-product-quantity">x{item.quantity}</h2>
                                <h2 className="card-product-unit-price">${products[item.itemId - 1].price}</h2>
                                <h2 className="card-product-cost">${products[item.itemId - 1].price * item.quantity}</h2>
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
                    Subtotal: ${pricingInfo._subTotal}
                </div>
                <div className="taxes">
                    Taxes: ${pricingInfo._calculatedTaxes}
                </div>
                <div className="shopping-cart-line total"></div>
                <div className="total-price">
                    Total: <span>${pricingInfo._totalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
