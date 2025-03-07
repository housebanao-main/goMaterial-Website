"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import useCartStore from "../../../../store/cart"; // Import the zustand store
import Link from "next/link";

const CartItems = () => {
  const { b2cCart, addToB2cCart, removeFromB2cCart } = useCartStore(); // Destructure the store

  const updateQuantity = (id, delta) => {
    const updatedItems = b2cCart.map((item) => {
      if (item._id === id) {
        const newQuantity = Math.min(10, Math.max(1, item.quantity + delta));
        const updatedItem = { ...item, quantity: newQuantity };
        addToB2cCart(updatedItem); // Update the store
        return updatedItem;
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
          {b2cCart.map((item) => (
            <tr key={item._id} className="border-b  items-center w-full">
              <td className="p-2 text-center">
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromB2cCart(item)}
                >
                  <FaTimes />
                </button>
              </td>
              <td className="p-2 flex items-center gap-2">
                <img
                  src={item.main_image}
                  alt={item.product_name.split("|")[0]}
                  className="w-12 h-12 rounded"
                />
                <Link href={`product/${item._id}`}>
                  <div>
                    <p className="font-semibold">
                      {item.product_name.split("|")[0]}
                    </p>
                  </div>
                </Link>
              </td>
              <td className="p-2 text-center">₹{item.selling_price}</td>
              <td className="p-2  text-center flex items-center justify-center gap-2  ">
                <button
                  onClick={() => updateQuantity(item._id, -1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-12 border rounded p-1 text-center"
                  value={item.quantity}
                  readOnly
                />
                <button
                  onClick={() => updateQuantity(item._id, 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </td>
              <td className="p-2 text-center">
                ₹{(item.selling_price * item.quantity).toFixed(2)}
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
