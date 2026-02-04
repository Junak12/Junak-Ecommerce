import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [login, setLogin] = useState(true);
  const [clickUser, setClickUser] = useState(false);
  const cnt = 5;
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-bold cursor-pointer">
          <span className="text-pink-700">J</span>U
          <span className="text-pink-700">N</span>AK
        </h1>
      </div>

      <div className="flex items-center gap-1 w-full max-w-md">
        <IoIosSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search Products..."
          className="border-1 rounded-4xl px-4 w-full py-2"
        />
      </div>

      <div className="flex items-center gap-8 cursor-pointer">
        <div className="flex items-center gap-1">
          <CiShoppingCart className="text-3xl" />
          <h2 className="text-[24px] font-semibold">Cart <span>({cnt})</span></h2>
        </div>

        <div>
          {login ? (
            <div>
              <CiUser
                className="text-3xl cursor-pointer"
                onClick={() => setClickUser(!clickUser)}
              />
            </div>
          ) : (
            <h1 className="text-[24px] font-semibold cursor-pointer">
              Sign Up
            </h1>
          )}
        </div>
        {clickUser && (
          <div className="absolute top-20 right-8 bg-slate-100 p-4 rounded-lg shadow-xl px-15 py-5 border-1 border-slate-300">
            <h1 className="text-lg font-bold cursor-pointer text-center bg-black/75 text-white px-6 py-2 rounded-2xl hover:scale-105 trabsition-all ">
              My Profile
            </h1>
            <h2 className="text-lg font-bold cursor-pointer text-center bg-black/75 text-white px-6 py-2 rounded-2xl mt-2 hover:scale-105 trabsition-all">
              Your Orders
            </h2>
            <p
              className="text-lg font-bold cursor-pointer  bg-red-500 text-center
            text-white rounded-2xl mt-2 py-1 hover:scale-105 trabsition-all"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
