import React, { useState, useEffect, useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router";
import { CartContext } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [clickUser, setClickUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const { totalItems } = useContext(CartContext);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-2xl md:text-5xl font-bold">
          <span className="text-pink-700">H</span>A
          <span className="text-pink-700">B</span>UB
        </h1>
      </div>

      {/* Centered Search Bar */}
      <div className="flex-1 justify-center hidden md:flex">
        <div className="flex items-center gap-2 w-full max-w-md">
          <IoIosSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search Products..."
            className="border rounded-full px-4 w-full py-2 outline-none focus:ring-2 focus:ring-pink-600"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-8 relative">
        {/* Navigation */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[18px] md:text-[24px] font-semibold transition-colors duration-200 hover:text-pink-600
            ${isActive ? "text-pink-600 border-b-2 border-pink-600" : "text-black"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/product"
          className={({ isActive }) =>
            `text-[18px] md:text-[24px] font-semibold transition-colors duration-200 hover:text-pink-600
            ${isActive ? "text-pink-600 border-b-2 border-pink-600" : "text-black"}`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-[18px] md:text-[24px] font-semibold transition-colors duration-200 hover:text-pink-600
            ${isActive ? "text-pink-600 border-b-2 border-pink-600" : "text-black"}`
          }
        >
          About
        </NavLink>

        {/* Cart */}
        <NavLink to="/cart" className="relative">
          <CiShoppingCart className="text-3xl cursor-pointer" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </NavLink>

        {/* User Section */}
        {currentUser ? (
          <>
            {/* Only show user icon if logged in */}
            <CiUser
              className="text-3xl cursor-pointer"
              onClick={() => setClickUser(!clickUser)}
            />

            {/* Dropdown */}
            {clickUser && (
              <div className="absolute top-full right-0 mt-2 bg-white p-4 rounded-lg shadow-xl border border-slate-300 w-48 z-50">
                <h1 className="text-lg font-bold text-center mb-2">
                  {currentUser.username || currentUser.displayName || "User"}
                </h1>
                <h2
                  className="text-lg font-bold cursor-pointer text-center bg-black/75 text-white px-4 py-2 rounded-2xl hover:scale-105 transition-all"
                  onClick={() => navigate("/my-orders")}
                >
                  Your Orders
                </h2>
                <p
                  className="text-lg font-bold cursor-pointer bg-red-500 text-center text-white rounded-2xl mt-2 py-1 hover:scale-105 transition-all"
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-lg font-bold bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
