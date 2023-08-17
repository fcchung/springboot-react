import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-100 p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link className="font-semibold text-xl tracking-tight" to={"/"}>
            Springboot - React Demo
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded  border-white-400 hover:text-grey hover:border-black">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="font-semibold w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow block mt-4 lg:inline-block lg:mt-0  ">
            <Link
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-900	 mr-4"
              to={"/view-employees"}
            >
              View All Emplopyee
            </Link>
            <Link
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-gray-900	 mr-4"
              to={"/add-employee"}
            >
              Add Employee
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
