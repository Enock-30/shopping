

import Cart from "@/app/shop/cart"
const  Navbar = () =>{
  return (
    <nav className="bg-green-900 w-full font-xl  fixed opacity-0.95 z-1 top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-3 lg:px-5">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-2">
              <a href="/shop" className="rounded-md px-3 py-2 text-2l font-medium text-gray-300 hover:bg-black">Shop</a>
              <a href="/about" className="rounded-md px-3 py-2 text-2l font-medium text-gray-300 hover:bg-black hover:text-white">About Us</a>
              <a href="/blog" className="rounded-md px-3 py-2 text-2l font-medium text-gray-300 hover:bg-black hover:text-white">Blog</a>
              <a href="/services" className="rounded-md px-3 py-2 text-2l font-medium text-gray-300 hover:bg-black hover:text-white">Services</a>
              <a href="/support" className="rounded-md px-3 py-2 text-2l font-medium text-gray-300 hover:bg-black hover:text-white">Support</a>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <Cart />
            <a href="/login" className="text-white hover:text-red-500">Login</a>
            <a href="/signup" className="text-white hover:text-black">SignUp</a>
          </div>
        </div>
      </div>
    </nav>
  );
}




  
export default Navbar