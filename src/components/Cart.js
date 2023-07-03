import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
// import RestaurantCard from "./RestaurantCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const store = useSelector((store) => store);
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart Item-{cartItems.length}</h1>
      <button
        className=" bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex"></div>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
