"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";

const CartItems = () => {
  const cartItems = [
    {
      id: 1,
      name: "Electric cutter - White",
      style: "Modern",
      price: 990,
      quantity: 2,
      image: "https://picsum.photos/300/200?random=4", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Hand Sander",
      price: 89,
      quantity: 3,
      image: "https://picsum.photos/300/200?random=4", // Replace with actual image URL
    },
  ];

  const updateQuantity = (id, delta) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.min(10, Math.max(1, item.quantity + delta));
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    console.log(updatedItems); // Replace with state update logic
  };

  return (
    <div className="bg-white p-4 w-[70%] shadow-md rounded-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2"></th>
            <th className="p-2 text-left">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b  items-center w-full">
              <td className="p-2 text-center">
                <button className="text-red-500 hover:text-red-700">
                  <FaTimes />
                </button>
              </td>
              <td className="p-2 flex items-center gap-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  {item.style && (
                    <p className="text-gray-500 text-sm">Style: {item.style}</p>
                  )}
                </div>
              </td>
              <td className="p-2 text-center">₹{item.price.toFixed(2)}</td>
              <td className="p-2 text-center flex items-center justify-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-12 border rounded p-1 text-center"
                  value={item.quantity}
                  readOnly
                />
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </td>
              <td className="p-2 text-center">
                ₹{(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Coupon code"
          className="border rounded p-2 w-1/3"
        />
        <button className="bg-blue-700 text-white px-4 py-2 rounded">
          Apply coupon
        </button>
        {/* <button className="bg-gray-400 text-white px-4 py-2 rounded" disabled>
          Update cart
        </button> */}
      </div>
    </div>
  );
};

export default CartItems;
