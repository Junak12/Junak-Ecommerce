import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/CartContext";

const AllProducts = () => {

  const navigate = useNavigate();
  const { data, loading, error } = useContext(DataContext);
  const { addTocart } = useContext(CartContext);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No products available</p>;

  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Products</h2>

      {/* 4-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-4">
        {data.slice(0, 9).map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-all cursor-pointer hover:scale-105"
            onClick={() => navigate("/product/" + product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold mb-1 text-center">
              {product.title}
            </h3>
            <p className="text-blue-600 font-bold text-center">
              ${product.price}
            </p>
            <div className="flex items-center justify-center">
              <button
                className=" bg-black text-white py-2 rounded-lg hover:bg-pink-600 transition-all px-6 mt-4"
                onClick={(e) => {
                  e.stopPropagation(); 
                  addTocart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all cursor-pointer hover:scale-110"
          onClick={() => navigate("/product")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
