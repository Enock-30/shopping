"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/components-list/context/context";
const ProductsById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [closeToggle,setCloseToggle] = useState(true)
  const {addCart} = useCart()
  useEffect(() => {
    const getProducts = async () => {
      const fetchProduct = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const data = await fetchProduct.json();
      setProduct(data);
    };
    getProducts();
  }, []);


  const handleCart = (product) => {
    setProduct(product);
    addCart(product)
  };
const closeBtn = (e)=>{
e.preventDefault()
setCloseToggle(!closeToggle)

}

  return (
    <>
      <ul className="flex flex-col items-center justify-center mt-20"> 
        
        <li key={product.id}>
          {/* <img src={`${product.image}`} width={"50%"} />
          <h3> Title: {product.title}</h3>
          <p>{product.description}</p>
          <h1> price: {product.price}</h1>
          <h3> Ratings: {product.rating.rate}</h3> 
          <h4 classNameName="text-orange-800">
            Get it as soon as Tuesday, June 17
          </h4>
          <p classNameName="text-white mb-2">Fulfilled by Eagle1 - FREE Shipping</p>

          <button
            onClick={() => handleCart(product)}
            classNameName="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md w-50 block m-auto"
          >
            Add to cart
          </button> */}
                        {console.log(product)
                        }
         {closeToggle ?   <div  className="relative z-10" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0   hidden bg-gray-500/75 transition-opacity md:block" aria-hidden="true"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto top-20">
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
        <button onClick={closeBtn} type="button" className="absolute top-4 right-4 text-red-400 hover:text-black sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
            <span className="sr-only">Close</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <img src={product.image} alt={product.title} className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5" />
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" >qty:1</h3>

                <p className="text-2xl text-gray-900">${product.price}</p>
                <p className="mt-4 text-gray-500">{product.description}</p>
              
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">Product options</h3>

                <form>
                  {/* <!-- Colors --> */}
                  <fieldset aria-label="Choose a color">
                    <legend className="text-sm font-medium text-gray-900">Color</legend>

                    <div className="mt-4 flex items-center gap-x-3">
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="White" className="sr-only"  />
                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-white"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="Gray" className="sr-only" />
                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-200"></span>
                      </label>
                      {/* <!-- Active and Checked: "ring-3 ring-offset-1" --> */}
                      <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-hidden">
                        <input type="radio" name="color-choice" value="Black" className="sr-only"/>
                        <span aria-hidden="true" className="size-8 rounded-full border border-black/10 bg-gray-900"></span>
                      </label>
                    </div>
                  </fieldset>

                  {/* <!-- Sizes --> */}
                  <fieldset className="mt-10" aria-label="Choose a size">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">Size</div>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-4">
                      {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XXS" className="sr-only" />
                        <span>XXS</span>
                        {/* <!--
                          Active: "border", Not Active: "border-2"
                          Checked: "border-indigo-500", Not Checked: "border-transparent"
                        --> */}
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XS" className="sr-only" />
                        <span>XS</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="S" className="sr-only"/>
                        <span>S</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="M" className="sr-only" />
                        <span>M</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="L" className="sr-only" />
                        <span>L</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XL" className="sr-only" />
                        <span>XL</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium text-gray-900 uppercase shadow-xs hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input type="radio" name="size-choice" value="XXL" className="sr-only" />
                        <span>XXL</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium text-gray-200 uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1">
                        <input  type="radio" name="size-choice" value="XXXL" disabled className="sr-only" />
                        <span>XXXL</span>
                        <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                          <svg className="absolute inset-0 size-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vectorEffect="non-scaling-stroke" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {/* <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden" > Add to bag</button> */}
                </form>
                <button
            onClick={() => handleCart(product)}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded-md w-50 block m-auto"
          >
            Add to cart
          </button> 
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> : null
}
        </li>
      </ul>
    </>
  );
};
export default ProductsById;
