"use client";
import React, { useEffect, useState } from "react";

const TabSection = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const desc = document.querySelector(".desc");
    desc.innerHTML = product?.product_details;
  }, []);

  return (
    <div className="w-full px-20">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "description"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-semibold ${
            activeTab === "specs" ? "border-b-2 border-black" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("specs")}
        >
          Specifications
        </button>
      </div>
      <div className="mt-4">
        {/* {activeTab === "description" && ( */}
        <div
          className={`text-gray-600 desc ${
            activeTab === "description" ? "block" : "hidden"
          }`}
        ></div>
        {/* )} */}
        {activeTab === "specs" && (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border border-gray-300 text-left">
                    Specification
                  </th>
                  <th className="py-2 px-4 border border-gray-300 text-left">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(product?.prod_specs).map((key, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-2 px-4 border border-gray-300 font-medium">
                      {key}
                    </td>
                    <td className="py-2 px-4 border border-gray-300">
                      {product?.prod_specs[key]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;
