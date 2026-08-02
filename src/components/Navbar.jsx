import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b relative">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-wider cursor-pointer z-10" onClick={() => navigate("/")}>
        HABITECT
      </div>

      {/* Center: Navigation Links */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 items-center font-medium text-slate-700">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
        <Link to="/about" className="hover:text-orange-500 transition">About</Link>
        <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
      </nav>

      {/* Right: User Profile or Login Button */}
      <div className="z-10">
        {loggedUser ? (
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition font-medium text-slate-800"
          >
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.654 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{loggedUser.name}</span>
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}