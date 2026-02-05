import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";


const Product = () => {
  const { products, loading, error, setCategory, category } =
    useContext(ProductContext);

  return (
    <div className="mt-28 max-w-7xl mx-auto px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 border rounded-lg p-5 h-fit">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          <ul className="space-y-3">
            <li
              onClick={() => setCategory("all")}
              className={`cursor-pointer hover:text-pink-600 ${
                category === "all" && "text-pink-600 font-semibold"
              }`}
            >
              All Products
            </li>

            <li
              onClick={() => setCategory("men%27s%20clothing")}
              className={`cursor-pointer hover:text-pink-600 ${
                category === "men%27s%20clothing" &&
                "text-pink-600 font-semibold"
              }`}
            >
              Men
            </li>

            <li
              onClick={() => setCategory("women%27s%20clothing")}
              className={`cursor-pointer hover:text-pink-600 ${
                category === "women%27s%20clothing" &&
                "text-pink-600 font-semibold"
              }`}
            >
              Women
            </li>

            <li
              onClick={() => setCategory("electronics")}
              className={`cursor-pointer hover:text-pink-600 ${
                category === "electronics" && "text-pink-600 font-semibold"
              }`}
            >
              Electronics
            </li>
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3">
          {loading && (
            <p className="text-center text-lg">Loading products...</p>
          )}

          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-contain mb-4"
                  />

                  <h3 className="font-semibold line-clamp-2">{item.title}</h3>

                  <p className="text-pink-600 font-bold mt-2">${item.price}</p>

                  <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-pink-600 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Product;
