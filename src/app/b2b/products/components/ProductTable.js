"use Client";
import moment from "moment";
import { FaRegBookmark, FaWhatsapp } from "react-icons/fa";



export default function ProductTable({data}) {
    
  return (
    <div className="container mx-auto p-0">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-[#F1F5F9] ">
            <tr className="text-left text-gray-800  rounded-xl ">
              <th className="p-3">Products</th>
              <th className="p-3">Brand</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="border-b ">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.brand}</td>
                <td className="p-3">{product.location}</td>
                <td className="p-3">
                  {product.price}
                  <div className="text-sm text-gray-400">
                    {moment(product.date).format('DD/MM/YYYY')}
                  </div>
                </td>
                <td className="p-3 flex items-center gap-2  justify-end">
                  <button className="bg-green-100 text-green-700 border-green-700 border w-28 px-3 py-1 rounded-lg text-sm">
                    Add to cart
                  </button>
                  <button className="bg-red-100 text-red-700 border-red-700 border w-28 px-3 py-1 rounded-lg text-sm">
                    Buy
                  </button>
                  <div className="p-2.5 border rounded-full">
                    <FaRegBookmark className="text-gray-500 cursor-pointer" />
                  </div>
                  <div className="p-2.5 border rounded-full">
                    <FaWhatsapp className="text-green-500 cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
