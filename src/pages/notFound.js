import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-600">Page Not Found</p>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, the page you are looking for not avaible!.
          </p>
          <Link
            to="/"
            className="w-[240px] inline-block px-6 py-3 mt-4 text-lg font-semibold bg-[#FFCD6B] shadow-md text-black hover:text-[#152B69] rounded-full orange-btn z-50"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
