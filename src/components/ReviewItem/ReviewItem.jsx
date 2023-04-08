import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, img, quantity, price, id } = product;
  return (
    <div className="review-container">
      <img src={img} alt="" />
      <div className="review-info">
        <p className="product-title">{name}</p>
        <p>
          price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemove(id)} className="btn-dlt">
        <FontAwesomeIcon className="dlt-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
