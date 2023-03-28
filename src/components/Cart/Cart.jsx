import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //system=>3
  // const cart=props.cart //system=>1
  //   const { cart } = props;//system=>2
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2>Order summery</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping Charges: ${totalShipping} </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
