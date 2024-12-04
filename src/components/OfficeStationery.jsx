import React from "react";
import { Link } from "react-router-dom"; // Import Link

const categories = [
  {
    name: "Photo Copier Paper",
    image: "/assets/photo-copier-paper.jpg", // Update with actual image paths
    link: "/office-stationery/photo-copier-paper", // Add the link for each category
  },
  {
    name: "Writing Instrument",
    image: "/assets/writing-instrument.jpg",
    link: "/office-stationery/writing-instrument",
  },
  {
    name: "Desk Accessories",
    image: "/assets/desk-accessories.jpg",
    link: "/office-stationery/desk-accessories",
  },
  {
    name: "File Folder",
    image: "/assets/file-folder.jpg",
    link: "/office-stationery/file-folder",
  },
  {
    name: "Register and Writing Pad",
    image: "/assets/register-writing-pad.jpg",
    link: "/office-stationery/register-writing-pad",
  },
  {
    name: "School Stationery",
    image: "/assets/school-stationery.jpg",
    link: "/office-stationery/school-stationery",
  },
];

const OfficeStationery = () => {
  return (
    <div className="office-stationery py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Office Stationery</h1>
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

export default OfficeStationery;
