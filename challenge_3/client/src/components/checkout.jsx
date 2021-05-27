import React from 'react'

var Checkout = ({ next }) => (
  <div>
    <h1>Checkout</h1>
    <button id="checkout" onClick={next}>Checkout</button>
  </div>
)

export default Checkout;