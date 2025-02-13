"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp, BsBookmark } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { Paragraph, SubHeading } from "@/components/MainHeading";
import axios from "axios";
import { API_URL } from "@/utils/constants";
export default function NewsData() {
  const [newsData, setNewsData] = useState([]);
  const [filteredNewsData, setFilteredNewsData] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  async function fetchData() {
    try {
      let {
        data: { news },
      } = await axios.get(`${API_URL}/newz`);
      news = news.map((v) => ({
        ...v,
        tag_types: convertToArray(v.tag_types[0]),
      }));

      setNewsData(news);
      setFilteredNewsData(news);
    } catch (error) {
      console.log(
        error.message || error.response.data.message || "NETWORK ERROR"
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredNewsData(
      newsData.filter((v) => v.tag_types.includes(selectedTag))
    );
  }, [selectedTag]);

  const tagTypes = [...new Set(newsData.map((v) => v.tag_types).flat())];
  console.log(tagTypes);
  return (
    <div>
      {tagTypes.length > 0 && (
        <span className="flex gap-4 mb-4">
          {tagTypes.map((v) => (
            <span
              onClick={() => setSelectedTag(v)}
              className={`${
                selectedTag == v
                  ? " bg-blue-600 text-white"
                  : " text-blue-600 bg-white border-blue-600 border"
              } cursor-pointer  px-3 py-1 rounded-full`}
            >
              {v}
            </span>
          ))}
        </span>
      )}
      {filteredNewsData.length > 0 &&
        filteredNewsData.map((news, index) => (
          <NewsCard news={news} key={index} />
        ))}
    </div>
  );
}

const NewsCard = ({ news }) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden relative ">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={news.img_src}
            alt="News thumbnail"
            className="w-[17vw] object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center gap-4">
              <SubHeading className=" font-semibold mb-2 ">
                {news.title}
              </SubHeading>
              <div className="flex items-center gap-4  ">
                <div className="flex items-center gap-1 text-gray-600">
                  <BsWhatsapp className="w-4 h-4" />
                  <span className="text-sm">8</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <AiOutlineLike className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </div>
                <BsBookmark className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Metadata */}
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              <span>5 hours ago</span>
              <span>•</span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {news.news_type}
              </span>
              {(news?.tag_types).map((v) => (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {v}
                </span>
              ))}
              {news?.news_link && (
                <a target="_blank" href={news.news_link}>
                  {" "}
                  <span className="text-gray-500 cursor-pointer hover:text-blue-600">
                    {news.news_link.split("/")[2]}
                  </span>
                </a>
              )}
            </div>

            {/* Description */}
            <Paragraph className="text-gray-700 flex-grow">
              {news.description}
            </Paragraph>

            {/* Interaction buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

function convertToArray(str) {
  // Remove the outer quotes if present
  str = str.replace(/^['"]|['"]$/g, "");
  // Remove the square brackets
  str = str.slice(1, -1);
  // Split by comma and clean up each item
  return str.split(",").map(
    (item) => item.trim().replace(/^['"]|['"]$/g, "") // Remove quotes around each item
  );
}
