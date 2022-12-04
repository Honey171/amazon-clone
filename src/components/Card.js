import React from 'react';
import { Link } from 'react-router-dom';

function Card({ category, electronics, jewelery, men, women }) {
  return (
    <div className="mx-auto flex flex-col">
      <div className="bg-[#181A1B] relative bottom-20 z-50 w-[350px] h-[410px] text-center rounded-sm">
        <span className="capitalize text-white text-3xl ">{category}</span>
        <div className="flex flex-row flex-wrap gap-y-2 gap-x-3 pt-3 justify-center">
          {category === 'electronics' &&
            electronics.map((product) => (
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-[150px] h-[100px] hover:scale-[1.02]"
                />
              </Link>
            ))}
          {category === 'jewelery' &&
            jewelery.map((product) => (
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-[150px] h-[100px] hover:scale-[1.02]"
                />
              </Link>
            ))}
          {category === "men's clothing" &&
            men.map((product) => (
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-[150px] h-[100px] hover:scale-[1.02]"
                />
              </Link>
            ))}
          {category === "women's clothing" &&
            women.map((product) => (
              <Link
                to={`/product/${product.id}`}
                state={{ product }}
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-[150px] h-[100px] hover:scale-[1.02]"
                />
              </Link>
            ))}
        </div>
        <span className="absolute bottom-2 left-2 text-teal-300 text-sm hover:underline hover:text-[#D06D43] cursor-pointer">
          Shop all deals
        </span>
      </div>
    </div>
  );
}

export default Card;
