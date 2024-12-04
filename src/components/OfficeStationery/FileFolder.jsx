import React from "react";
import { useCart } from "../context/CartContext"; // Import the useCart hook

// Array of file folder products with images
const products = [
  { id: 1, name: "Plain Blank File Cover", image: "/assets/products/plain-file-cover.jpg" },
  { id: 2, name: "Cobra File (No. 3000, No. 10000)", image: "/assets/products/cobra-file.jpg" },
  { id: 3, name: "Cardboard Index File (Standard, Premium Quality)", image: "/assets/products/cardboard-index-file.jpg" },
  { id: 4, name: "Dak File", image: "/assets/products/dak-file.jpg" },
  { id: 5, name: "Office Plastic Report File", image: "/assets/products/plastic-report-file.jpg" },
  { id: 6, name: "Solo Folder A4 (Pack of 20 Units)", image: "/assets/products/solo-folder-a4.jpg" },
  { id: 7, name: "Solo 12 Section Expanding File", image: "/assets/products/solo-expanding-file.jpg" },
  { id: 8, name: "4 Side Ring Binder Folder Solo Exp File", image: "/assets/products/ring-binder-file.jpg" },
  { id: 9, name: "Strip File Single Unit", image: "/assets/products/strip-file.jpg" },
  { id: 10, name: "Classic 140 Clear Bag with Button Single", image: "/assets/products/classic-clear-bag.jpg" },
  { id: 11, name: "Vivid MC 1910F Clear Bag with Button", image: "/assets/products/vivid-clear-bag.jpg" },
  { id: 12, name: "Solo Twin Envelop-Mc-12", image: "/assets/products/solo-twin-envelop.jpg" },
  { id: 13, name: "Ankita Ring Binder", image: "/assets/products/ankita-ring-binder.jpg" },
];

const FileFolder = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the context

  // Function to handle Buy Now button
  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
    // Add Stripe or payment logic here in the future
  };

  return (
    <div className="file-folder py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">File Folders</h1>
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
                onClick={() => addToCart(product)} // Adds product to cart
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)} // Buy Now functionality
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

export default FileFolder;
