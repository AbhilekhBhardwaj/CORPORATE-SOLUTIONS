import React, { useState } from "react";
import { useCart } from "../../context/CartContext";


const products = [
  { id: 1, name: "Gainda Black Phenyle 5 L", image: "/assets/products/gainda-black-phenyle-5l.jpg" },
  { id: 2, name: "Gainda Black Phenyle 1 L", image: "/assets/products/gainda-black-phenyle-1l.jpg" },
  { id: 3, name: "Cleanzo Go Clean Black Phenyle 5 L", image: "/assets/products/cleanzo-black-phenyle-5l.jpg" },
  { id: 4, name: "Keyshine White Floor Cleaner 5 L", image: "/assets/products/keyshine-white-floor-5l.jpg" },
  { id: 5, name: "Keyshine White Floor Cleaner 1 L", image: "/assets/products/keyshine-white-floor-1l.jpg" },
  { id: 6, name: "Lizol Citrus/Floral Disinfectant Floor Cleaner 1 L", image: "/assets/products/lizol-1l.jpg" },
  { id: 7, name: "Lizol Citrus/Floral Disinfectant Floor Cleaner 2 L", image: "/assets/products/lizol-2l.jpg" },
  { id: 8, name: "Keyshine Glass Cleaner 5 L", image: "/assets/products/keyshine-glass-cleaner-5l.jpg" },
  { id: 9, name: "Gainda Shinex Glass Cleaner 5 L", image: "/assets/products/gainda-shinex-5l.jpg" },
  { id: 10, name: "Keyshine Glass Cleaner 500 ML", image: "/assets/products/keyshine-glass-cleaner-500ml.jpg" },
  { id: 11, name: "Gainda Shinex Glass & Household Cleaner 500 ML", image: "/assets/products/gainda-shinex-500ml.jpg" },
  { id: 12, name: "Colin Glass Cleaner 500 ML", image: "/assets/products/colin-glass-cleaner-500ml.jpg" },
  { id: 13, name: "Concentrate of White Floor Cleaner 5 L", image: "/assets/products/white-floor-cleaner-concentrate-5l.jpg" },
  { id: 14, name: "Concentrate of White Floor Cleaner 1 L", image: "/assets/products/white-floor-cleaner-concentrate-1l.jpg" },
  { id: 15, name: "Concentrate of Glass Cleaner 5 L", image: "/assets/products/glass-cleaner-concentrate-5l.jpg" },
  { id: 16, name: "Concentrate of Glass Cleaner 1 L", image: "/assets/products/glass-cleaner-concentrate-1l.jpg" },
  { id: 17, name: "Trishul Detergent Powder 1 KG", image: "/assets/products/trishul-detergent-1kg.jpg" },
  { id: 18, name: "Keyshine Dishwash 5 L", image: "/assets/products/keyshine-dishwash-5l.jpg" },
  { id: 19, name: "Keyshine Dishwash Liquid 500 ML", image: "/assets/products/keyshine-dishwash-500ml.jpg" },
  { id: 20, name: "Vim Dishwash Bar Tub 500 G", image: "/assets/products/vim-dishwash-tub.jpg" },
  { id: 21, name: "Vim Dishwash Bar 250 G", image: "/assets/products/vim-dishwash-bar-250g.jpg" },
  { id: 22, name: "Scrub Pad Green (Juna)", image: "/assets/products/scrub-pad-green.jpg" },
  { id: 23, name: "Plastic Dish Scrubber (Juna)", image: "/assets/products/plastic-dish-scrubber.jpg" },
  { id: 24, name: "Iron Dish Scrubber (Juna)", image: "/assets/products/iron-dish-scrubber.jpg" },
  { id: 25, name: "Paras 2-in-1 Dish Scrubber & Foam Sponge", image: "/assets/products/paras-scrubber-foam.jpg" },
  { id: 26, name: "Gala Super Scrub", image: "/assets/products/gala-super-scrub.jpg" },
  { id: 27, name: "Scotch Brite Scrub Pad 10x15 CM 4 U", image: "/assets/products/scotch-brite-scrub-pad.jpg" },
  { id: 28, name: "DCM Bleaching Powder 25 KG Bag", image: "/assets/products/dcm-bleaching-powder.jpg" },
  { id: 29, name: "Roff Ceraclean Tile Cleaning Chemical 1 L", image: "/assets/products/roff-ceraclean-1l.jpg" },
  { id: 30, name: "Roff Ceraclean Tile Cleaning Chemical 5 L", image: "/assets/products/roff-ceraclean-5l.jpg" },
  { id: 31, name: "Toilet Cleaning Brush Standard", image: "/assets/products/toilet-brush-standard.jpg" },
  { id: 32, name: "Toilet Cleaning Brush Prime", image: "/assets/products/toilet-brush-prime.jpg" },
  { id: 33, name: "Tile Scrubbing Brush", image: "/assets/products/tile-scrubbing-brush.jpg" },
  { id: 34, name: "Washbasin Cleaning Brush", image: "/assets/products/washbasin-brush.jpg" },
  { id: 35, name: "Choke Remover Pressure Pump", image: "/assets/products/choke-remover-pump.jpg" },
  { id: 36, name: "Rubber Hand Gloves", image: "/assets/products/rubber-hand-gloves.jpg" },
];

const CleaningProducts = () => {
  const { addToCart } = useCart();

  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}`);
  };

  return (
    <div className="cleaning-products py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Cleaning Products</h1>
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

export default CleaningProducts;
