"use client";
import { API_URL } from "@/utils/constants";
import Link from "next/link";
import React, { useRef } from "react";

function SearchProduct() {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(false);
  const debounceTimerRef = useRef(null);

  const getSearchResults = async (search) => {
    if (!search.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(
        `${API_URL}/b2c/products?name=${search}&limit=7`
      );
      const { products } = await response.json();
      console.log(products);
      setSearchResults(products || []);
      setHasSearched(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleChange = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);

    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!newSearchValue.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      getSearchResults(newSearchValue);
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

  const showDropdown =
    search.trim() && (searchResults.length > 0 || hasSearched);

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

          {/* Search Results or No Results UI */}
          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
              <div className="p-2">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Search Results
                </h3>

                {isSearching ? (
                  <div className="py-4 text-center">
                    <div className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-blue-500"></div>
                    <p className="text-sm text-gray-500 mt-2">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <ul className="space-y-2">
                    {searchResults.map((product, index) => (
                      <Link href={`b2c/product/${product._id}`} key={index}>
                        <li className="flex items-center p-2 hover:bg-gray-50 rounded-md cursor-pointer">
                          <div className="h-12 w-12 flex-shrink-0">
                            <img
                              src={
                                product?.main_image || "/placeholder-image.jpg"
                              }
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
                      </Link>
                    ))}
                  </ul>
                ) : (
                  <div className="py-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-300 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 13.5V13m-7.5 8l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm mt-2">
                      No results found for "{search}"
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Try different keywords or check spelling
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchProduct;
