import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

// Array of disposable products with images
const products = [
  { id: 1, name: "Fluf Softtouch Face Tissue Box", image: "/assets/products/fluf-softtouch-face-tissue-box.jpg" },
  { id: 2, name: "Century Face Tissue Box", image: "/assets/products/century-face-tissue-box.jpg" },
  { id: 3, name: "Century Napkin 27x30 Packet", image: "/assets/products/century-napkin-27x30.jpg" },
  { id: 4, name: "M Fold Breeze Dispenser Tissue", image: "/assets/products/m-fold-breeze-tissue.jpg" },
  { id: 5, name: "Toilet Tissue Roll Pack of 6 Unit 2 Ply", image: "/assets/products/toilet-tissue-roll-pack-6.jpg" },
  { id: 6, name: "Fluf Softtouch Toilet Tissue Roll Pack of 6", image: "/assets/products/fluf-softtouch-toilet-tissue-roll.jpg" },
];

const Disposable = () => {
  const { addToCart } = useCart();

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
  };

  return (
    <div className="disposable-products py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Disposable Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-medium mb-2 text-center">{product.name}</h2>
            <div className="flex justify-between gap-3 mt-auto">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="flex-1 px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disposable;