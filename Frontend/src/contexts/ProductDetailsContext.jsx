import { createContext, useEffect, useState } from "react";

export const ProductDetailsContext = createContext();

export const ProductDetailsProvider = ({ children, productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails(); 
  }, [productId]);

  return (
    <ProductDetailsContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};
