import React from "react";
import { useCart } from "../../context/CartContext";

// Array of desk accessories products with images
const products = [
  { id: 1, name: "Staplers (Kangaro HP-45, HD-10D)", image: "/assets/products/staplers.jpg" },
  { id: 2, name: "Stapler Pins (24/6, No. 10-1M)", image: "/assets/products/stapler-pins.jpg" },
  { id: 3, name: "Allpin Packet", image: "/assets/products/allpin-packet.jpg" },
  { id: 4, name: "Tape Dispenser", image: "/assets/products/tape-dispenser.jpg" },
  { id: 5, name: "Cello Tapes (1 Inch, 2 Inches)", image: "/assets/products/cello-tapes.jpg" },
  { id: 6, name: "Scotch 3M Magic Tape Roll", image: "/assets/products/scotch-3m-tape.jpg" },
  { id: 7, name: "Clip Box (Pin-O-Clip)", image: "/assets/products/clip-box.jpg" },
  { id: 8, name: "Binder Clips (15 mm, 19 mm, 25 mm, 32 mm, 41 mm, 51 mm)", image: "/assets/products/binder-clips.jpg" },
  { id: 9, name: "POS Paper Rolls", image: "/assets/products/pos-paper-rolls.jpg" },
  { id: 10, name: "Paper Cutter Knife & Cutter Blades (Packet)", image: "/assets/products/paper-cutter-knife.jpg" },
  { id: 11, name: "Kangaro Punch Machine DP-480 Medium", image: "/assets/products/kangaro-punch-machine.jpg" },
  { id: 12, name: "Business Card Holder", image: "/assets/products/business-card-holder.jpg" },
  { id: 13, name: "Casio Calculator MJ 12D", image: "/assets/products/casio-calculator.jpg" },
  { id: 14, name: "Scissors 8 Inches", image: "/assets/products/scissors-8inches.jpg" },
  { id: 15, name: "Faber-Castell Stamp Pad (Violet)", image: "/assets/products/faber-castell-stamp-pad.jpg" },
  { id: 16, name: "Paper Flags", image: "/assets/products/paper-flags.jpg" },
  { id: 17, name: "Stationery Magnet Buttons for Magnetic Whiteboard", image: "/assets/products/magnet-buttons.jpg" },
  { id: 18, name: "Fevistik Super Glue Stick", image: "/assets/products/fevistik-glue.jpg" },
  { id: 19, name: "Water Sponge Pad", image: "/assets/products/water-sponge-pad.jpg" },
];

const DeskAccessories = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the context

  // Function to handle Buy Now button
  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
    // Add Stripe or payment logic here in the future
  };

  return (
    <div className="desk-accessories py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Desk Accessories</h1>
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

export default DeskAccessories;
