import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router";

const availableSizes = ["S", "M", "L", "XL"];

const Cart = () => {
  const {
    cart,
    addTocart,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const [showCODModal, setShowCODModal] = useState(false);
  const navigate = useNavigate();

  if (cart.length === 0)
    return <p className="text-center mt-10 text-lg">Your cart is empty</p>;

  const handleCOD = () => setShowCODModal(true);

  const confirmOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice.toFixed(2),
      date: new Date().toLocaleString(),
    };
    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder]),
    );

    clearCart();
    setShowCODModal(false);

    navigate("/my-orders"); // redirect to My Orders
  };

  return (
    <div className="max-w-6xl mx-auto px-6 mt-28">
      <h1 className="text-3xl font-bold mb-6 text-center ">Your Cart</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div
            key={item.id + item.size}
            className="flex flex-col md:flex-row items-center justify-between border rounded-lg p-4 shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4 md:mb-0"
            />

            <div className="flex-1 mx-4">
              <h2 className="font-semibold text-lg">{item.title}</h2>

              <div className="mt-1 mb-2">
                <span className="text-gray-500 mr-2">Size:</span>
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-1 border rounded-full mr-2 mb-1 text-sm
                      ${item.size === size ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-700"}`}
                    onClick={() => {
                      removeFromCart(item.id, item.size);
                      addTocart({ ...item, size });
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="text-pink-600 font-bold mt-2">${item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id, item.size)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addTocart(item)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id, item.size)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4 md:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Total: <span className="text-pink-600">${totalPrice.toFixed(2)}</span>
        </h2>

        <button
          onClick={handleCOD}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-all cursor-pointer"
        >
          Cash on Delivery
        </button>
      </div>

      {/* COD Modal */}
      {showCODModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Order</h2>
            <p className="mb-4">
              You will pay{" "}
              <span className="font-semibold">${totalPrice.toFixed(2)}</span> on
              delivery.
            </p>
            <div className="flex justify-around">
              <button
                onClick={confirmOrder}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowCODModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
