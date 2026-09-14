"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Toggle from "@/components-list/toggle-bar";
import Footer from "@/footer/page";
import Modal from "./shop/modal-over-lay";
import { Hind_Guntur } from "next/font/google";

export default function MainPage() {
  const [openToggle, setOpenToggle] = useState(false);
  const Myicon = () => {
    return <FontAwesomeIcon icon={faBars} />
  }
  return (
    <>
      {openToggle && <Toggle />}
     
      <div  className="pt-16 m-2 " >
        <div
          style={{
            display: "flex",
          }}
        >
          <h1 className="text-3xl font-bold mb-4 flex-1">
            Welcome to the Shopping App!
          </h1>

          <button
            className="cursor-pointer text-black-900 hover:opacity-75 hover:bg-green-800 text-white-800 rounded-full w-20 text-center"
            onClick={() => setOpenToggle(!openToggle)}
            
          >
            <Myicon />
          </button>
        </div>
        <p className="text-gray-700 mb-2">
          Shop with us and discover big deals up to 20% off.
        </p>
        <p className="text-gray-700">
          
          <a href="/sell" className="text-indigo-600 underline">
            sell your products with us
          </a>
          .
        </p>
        <div className="relative ">
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          ></div> */}
          <p className="  p-2 wrap  text-white  text-20 text-lg">
            shop with us and discover more on our big deals and discount upto
            20%
          </p>
          <img
            className="  w-full h-100 object-contain block p-4 "
            src="https://www.shutterstock.com/image-photo/hero-low-angle-shot-large-260nw-2617575817.jpg"
            alt=""
          />
        </div>
      </div>
      
  <Footer/>
    </>
  );
};


