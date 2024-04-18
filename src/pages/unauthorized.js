
import React from 'react';

const Unauthorized = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-gray-700 mb-4">You do not have access to this feature.</p>
        <p className="text-gray-700 mb-4">Please contact the admin for assistance.</p>
        <a href="/login" className="bg-[#FFCD6B] hover:bg-[#ffc44e] text-black font-bold py-2 px-4 rounded inline-block">Login Again</a>
      </div>
    </div>
  );
};

export default Unauthorized;