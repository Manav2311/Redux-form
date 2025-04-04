import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-300 py-4 px-6">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Employee Manager</h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
          >
            Add Details
          </Link>
          <Link
            to="/viewEmployees"
            className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
          >
            Employees Details
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
