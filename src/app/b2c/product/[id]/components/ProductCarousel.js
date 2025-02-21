"use client";
import React, { useState } from "react";

const images = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

const ProductCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex items-center w-1/2 space-y-2 gap-3">
      <div className="flex flex-col space-y-2 justify-between">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Thumbnail"
            className={`w-16 h-20 object-cover cursor-pointer rounded-md border ${
              selectedImage === image ? "border-black" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="flex-1">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full object-cover rounded-md transition-all duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
