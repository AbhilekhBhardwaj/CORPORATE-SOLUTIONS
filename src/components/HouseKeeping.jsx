import React from "react";
import { Link } from "react-router-dom"; // Import Link

const categories = [
  {
    name: "Toiletry Products",
    // image: "/assets/toiletry-products.jpg", // Update with actual image paths
    link: "/housekeeping/toiletry-products", // Add the link for each category
  },
  {
    name: "Cleaning Products",
    image: "/assets/cleaning-products.jpg",
    link: "/housekeeping/cleaning-products",
  },
  {
    name: "Dustbins",
    image: "/assets/dustbins.jpg",
    link: "/housekeeping/dustbins",
  },
  {
    name: "Disposables",
    image: "/assets/disposables.jpg",
    link: "/housekeeping/disposables",
  },
];

const HouseKeeping = () => {
  return (
    <div className="house-keeping py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">House Keeping</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            {/* Use Link to navigate to the respective category page */}
            <Link to={category.link}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                View More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseKeeping;
