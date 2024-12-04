import React, { useState } from "react";
import Cart from "../Cart"; // Importing Cart component to display cart items

// Array of registers and writing pads products with images
const products = [
  {
    id: 1,
    name: "Gatta Registers (Page 92, 144, 192, 240)",
    image: "/assets/products/gatta-registers.jpg",
  },
  {
    id: 2,
    name: "Classmate Registers (Pages 72, 196, 240, 384)",
    image: "/assets/products/classmate-registers.jpg",
  },
  {
    id: 3,
    name: "Short Hand Note Book 1/8",
    image: "/assets/products/short-hand-notebook.jpg",
  },
  {
    id: 4,
    name: "Writing Pads (No. 33, No. 40, No. 55)",
    image: "/assets/products/writing-pads.jpg",
  },
  {
    id: 5,
    name: "Conference Memo Pad Meeting",
    image: "/assets/products/conference-memo-pad.jpg",
  },
  {
    id: 6,
    name: "Register Small & Big Note Book",
    image: "/assets/products/register-small-big-notebook.jpg",
  },
];

const RegistersAndWritingPads = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
  };

  return (
    <div className="registers-writing-pads py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Registers & Writing Pads</h1>
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

export default RegistersAndWritingPads;
