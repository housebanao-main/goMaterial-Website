"use client"
import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("description");

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
            activeTab === "reviews"
              ? "border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (0)
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "description" && (
          <p className="text-gray-600">
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>
        )}
        {activeTab === "reviews" && (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default TabSection;
