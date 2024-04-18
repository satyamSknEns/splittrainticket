import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
        <div className="bg-white p-6 rounded shadow-lg text-center flex justify-center items-center flex-col">
          {/* <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div> */}
          <img
            src="/assets/svg/spinner-120.svg"
            alt="loader"
            className="mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
