import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const [login, setLogin] = useState(true);
  const [clickUser, setClickUser] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const cnt = 5;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
      flex items-center justify-between px-2 py-4
      border-b border-slate-300
      transition-all duration-300
      ${scrolled ? "bg-white shadow-lg" : "bg-transparent shadow-md"}`}
    >
      {/* Logo */}
      <div onClick={() => navigate("/")}>
        <h1 className="text-5xl font-bold cursor-pointer">
          <span className="text-pink-700">J</span>U
          <span className="text-pink-700">N</span>AK
        </h1>
      </div>

      {/* Search */}
      <div className="flex items-center gap-1 w-full max-w-md">
        <IoIosSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search Products..."
          className="border rounded-full px-4 w-full py-2 outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8 cursor-pointer relative">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[24px] font-semibold transition-colors duration-200
              ${isActive ? "text-pink-600 border-b-2 border-pink-600" : "text-black"}`
            }
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-[24px] font-semibold transition-colors duration-200
              ${isActive ? "text-pink-600 border-b-2 border-pink-600" : "text-black"}`
            }
          >
            Products
          </NavLink>
        </div>

        <div className="flex items-center gap-1">
          <CiShoppingCart className="text-3xl" />
          <h2 className="text-[24px] font-semibold">
            Cart <span>({cnt})</span>
          </h2>
        </div>

        <div>
          {login ? (
            <CiUser
              className="text-3xl cursor-pointer"
              onClick={() => setClickUser(!clickUser)}
            />
          ) : (
            <h1 className="text-[24px] font-semibold cursor-pointer">
              Sign Up
            </h1>
          )}
        </div>

        {/* User Dropdown */}
        {clickUser && (
          <div className="absolute top-20 right-0 bg-slate-100 p-5 rounded-lg shadow-xl border border-slate-300 w-44">
            <h1 className="text-lg font-bold cursor-pointer text-center bg-black/75 text-white px-4 py-2 rounded-2xl hover:scale-105 transition-all">
              My Profile
            </h1>

            <h2 className="text-lg font-bold cursor-pointer text-center bg-black/75 text-white px-4 py-2 rounded-2xl mt-2 hover:scale-105 transition-all">
              Your Orders
            </h2>

            <p className="text-lg font-bold cursor-pointer bg-red-500 text-center text-white rounded-2xl mt-2 py-1 hover:scale-105 transition-all">
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
