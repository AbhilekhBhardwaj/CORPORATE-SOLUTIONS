import React from "react";
import { useCart } from "../../context/CartContext";

// Array of school stationery products with images
const products = [
  {
    id: 1,
    name: "Nataraj 621 Pencils (Packet of 10)",
    image: "/assets/products/nataraj-621-pencils.jpg",
  },
  {
    id: 2,
    name: "Solo Pencil Packet (10 Units)",
    image: "/assets/products/solo-pencil-packet.jpg",
  },
  {
    id: 3,
    name: "Non Dust Eraser Pack (20 Units)",
    image: "/assets/products/non-dust-eraser.jpg",
  },
  {
    id: 4,
    name: "Steel Scale",
    image: "/assets/products/steel-scale.jpg",
  },
];

const SchoolStationery = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext

  return (
    <div className="school-stationery py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">School Stationery</h1>
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
    </div>
  );
};

export default SchoolStationery;
