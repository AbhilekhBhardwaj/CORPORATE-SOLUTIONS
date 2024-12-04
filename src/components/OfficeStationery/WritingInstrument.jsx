import React from "react";
import { useCart } from "../../context/CartContext";

// Array of writing instrument products with images
const products = [
  {
    id: 1,
    name: "Use & Throw Pen (Packet)",
    image: "/assets/products/use-throw-pen.jpg",
  },
  {
    id: 2,
    name: "Unibal Pens (Blue, Eye Black, Green, Red - Packet)",
    image: "/assets/products/unibal-pens.jpg",
  },
  {
    id: 3,
    name: "Natraj Pen Blue (Packet)",
    image: "/assets/products/natraj-pen-blue.jpg",
  },
  {
    id: 4,
    name: "Reynold Pen Gel (Blue/Octane Gel)",
    image: "/assets/products/reynold-pen-gel.jpg",
  },
  {
    id: 5,
    name: "Pentonic V Rt Pen Single Unit",
    image: "/assets/products/pentonic-v-pen.jpg",
  },
  {
    id: 6,
    name: "Linc Pentonic Pen (Single Unit, Gel Pen Black)",
    image: "/assets/products/linc-pentonic-pen.jpg",
  },
  {
    id: 7,
    name: "Rorito Black Gel Pen",
    image: "/assets/products/rorito-black-gel-pen.jpg",
  },
  {
    id: 8,
    name: "White Board Marker Pens (Luxor)",
    image: "/assets/products/white-board-marker-luxor.jpg",
  },
  {
    id: 9,
    name: "Permanent Marker Pen",
    image: "/assets/products/permanent-marker-pen.jpg",
  },
  {
    id: 10,
    name: "Sketch Pen Black",
    image: "/assets/products/sketch-pen-black.jpg",
  },
  {
    id: 11,
    name: "Camlin Correction Fluid Pen, Metal Tip",
    image: "/assets/products/camlin-correction-fluid-pen.jpg",
  },
  {
    id: 12,
    name: "Luxor Hi-Lighter (Single, Set of 5)",
    image: "/assets/products/luxor-hi-lighter.jpg",
  },
];

const WritingInstrument = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the CartContext

  return (
    <div className="writing-instrument py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Writing Instruments</h1>
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

export default WritingInstrument;
