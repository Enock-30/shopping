"use client";
import Navbar from "@/components/global-nav-bar";
import { useContext, createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify'

// import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [counter, setCounter] = useState([]);

  const addCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      toast.warning("item already exist in cart");
      return;
    }
    setCartItems((prevItems) => [...prevItems, { ...product, qty: 1 }]);
    toast.success("item added to the cart sucessfuly !!", {
      theme: "dark",
      hideProgressBar: false,
    });
  };

  const handleDeleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("item deleted from the cart sucessfuly", { theme: "dark" });
  };

  let handleIncrement = (qty) => {
    setCounter((prev) =>
      prev.map((item) => (item.qty === qty ? { ...item, qty: item.qty } : item))
    );
    toast.info("quantity increased sucessfuly", {
      theme: "colored",
    });
  };

  const handleDecrement = (qty) => {
    setCounter((prev) =>
      prev.map((item) => (item.qty === qty ? { ...item, qty: item.qty } : item))
    );
    toast.info("quantity decreased", { theme: "dark" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        counter,
        addCart,
        handleDeleteItem,
        handleIncrement,
        handleDecrement,
      }}
    >
      <Navbar /> 

      <ToastContainer position="top-right" autoClose="2000" />
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  if (!useContext(CartContext)) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return useContext(CartContext);
};
