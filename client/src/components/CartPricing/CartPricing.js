import React from 'react'

function CartPricing({subTotals,delivery,total,children,less}) {
    return (
        <React.Fragment>
            <div className = { less ? 'top-ledge' : 'total-price' }>
                <table>
                    <tr>
                        <td><b>Subtotal</b></td> 
                        <td>₦{Number(subTotals).toLocaleString(undefined, {maximumFractionDigits:2})}</td> {/** to 2 d.p. of total */}
                    </tr>
                    <tr>
                        <td><b>Delivery</b></td> 
                        <td>₦{Number(delivery).toLocaleString(undefined, {maximumFractionDigits:2})}</td> 
                    </tr>
                    <tr>
                        <td><b>Total</b></td> 
                        <td>₦{Number(total).toLocaleString(undefined, {maximumFractionDigits:2})}</td> 
                    </tr>
                </table>
            </div>
            <div className = {less ? 'place-order-div' : 'order-div'}>
                {children}
            </div>

        </React.Fragment>
    )
}

export default CartPricing
