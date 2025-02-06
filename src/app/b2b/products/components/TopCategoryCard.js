import { MainHeading, SubHeading } from "@/components/MainHeading";
import { IMG_PLACEHOLDER } from "@/utils/constants";
import { FaChevronRight } from "react-icons/fa";

// const categories = [
//   { name: "Mild Steel", image: "https://picsum.photos/40?steel=1" },
//   { name: "Non Ferrous", image: "https://picsum.photos/40?random=2" },
//   { name: "Polymers & Packaging", image: "https://picsum.photos/40?random=3" },
//   { name: "Chemicals", image: "https://picsum.photos/40?random=4" },
//   { name: "Energy & Petroleum", image: "https://picsum.photos/40?random=5" },
//   { name: "Stainless Steel", image: "https://picsum.photos/40?random=7" },

//   { name: "Pipes", image: "https://picsum.photos/40?random=6" },
// ];

export default function TopCategories({categories,selectedcategory, setSelectedCategories}) {
    
    if(categories.length==0){
        return null;
    }




  return (
    <div className="border rounded-xl p-4 basis-1/4 bg-white shadow-md">
      <SubHeading className="mb-3 font-semibold">Top categories</SubHeading>
      <ul>
        {categories?.length &&  categories.map((category, index) => (
          <li
          onClick={()=> setSelectedCategories(category)}
            key={index}
            className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer ${selectedcategory === category ? 'bg-gray-200' : ''}`}
          >
            <div className="flex items-center gap-3">
              <img src={IMG_PLACEHOLDER} alt={category} className="w-10 h-10 rounded-full" />
              <span className="text-sm font-medium">{category}</span>
            </div>
            <FaChevronRight className="text-gray-500" />
          </li>
        ))}
       <li
          onClick={()=> setSelectedCategories("ALL")}
            key={500}
            className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer ${selectedcategory === "ALL" ? 'bg-gray-200' : ''}`}
          >
            <div className="flex items-center gap-3">
              <img src={IMG_PLACEHOLDER} alt={"all categories"} className="w-10 h-10 rounded-full" />
              <span className="text-sm font-medium">All Categories</span>
            </div>
            <FaChevronRight className="text-gray-500" />
          </li>
      </ul>
    </div>
  );
}
