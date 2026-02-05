import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            <span className="text-pink-600">J</span>U
            <span className="text-pink-600">N</span>AK
          </h1>
          <p className="text-sm text-slate-400">
            Your one-stop shop for fashion, electronics, and daily essentials.
            Quality products at the best price.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Customer Service</h2>
          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4">
            <div className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} JUNAK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
