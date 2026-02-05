import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
        About Us
      </h1>

      {/* Introduction */}
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        At <span className="font-semibold text-gray-800">Habub</span>, we
        are committed to providing a premium online shopping experience that
        combines quality, innovation, and exceptional customer service. Our
        mission is to make every purchase seamless, secure, and satisfying.
      </p>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {/* Mission */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To deliver high-quality products that enhance your lifestyle while
            ensuring convenience, reliability, and value with every order.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To become the leading e-commerce platform known for quality,
            innovation, and customer satisfaction, connecting people with the
            products they love.
          </p>
        </div>

        {/* Values */}
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Values
          </h2>
          <p className="text-gray-600">
            Integrity, innovation, and excellence drive everything we do. We
            prioritize transparency, trust, and long-term relationships with our
            customers.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <p className="text-lg text-gray-600 mt-12 text-center max-w-3xl mx-auto">
        Thank you for choosing{" "}
        <span className="font-semibold text-gray-800">HabubStore</span>. We are
        dedicated to providing the best shopping experience possible and look
        forward to serving you with excellence.
      </p>
    </div>
  );
};

export default About;
