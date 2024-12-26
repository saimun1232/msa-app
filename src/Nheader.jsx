import React from "react";
import msaIM from "./assets/msa.png"
import './index.css'
import { FaSearch } from "react-icons/fa";

const Nheader = () => {
  return (
    <header className="mb-5">
      <div className="container bg-[#ecf0f3] shadow-customInset  mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={msaIM} // Replace with your logo's path
            alt="msaIm"
            className="h-8 lg:h-16 rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-green-700">
              Muslim Students Association
            </h1>
            <p className="text-sm text-green-600">
              Begum Rokeya University,Rangpur
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden text-black md:flex space-x-8">
        <div>
        <ul className="menu menu-horizontal px-1">
        <li><a href="#">Home</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Event Registration</a></li>
            <li><a href="#">Event Verify</a></li>
            <li><a href="https://saimun1232.github.io/self-bank/index1.html">Log in</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Register</a></li>
        </ul>
        </div>
        
        </nav>
        <div className="dropdown lg:hidden">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
            <li><a href="#">Home</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Event Registration</a></li>
            <li><a href="#">Event Verify</a></li>
            <li><a href="https://saimun1232.github.io/self-bank/index1.html">Log in</a></li>
            <li><a href="https://saimun1232.github.io/EventIn/index.html">Register</a></li>
          </ul>
        </div>
        <div className="relative hidden lg:block">
                  <i className="absolute text-black lg:left-[180px] top-[35%]"><FaSearch></FaSearch></i>
                  <input
                    type="text"
                    placeholder="Search here"
                    className=" placeholder:text-black bg-[#F85559] lg:placeholder:text-black p-3 lg:py-3 lg:px-5 rounded-full w-[150px] lg:w-auto"
                  />
                </div>
      </div>
    </header>
  );
};

export default Nheader;

