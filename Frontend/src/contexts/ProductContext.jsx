import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const BASE_URL = "https://fakestoreapi.com/products";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = BASE_URL;

        if (category !== "all") {
          url = `${BASE_URL}/category/${category}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
