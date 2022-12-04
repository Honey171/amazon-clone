import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { addedQtyState, qtyState } from '../atoms/atoms';
import Sidebar from '../components/Sidebar';
import { db } from '../utilites/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/auth';
import Footer from '../components/Footer';

function Product() {
  const [qty, setQty] = useRecoilState(qtyState);
  const [addedQty, setAddedQty] = useRecoilState(addedQtyState);
  const { state } = useLocation();
  const { user } = useAuth();
  const rating = Math.floor(state?.product?.rating?.rate);

  const addToCartHandler = async () => {
    if (qty <= 30 && qty >= 1) {
      await setDoc(
        doc(db, 'customers', user.uid, 'cartItems', String(state?.product?.id)),
        {
          ...state.product,
          qty,
        },
      );
    }
  };

  const star = (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="mx-auto mt-16 max-w-6xl flex flex-col lg:flex-row justify-evenly space-y-2 lg:space-y-0 items-center lg:items-start ">
          <div className="max-w-xs">
            <img
              src={state?.product.image}
              alt=""
            />
          </div>
          <div className="w-auto h-[70vh] space-y-3">
            <div className="max-w-md">
              <p className="text-xl text-[#DEDBD7] font-bold">
                {state?.product.title}
              </p>
            </div>
            <div className="text-[#38C2E9] font-semibold">
              {rating === 1 && (
                <div className="flex gap-2 ">
                  <span className="flex">{star}</span>
                  <span>{state?.product.rating.count} ratings</span>
                </div>
              )}
              {rating === 2 && (
                <div className="flex gap-2">
                  <span className="flex">
                    {star}
                    {star}
                  </span>
                  <span>{state?.product.rating.count} ratings</span>
                </div>
              )}
              {rating === 3 && (
                <div className="flex gap-2">
                  <span className="flex">
                    {star}
                    {star}
                    {star}
                  </span>
                  <span>{state?.product.rating.count} ratings</span>
                </div>
              )}
              {rating === 4 && (
                <div className="flex gap-2">
                  <span className="flex">
                    {star}
                    {star}
                    {star}
                    {star}
                  </span>
                  <span>{state?.product.rating.count} ratings</span>
                </div>
              )}
              {rating === 5 && (
                <div className="flex gap-2">
                  <span className="flex">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                  </span>
                  <span>{state?.product.rating.count} ratings</span>
                </div>
              )}
            </div>
            <div className="text-[#DEDBD7]">
              <span className="text-sm relative bottom-1">$</span>
              <span className="text-xl">{state.product.price}</span>
            </div>
            <div className="text-[#DEDBD7] max-w-sm">
              <span className="text-lg ">Description:</span> <br />
              {state.product.description}{' '}
              <span className="text-red-500 font-bold">
                The quantity input field must contain a number between 1-30 if
                you wish to add an item
              </span>
            </div>
            <div className="flex flex-row space-x-10 lg:flex-col lg:space-x-0 lg:space-y-2">
              <span className="text-[#DEDBD7]">
                Quantity:
                <input
                  type="number"
                  min="1"
                  max="30"
                  placeholder="0"
                  className="outline-none bg-[#202324] pl-2 rounded-lg"
                  onChange={(e) => {
                    if (e.target.value >= 31) {
                      setQty('');
                    } else {
                      setQty(e.target.value);
                    }
                  }}
                />
              </span>
              <div className="flex flex-col space-y-2">
                <span>
                  <button
                    className="bg-[#907800] text-[#DEDBD7] w-[175px] py-1.5 rounded-lg text-center text-sm"
                    onClick={() => {
                      if (qty >= 31) {
                        return;
                      } else {
                        setAddedQty(qty);
                        addToCartHandler();
                      }
                      if (addedQty >= 1) {
                        const plus = Number(qty) + Number(addedQty);
                        setAddedQty(plus);
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                </span>
                <span>
                  <button className="bg-[#BB7000] text-[#DEDBD7] text-sm w-[175px] py-1.5 rounded-lg text-center">
                    Buy Now
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default Product;
