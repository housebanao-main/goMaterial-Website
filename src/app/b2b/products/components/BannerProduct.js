'use client';
import CenterWrapper from "@/components/CenterWrapper";
import { MainHeading, SubHeading } from "@/components/MainHeading";
import React, { useEffect, useState } from "react";

import TopCategories from "./TopCategoryCard";
import BannerImageProduct from "./BannerImageProduct";
import ProductTable from "./ProductTable";
import axios from "axios";
import { API_URL } from "@/utils/constants";

export default function BannerProduct() {
    const [res, setRes] = React.useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedcategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState({});

    async function fetchData(){
        try {
            const {data: {data}} = await axios.get(`${API_URL}/product`);
            // console.log(data)
setRes(data);
let obj= {};
data.map(v=> obj[v.category]="");
obj = Object.keys(obj);
setCategories(obj);
setSelectedCategory(obj[0]);
setFilteredData(data.filter(v=> v.category==obj[0]));
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=> {
       fetchData();
    },[])
    useEffect(()=> {
        if(selectedcategory=="ALL"){
            setFilteredData(res);
            return;
        }
        if(selectedcategory){
            setFilteredData(res.filter(v=> v.category==selectedcategory));
        }
    },[selectedcategory])
    // console.log(res.length, filteredData.length, selectedcategory, categories);
  return (
    <>
      <CenterWrapper>
        <div className="space-y-8">
          <div>
            <SubHeading className={"font-bold"}>Mild Steel Prices</SubHeading>
            <div className="mt-4 flex justify-between gap-8">
              <TopCategories categories= {categories} selectedcategory={selectedcategory} setSelectedCategories={setSelectedCategory} />
              <BannerImageProduct />
            </div>
          </div>
          <div>
            <SubHeading className={"font-bold mb-4"}>Mild Steel most viewed Prices</SubHeading>
            <ProductTable data={filteredData}/>
          </div>
        </div>
      </CenterWrapper>
    </>
  );
}
