import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [textDisplayed, setTextDisplayed] = useState("Place Order");
    let totalPrice = 0;
    const cartItemElements = cartItems.map(item => {
        totalPrice = totalPrice+5.99;
        return <CartItem key={item.id} item={item} />
    })
    const handleOrder = () => {
        setTextDisplayed("Ordering...");
        setTimeout(() => {
            emptyCart();
            setTextDisplayed("Place Order");
            console.log("Order placed!")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
    <p className="total-cost">Total: {totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
    <button onClick={()=>handleOrder()}>{textDisplayed}</button>
            </div>
        </main>
    )
}

export default Cart