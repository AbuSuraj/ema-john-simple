import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = id =>{
    // console.log(id)
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }
  const clearCart =() =>{
    setCart([]);
    deleteShoppingCart();
 }
  return (
    <div className="shop-container">
      <div className="review-container">
          {
            cart.map(product =><ReviewItems
            key={product.id}
            product = {product}
            handleRemoveItem = {handleRemoveItem}
            ></ReviewItems>)
          }
          {
            cart.length ===0 && <h2>No Items for Reivew, Shop <Link to={'/'}>More</Link></h2>
          }
      </div>
      <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
