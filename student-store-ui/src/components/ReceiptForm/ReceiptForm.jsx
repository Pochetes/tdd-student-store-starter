import * as React from "react"

const ReceiptForm = ({ receipt }) => {
    console.log("IM HERE")

    return (
        <div className="receipt">
            <div className="receipt-content">
                {receipt}
            </div>
        </div>
    )
}

export default ReceiptForm
