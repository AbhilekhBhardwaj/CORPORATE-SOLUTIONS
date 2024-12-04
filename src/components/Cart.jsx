import React from "react";
import { useCart } from "../context/CartContext"; // Import useCart

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Use the cart context

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="cart py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="max-w-6xl mx-auto">
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between items-center mb-4 p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4" />
              <span>{product.name}</span>
              <span className="ml-2">x{product.quantity}</span>
            </div>
            <div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4 text-center">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
