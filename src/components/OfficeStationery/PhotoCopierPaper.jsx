import React, { useState } from "react";
import Cart from "../Cart"; // Importing Cart component to display cart items

// Array of products with images
const products = [
  {
    id: 1,
    name: "A4 Size Photocopier Paper 75 GSM (JK Copier, Paperline, Century, Bindals, Un-branded)",
    image: "/assets/products/a4-75gsm.jpg",
  },
  {
    id: 2,
    name: "FS Legal Size Photocopier Paper 75 GSM (JK Copier)",
    image: "/assets/products/fs-legal-75gsm.jpg",
  },
  {
    id: 3,
    name: "A4 Size Photocopier Paper 80 GSM (JK Copier)",
    image: "/assets/products/a4-80gsm.jpg",
  },
  {
    id: 4,
    name: "A4 Size Bond Paper (80 GSM, 100 GSM, 90 GSM - JK Copier)",
    image: "/assets/products/a4-bond-paper.jpg",
  },
  {
    id: 5,
    name: "A3 Size Photocopier Paper 75 GSM (Century, Bindals)",
    image: "/assets/products/a3-75gsm.jpg",
  },
  {
    id: 6,
    name: "A5 Size Photocopier Paper 75 GSM (Bindals)",
    image: "/assets/products/a5-75gsm.jpg",
  },
  {
    id: 7,
    name: "A4 Size Glossy Paper Ream",
    image: "/assets/products/a4-glossy-paper.jpg",
  },
  {
    id: 8,
    name: "Sticker Pad A4 Label",
    image: "/assets/products/sticker-pad-a4.jpg",
  },
];

const PhotoCopierPaper = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
  };

  return (
    <div className="photo-copier-paper py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Copier Paper</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-medium mb-4">{product.name}</h2>
            <div className="flex-grow"></div> {/* Ensures that the button stays at the bottom */}
            <button
              onClick={() => addToCart(product)} // Adds product to cart when clicked
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Cart cart={cart} /> {/* Display the cart */}
    </div>
  );
};

export default PhotoCopierPaper;
