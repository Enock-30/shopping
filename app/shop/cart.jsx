

'use client';
import React, { useState } from 'react';

import { useCart } from "@/components-list/context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ShoppingItems from '@/components-list/shoppingcart';

const Cart = () => {
  const { cartItems } = useCart();
const [opencart,setOpencart] = useState(false)
const openCart = ()=>{
  
  // if(cartItems.length < 1){
  //     alert( 'empty cart')
  //   }
    setOpencart(!opencart)
}
  return (
    <>
    <div className="relative mr-10 mb-10 mt-10">
    
      <p className="text-yellow-400 text-2xl relative" onClick={openCart}>
        <FontAwesomeIcon icon={faCartShopping} />

   
        {cartItems.length >0 && (
          <button className="absolute -top-1 -right-2  cursor-pointer bg-red-600 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
            {cartItems.length} 
          </button>
        )} 
     </p>
    </div>
      {opencart && <ShoppingItems/>}



      </>
  );
};

export default Cart;
