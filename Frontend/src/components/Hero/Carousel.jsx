import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";


const Carousel = () => {
  const { data, loading, error } = useContext(DataContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      if (data.length > 0) {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-center mt-10">No products</p>;

  const nextSlide = () =>
    setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
  const prevSlide = () =>
    setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);

  return (
    <div className="relative w-full max-w-7xl mx-auto  mt-10 overflow-hidden rounded-lg shadow-lg">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 sm:h-[500px] object-contain bg-white"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200 transition z-10"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
