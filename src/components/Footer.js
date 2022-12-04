import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="relative bottom-0 w-full flex justify-center items-center bg-[#1C2632] flex-col space-y-4">
      <button
        className="text-center bg-[#2C3948] py-2 text-white hover:bg-gray-600 w-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        Back to top
      </button>
      <Link to="/home">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="w-24 h-12 cursor-pointer py-2 px-1.5 hover:shadow-sm hover:shadow-gray-700"
        />
      </Link>
      <p className="text-white font-medium">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}

export default Footer;
