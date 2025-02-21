import React from "react";
import { FaTruck } from "react-icons/fa";

const CartTotals = () => {
  return (
    <div className="bg-white p-4 shadow-md w-[40%] rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Cart totals</h2>
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <td className="p-2 font-semibold">Subtotal</td>
            <td className="p-2 text-right">₹2,247.00</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 font-semibold">Shipping</td>
            <td className="p-2 text-right">
              <p className="text-green-600 font-medium">Free shipping</p>
              <p className="text-gray-500">Shipping to Gujarat.</p>
              <button className="text-blue-600 flex items-center gap-1 mt-1">
                Change address <FaTruck />
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-semibold">Total</td>
            <td className="p-2 text-right font-semibold">₹2,247.00</td>
          </tr>
        </tbody>
      </table>
      <button className="w-full bg-black text-white py-3 mt-4 rounded-lg text-center">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotals;
