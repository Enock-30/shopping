"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/components-list/context/context";

const Homes = () => {
  const [photos, setPhotos] = useState([]);
  const [addToBag, setAddToBag] = useState(0);
  const { addCart } = useCart(); // Use the context to get the addCart function
  useEffect(() => {
    const getPhotos = async () => {
      const respo = await fetch("https://fakestoreapi.com/products");
      const data = await respo.json();
      setPhotos(data);
    };
    getPhotos();
  }, []);

  const handleCart = (product) => {

    addCart(product);
    // setAddToBag(addToBag);
  };

  
  return (
    <>
    <h1 id="head"> welocme to our shop</h1>
      <ul  className=" bg-red-50/0 rounded-[20px] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.25)]   grid items-center sm:grid-cols-2 md:grid-cols-3  gap-1 lg:grid-cols-4">
  
  {photos.map(photo => (
    <li key={photo.id}className="m-auto" >
      {/* <div className="bg-white rounded-xl shadow-md flex flex-col h-auto">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-48 object-contain p-2 bg-white"
        />
        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
              {photo.title}
            </h2>
            <p className="text-green-600 font-bold mt-1">${photo.price}</p>
            <a href={`/shop/${photo.id}`} className="text-sm text-blue-500 hover:underline">
              Read more
            </a>
          </div>
          <button
            onClick={() => addCart(photo)}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm  block m-auto font-semibold py-2 px-4 rounded-md w-30"
          >
            Add to cart
          </button>
        </div>
      </div> */}

        <div className=" bg-red-50/0 rounded-[20px] shadow-[0px_7px_4px_0px_rgba(0,0,0,0.25)]  ">
        
  <div className="rounded-[20px]  bg-gray-200 flex flex-col justify-center items-center gap-2">
    <img className="w-40 h-40 rounded-[10px]" src={`${photo.image}`} />
  </div>
  <div className="self-stretch p-[5px] flex flex-col justify-start items-start gap-[5px]">
    <div className="text-black  font-normal  capitalize " id="title">{photo.title}</div>
  </div>
  <div className="self-stretch p-[5px] inline-flex justify-start items-center gap-2.5">
    <div className="text-center justify-end text-black text-2xl font-bold font-['Instrument_Sans'] tracking-[2.60px]">${photo.price}</div>
  </div>
  <div className="self-stretch p-2.5 inline-flex justify-center items-center  gap-2.5 text-red-500">
    <a href={`/shop/${photo.id}`} className="flex-1 justify-end  text-xl  font-['Inria_Sans'] block capitalize tracking-[2.70px]">read more</a>
  </div>
  <div className="px-7 py-1  mb-5"  >
    <button onClick={ () => handleCart(photo)} id="button" type="button" className=" text-center  bg-green-950 text-white text-xl capitalize tracking-[2.70px]">add cart</button>
  </div>
</div>
      
    </li>
  ))}
</ul>

    
    </>
  );
};
export default Homes;
