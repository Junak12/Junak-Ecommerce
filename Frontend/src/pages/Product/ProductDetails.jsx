import React, { useContext } from "react";
import { useParams } from "react-router";
import {
  ProductDetailsProvider,
  ProductDetailsContext,
} from "../../contexts/ProductDetailsContext";


const ProductDetailsContent = () => {
  const { product, loading, error } = useContext(ProductDetailsContext);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-30">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-contain"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-pink-600 font-bold text-2xl mb-4">
          ${product.price}
        </p>
        <p className="mb-6 text-slate-700">{product.description}</p>

        <button className="bg-black text-white py-2 px-6 rounded hover:bg-pink-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <ProductDetailsProvider productId={id}>
      <ProductDetailsContent />
    </ProductDetailsProvider>
  );
};

export default ProductDetails;
