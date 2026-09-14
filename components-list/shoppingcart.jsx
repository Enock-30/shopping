"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components-list/context/context";
import { useParams } from "next/navigation";
import styles from "../components-list/styles.module.css";
const ShoppingItems = () => {
  const [isClose, setIsClose] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const closeBtn = (e) => {
    e.preventDefault();
    setIsClose(!isClose);
  };

  let sum = 0;
  let {
    cartItems,
    counter,
    handleDeleteItem,
    handleIncrement,
    handleDecrement,
  } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  useEffect(() => {
    setMessage("item added to the cart sucessfuly");
  }, []);
  return (
    <>
      {/* show products in shoppind log */}
      {/* to sum up the price of all products */}
      {/* work on side-bar toggle menu */}

      {isClose ? (
        <button
          onClick={() => {
            setIsClose(false);
          }}
          className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-green-900 hover:bg-gray-950/10"
        ></button>
      ) : (
        <div
          className="relative z-10 w=full overflow-y-hidden"
          aria-labelledby="drawer-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <div className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="drawer-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={closeBtn}
                            type="button"
                            className="relative -m-2 p-2  pointer-cursor text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Close panel</span>
                            <svg
                              className="size-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              data-slot="icon"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((item) => {
                              return (
                                <li className="flex py-6" key={item.id}>
                                  <h3 className="sr-only">${item.category}</h3>
                                  <div className="size-24 shrink-0 overflow-hidden rounded-md ">
                                    <img
                                      src={item.image}
                                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                      className="size-full object-contain "
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{item.title}</a>
                                        </h3>
                                        <p className="ml-4">${item.price}</p>
                                      </div>
                                    </div>

                                    <div className="flex flex-1 items-end justify-between text-sm ">
                                      <div className="flex justify-center items-center gap-3 border-2 border-orange-200 w-30 rounded-3xl h-10">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleDecrement(
                                              item.qty === 1 ? null : item.qty--
                                            )
                                          }
                                          className="font-medium text-red-600 p-3 rounded text-5xl mb-2 "
                                        >
                                          -
                                        </button>

                                        <p className="text-orange-900 p-3 text-1xl">
                                          {item.qty}
                                        </p>

                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleIncrement(item.qty++)
                                          }
                                          className="font-medium text-green-900  pr-3  text-3xl"
                                        >
                                          +
                                        </button>
                                      </div>
                                      <button
                                        onClick={() =>
                                          handleDeleteItem(item.id)
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500 border-2 border-sky-200 w-20 h-10 rounded-3xl text-1xl"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p className={styles.sucess}>{totalPrice.toFixed(2)}</p>
                        <h2> </h2>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="/paymentMethod"
                          target="_blank"
                          className="flex items-center w-full cursor-pointer justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700 m-auto"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <a
                            href="/shop"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ShoppingItems;
