import React, { use, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import "./Navber.css";
import { AuthContext } from "../Pages/AuthContext";
import { toast } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, SignOut, loading } = use(AuthContext);

  const handleLogOut = () => {
    SignOut()
      .then(() => {
        toast.success(`Logout successfully`);
      })
      .catch(() => {});
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-[#034602]/70 via-[#1d8e0a]/70 to-[#7ed957]/70">
    <nav className="container mx-auto backdrop-blur-sm px-6 py-4 text-[#FFFBE6]">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center active:scale-105 transition"
        >
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/development-skill.png"
            alt="development-skill"
          />
          <p className="ml-2 text-xl">Talent Trade</p>
        </Link>
        <ul className="hidden md:flex space-x-8">
          <li>
            <NavLink
              to="/"
              className="hover:text-[#FCCD2A] active:scale-105 transition"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allitem"
              className="hover:text-[#FCCD2A] active:scale-105 transition"
            >
              All Item
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/myprofile"
                className="hover:text-[#FCCD2A] active:scale-105 transition"
              >
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
        <div className="hidden md:flex space-x-3">
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : user ? (
            <p
              onClick={handleLogOut}
              className="bg-[#1d8e0a] hover:text-[#347928] active:scale-105 hover:bg-[#FCCD2A] px-4 py-2 rounded-lg transition"
            >
              Logout
            </p>
          ) : (
            <Link
            onClick={() => setIsOpen(false)}
              to="/login"
              className="bg-[#1d8e0a] hover:text-[#347928] active:scale-105 hover:bg-[#FCCD2A] px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}

          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : user ? (
            <div className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-[#4aff08] transition">
              {" "}
              <Tooltip id="my-tooltip" />
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="bottom"
              >
                <img
                  className="w-full h-full rounded-full"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL || "/download.png"}
                  alt=""
                />{" "}
              </a>
            </div>
          ) : (
            <Link
            onClick={() => setIsOpen(false)}
              to="/sign-in"
              className="border hover:border-[#347928]  hover:bg-[#FCCD2A] hover:text-[#347928] px-4 py-2 rounded-lg active:scale-105 transition"
            >
              Sign Up
            </Link>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <NavLink
        onClick={() => setIsOpen(false)}
          to="/"
          className="block py-2 hover:text-[#FCCD2A] active:scale-105 transition"
        >
          Home
        </NavLink>
        {user && (
          <NavLink
          onClick={() => setIsOpen(false)}
            to="/myprofile"
            className="block py-2 hover:text-[#FCCD2A] active:scale-105 transition"
          >
            My Profile
          </NavLink>
        )}
        <div className="flex flex-col space-y-3 pt-3">
          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : user ? (
            <p
              onClick={handleLogOut}
              className="bg-[#1d8e0a] hover:text-[#347928] active:scale-105 hover:bg-[#FCCD2A] px-4 py-2 rounded-lg transition"
            >
              Logout
            </p>
          ) : (
            <Link
            onClick={() => setIsOpen(false)}
              to="/login"
              className="bg-[#1d8e0a] hover:text-[#347928] active:scale-105 hover:bg-[#FCCD2A] px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}

          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : user ? (
            <div className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-[#4aff08] transition">
              {" "}
              <Tooltip id="my-tooltip" />
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-place="bottom"
              >
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL || "/download.png"}
                  alt=""
                />{" "}
              </a>
            </div>
          ) : (
            <Link
            onClick={() => setIsOpen(false)}
              to="/sign-in"
              className="border hover:border-[#347928]  hover:bg-[#FCCD2A] hover:text-[#347928] px-4 py-2 rounded-lg active:scale-105 transition"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
