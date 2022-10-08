import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItems.css";
const ReviewItems = ({ product, handleRemoveItem }) => {
  const { id,  name, price, quantity, img, shipping } = product;
//   console.log(product);
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <p>{name}</p>
          <p> price:{price}</p>
          <p> quantity: {quantity}</p>
          <p> shipping: {shipping}</p>
        </div>
         
      
      <div className="delete-container">
        <button onClick={()=> handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon className="delete-icon"
            icon= {faTrash}
            ></FontAwesomeIcon>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ReviewItems;
