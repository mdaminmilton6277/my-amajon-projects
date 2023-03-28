import "./Product.css";
import React from "react";

const Product = (props) => {
  console.log(props.product);
  const { img, seller, quantity, name, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: {price}</p>
        <p>ManuFacturer: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
