import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const tempData = [
  {
    id: 1,
    name: "Electric cutter",
    image: "https://picsum.photos/60",
    priceRange: "₹600.00 – ₹900.00",
    stockStatus: "In Stock",
  },
  {
    id: 1,
    name: "Electric cutter",
    image: "https://picsum.photos/60",
    priceRange: "₹600.00 – ₹900.00",
    stockStatus: "In Stock",
  },
  {
    id: 2,
    name: "Electric cutter",
    image: "https://picsum.photos/60",
    priceRange: "₹600.00 – ₹900.00",
    stockStatus: "In Stock",
  },
  {
    id: 3,
    name: "Electric cutter",
    image: "https://picsum.photos/60",
    priceRange: "₹600.00 – ₹900.00",
    stockStatus: "In Stock",
  },
  {
    id: 4,
    name: "Electric cutter",
    image: "https://picsum.photos/60",
    priceRange: "₹600.00 – ₹900.00",
    stockStatus: "In Stock",
  },
];

const WishlistTable = () => {
  const [products, setProducts] = useState(tempData);

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border"> </th>
            <th className="p-3 border text-left">Product name</th>
            <th className="p-3 border">Unit price</th>
            <th className="p-3 border">Stock status</th>
            <th className="p-3 border"> </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border">
              <td className="p-3 text-center">
                <FaTimes
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemove(product.id)}
                />
              </td>
              <td className="p-3 flex items-center gap-3">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
                <span>{product.name}</span>
                <button className="px-3 py-1 text-gray-700 bg-gray-200 rounded">
                  Quick View
                </button>
              </td>
              <td className="p-3 text-center">{product.priceRange}</td>
              <td className="p-3 text-green-600 text-center">{product.stockStatus}</td>
              <td className="p-3 text-center">
                <button className="px-4 py-2 bg-blue-900 text-white rounded">
                  Select options
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Share Section */}
      <div className="mt-4 flex items-center gap-2">
        <span>Share on:</span>
        <a href="#" className="text-blue-600">
          🔵 Facebook
        </a>
        <a href="#" className="text-red-600">
          📌 Pinterest
        </a>
        <a href="#" className="text-orange-500">
          ✉️ Email
        </a>
        <a href="#" className="text-green-600">
          ✅ WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WishlistTable;
