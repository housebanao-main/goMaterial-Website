"use client";
import { API_URL } from "@/utils/constants";
import React, { useRef } from "react";

function SearchProduct() {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const debounceTimerRef = useRef(null);

  const getSearchResults = async (search) => {
    const response = await fetch(
      `${API_URL}/b2c/products?name=${search}&limit=7`
    );
    const { products } = await response.json();
    console.log(products);
    setSearchResults(products);
  };

  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);

    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      if (newSearchValue.trim()) {
        getSearchResults(newSearchValue);
      } else {
        setSearchResults([]);
      }
    }, 200); // 200ms debounce time
  };

  // Clear timeout on component unmount
  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Search Bar */}
      <div className="flex w-full">
        <div className="relative w-full max-w-md mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for raw materials, home fittings and more..."
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={search}
            onChange={handleChange}
          />

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Search Results
                </h3>
                <ul className="space-y-2">
                  {searchResults.map((product, index) => (
                    <li
                      key={index}
                      className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      <div className="h-12 w-12 flex-shrink-0">
                        <img
                          src={product?.main_image || "/placeholder-image.jpg"}
                          alt={product.product_name}
                          className="h-full w-full object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-800">
                          {product?.product_name}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchProduct;
