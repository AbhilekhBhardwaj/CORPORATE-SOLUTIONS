import { useState, useEffect } from "react";

const images = [
  "/office-supplies.jpg", // Path to the first image
  "/artist-supplies.jpg", // Path to the second image
  "/paper-supplies.jpg",  // Path to the third image
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0); // Tracks the currently displayed image

  useEffect(() => {
    // Automatically change images every 3 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Move to the next image
    }, 2000);

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []); // Empty dependency array to only run this effect once when component mounts

  return (
    <div className="carousel w-full h-64 bg-gray-200 overflow-hidden relative">
      <div className="absolute inset-0 flex">
        {/* Loop through the images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`} // Make only the current image visible
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

