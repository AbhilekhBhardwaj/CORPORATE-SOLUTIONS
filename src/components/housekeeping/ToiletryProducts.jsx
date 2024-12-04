import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import image1 from "../../assets/image1.png"

// Array of toiletry products with images
const products = [
  {
    id: 1,
    name: "Keyshine Handwash Liquid 5 L",
    image: image1
  },
  {
    id: 2,
    name: "Diversy Softcare Blossom Handwash 5 L",
    image: "/assets/products/diversy-softcare-blossom-5l.jpg",
  },
  {
    id: 3,
    name: "Dabur Fem Handwash 5 L",
    image: "/assets/products/dabur-fem-handwash-5l.jpg",
  },
  {
    id: 4,
    name: "Keyshine Foam Wash Liquid Bottle 500 ML",
    image: "/assets/products/keyshine-foam-wash-500ml.jpg",
  },
  {
    id: 5,
    name: "Dettol Original Handwash Liquid Pouch 675 ML",
    image: "/assets/products/dettol-handwash-675ml.jpg",
  },
  {
    id: 6,
    name: "Soap Dispenser Empty Bottle 1 Unit",
    image: "/assets/products/soap-dispenser.jpg",
  },
  {
    id: 7,
    name: "Keyshine Toilet Cleaner 5 L",
    image: "/assets/products/keyshine-toilet-cleaner-5l.jpg",
  },
  {
    id: 8,
    name: "Keyshine Toilet Cleaner 1 L",
    image: "/assets/products/keyshine-toilet-cleaner-1l.jpg",
  },
  {
    id: 9,
    name: "Harpic Toilet Cleaner 5 L",
    image: "/assets/products/harpic-toilet-cleaner-5l.jpg",
  },
  {
    id: 10,
    name: "Harpic Toilet Cleaner 1 L",
    image: "/assets/products/harpic-toilet-cleaner-1l.jpg",
  },
  {
    id: 11,
    name: "Odonil Exotic Automatic Spray (Various Flavors)",
    image: "/assets/products/odonil-exotic-spray.jpg",
  },
  {
    id: 12,
    name: "Refill of Odonil Exotic Automatic Spray",
    image: "/assets/products/odonil-exotic-refill.jpg",
  },
  {
    id: 13,
    name: "Godrej Aer Matic Machine + Refill",
    image: "/assets/products/godrej-aer-matic-machine.jpg",
  },
  {
    id: 14,
    name: "Godrej Aer Matic Valley Bloom Refill",
    image: "/assets/products/godrej-aer-matic-refill.jpg",
  },
  {
    id: 15,
    name: "Dabur Odonil Room Freshener Spray",
    image: "/assets/products/dabur-odonil-room-freshener.jpg",
  },
  {
    id: 16,
    name: "Dabur Odonil Toilet Air Freshener Cubes",
    image: "/assets/products/odonil-toilet-cubes.jpg",
  },
  {
    id: 17,
    name: "Godrej Aer Power Pocket Air Freshener",
    image: "/assets/products/godrej-aer-power-pocket.jpg",
  },
];

const ToiletryProducts = () => {
  const { addToCart } = useCart();

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
  };

  return (
    <div className="toiletry-products py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Toiletry Products</h1>
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

export default ToiletryProducts;