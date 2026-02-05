import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addTocart = (product) => {
    // Ensure product has size, default to "S"
    if (!product.size) product.size = "S";

    setCart((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id && item.size === product.size,
      );
      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (productId, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size)),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (productId, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item,
      ),
    );
  };

  // Clear cart
  const clearCart = () => setCart([]);

  // Total items and price
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addTocart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
