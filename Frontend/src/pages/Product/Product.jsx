import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/CartContext";


const Product = () => {
  const { products, loading, error, setCategory, category } =
    useContext(ProductContext);

  const { addTocart } = useContext(CartContext);

  const navigate = useNavigate();

  const categories = [
    { name: "All Products", key: "all" },
    { name: "Men", key: "men%27s%20clothing" },
    { name: "Women", key: "women%27s%20clothing" },
    { name: "Electronics", key: "electronics" },
  ];

  return (
    <div className="mt-28 max-w-7xl mx-auto px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 border rounded-lg p-5 h-fit shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Categories
          </h2>

          <ul className="space-y-2">
            {categories.map((cat) => (
              <li
                key={cat.key}
                onClick={() => setCategory(cat.key)}
                className={`flex items-center justify-between cursor-pointer p-2 rounded-lg transition-all
                  ${
                    category === cat.key
                      ? "bg-pink-600 text-white font-semibold shadow-lg"
                      : "hover:bg-pink-100 hover:text-pink-600"
                  }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`transition-transform ${
                    category === cat.key ? "rotate-90" : ""
                  }`}
                >
                  →
                </span>
              </li>
            ))}
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
                  className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition-all 
                  flex flex-col justify-between hover:scale-105 cursor-pointer"
                  onClick={() => navigate("/product/" + item.id)}
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-contain mb-4"
                  />

                  {/* Product Info */}
                  <h3 className="font-semibold line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-pink-600 font-bold mb-4">${item.price}</p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <button
                      className="w-full bg-black text-white py-2 rounded-lg hover:bg-pink-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        addTocart(item);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
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
