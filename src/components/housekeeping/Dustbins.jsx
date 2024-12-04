import React from "react";
import { useCart } from "../../context/CartContext";

const products = [
  { id: 1, name: "Dustbin Pedal 12 Liter", image: "/assets/dustbin-pedal.jpg" },
  {
    id: 2,
    name: "Dustbins for Small, 40 L, 60 L, and Industrial Sizes",
    image: "/assets/dustbins-sizes.jpg",
  },
  {
    id: 3,
    name: "Garbage Bag Size 20x26 for 12 L Dustbin",
    image: "/assets/garbage-bag-20x26.jpg",
  },
  {
    id: 4,
    name: "Garbage Bag Wonder Size 30x37 for 40 L Dustbin",
    image: "/assets/garbage-bag-30x37.jpg",
  },
  {
    id: 5,
    name: "Garbage Bag Size 30x50 for 60 L Dustbin",
    image: "/assets/garbage-bag-30x50.jpg",
  },
  {
    id: 6,
    name: "Biodegradable Dustbin Garbage Bags (Various Sizes and Colors)",
    image: "/assets/biodegradable-garbage-bags.jpg",
  },
];

const Dustbins = () => {
  const { addToCart } = useCart();

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
    // Add Stripe or payment logic here in the future
  };

  return (
    <div className="dustbins py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Dustbins</h1>
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
            {/* This div will hold the buttons */}
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

export default Dustbins;