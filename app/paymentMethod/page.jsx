'use client';

import { useState } from 'react';

export default function CheckoutPayment() {
  const [method, setMethod] = useState('card');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing ${method.toUpperCase()} payment...`);
  };

  return (
    <div className="max-w-xl  md:mt-65 mx-auto p-6 bg-white rounded-xl shadow-md mt-50">
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Options</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Payment Method Select */}
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { id: 'card', label: 'Credit/Debit Card' },
            { id: 'mastercard', label: 'MasterCard' },
            { id: 'tabby', label: 'Tabby' },
            { id: 'paypal', label: 'PayPal' },
            { id: 'applepay', label: 'Apple Pay' },
          ].map(({ id, label }) => (
            <button
              type="button"
              key={id}
              className={`px-4 py-2 rounded-full border ${
                method === id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setMethod(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Form Details Based on Method */}
        {method === 'card' || method === 'mastercard' ? (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Card Number"
              className="w-full p-2 border rounded-md"
              required
            />
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="MM/YY"
                className="w-1/2 p-2 border rounded-md"
                required
              />
              <input
                type="number"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded-md"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        ) : (
          <div className="text-center text-gray-500">
            You’ll be redirected to <strong>{method.toUpperCase()}</strong> to complete the payment.
          </div>
        )}

        <a
          href="/address" 
          type="submit"
          className="w-50  block m-auto text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-md"
        >
          Pay Now
        </a>
      </form>
    </div>
  );
}
