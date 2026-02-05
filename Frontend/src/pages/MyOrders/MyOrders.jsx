import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    // Reverse so newest orders appear first
    setOrders(storedOrders.reverse());
  }, []);

  if (orders.length === 0)
    return (
      <p className="text-center mt-10 text-lg">
        You have not placed any orders yet.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 mt-28">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      <div className="grid grid-cols-1 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 shadow flex flex-col gap-2"
          >
            <h2 className="font-semibold text-lg">
              Order ID: {order.id} | Date: {order.date}
            </h2>
            <p className="text-pink-600 font-bold">Total: ${order.total}</p>
            <div>
              {order.items.map((item) => (
                <div
                  key={item.id + item.size}
                  className="flex items-center gap-4 border-t pt-2 mt-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="font-semibold">
                      {item.title}{" "}
                      <span className="text-gray-500">({item.size})</span>
                    </h3>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p className="text-pink-600 font-bold">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
