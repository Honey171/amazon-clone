import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { sidebarState } from '../atoms/atoms';
import { useRecoilState } from 'recoil';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../utilites/firebase';
import { useAuth } from '../hooks/auth';

function Navbar() {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      return onSnapshot(
        collection(db, 'customers', user.uid, 'cartItems'),
        (snapshot) => {
          setData(snapshot.docs);
        },
      );
    }
  }, [db, user]);

  return (
    <>
      <div
        className="h-[175px] md:h-[60px] flex-col md:flex-row bg-[#0f141a] flex items-center justify-between text-white 2xl:px-6"
        id="navbar"
      >
        <div className="flex items-center justify-center">
          <span className="border border-[#2a2f34] border-opacity-0 hover:border-opacity-100 py-1 px-1 inline sm:hidden">
            <GiHamburgerMenu
              className="w-6 h-6"
              onClick={() => setSidebar(true)}
            />
          </span>
          <Link to="/home">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
              className="w-24 h-12 border border-transparent hover:border-[#2a2f34] py-2 px-1.5"
            />
          </Link>
        </div>
        <label className="flex items-center hover:shadow-lg hover:shadow-black text-black text-base md:text-lg">
          <input
            type="text"
            className="w-[250px] 2xl:w-[1000px] xl:w-[650px] lg:w-[500px] h-[40px] rounded-tl-md rounded-bl-md  outline-none z-0 bg-[#181A1B] text-white"
          />
          <button className="text-gray bg-[#8D5001] hover:bg-[#9E5E0A] w-12 h-[40px] rounded-tr-md rounded-br-md">
            <AiOutlineSearch className="w-7 h-9 ml-[10px] text-[#333332]" />
          </button>
        </label>
        <div className="flex space-x-4 pt-2">
          <div
            className="-space-y-1 border border-transparent hover:border-[#2a2f34] py-1 px-1.5 cursor-pointer"
            onMouseOver={() => setProfile(true)}
            onMouseOut={() => setProfile(false)}
          >
            <p className="text-sm">Hello, {user?.displayName}</p>
            <p className="font-bold">Account & Lists</p>
            {profile && user && (
              <div
                className="absolute translate-y-2 bg-[#181A1B] w-[100px] py-2 text-center"
                onMouseOver={() => setProfile(true)}
                onMouseOut={() => setProfile(false)}
              >
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
          <div className="-space-y-1 border border-transparent hover:border-[#2a2f34] py-1 px-1.5 cursor-pointer">
            <p className="text-sm">Return</p>
            <p className="font-bold">& orders</p>
          </div>
          <Link
            to="/cart"
            className="flex items-center border border-transparent hover:border-[#2a2f34] py-1 px-1.5"
          >
            <div className="flex flex-row-reverse">
              <span className="-translate-y-2 text-[#FB9421] font-bold">
                {data.length >= 1 ? data.length : 0}
              </span>
              <HiOutlineShoppingCart className="w-9 h-9" />
            </div>
            <p className="font-bold pt-3">Cart</p>
          </Link>
        </div>
      </div>
      <div className="bg-[#1c2632] h-[300px] sm:h-[50px] flex items-center justify-evenly sm:justify-between text-white font-medium px-2 lg:px-6">
        <div className="flex flex-col sm:flex-row cursor-pointer">
          <span
            className="gap-1 hidden xl:flex items-center border border-transparent hover:border-[#2a2f34] px-1 py-1"
            onClick={() => setSidebar(true)}
          >
            <GiHamburgerMenu className="w-6 h-6" />
            All
          </span>
          <div className="flex flex-col sm:invisible xl:visible xl:flex-row xl:space-x-3">
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Today's Deals
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Buy again
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              {user?.displayName}'s Amazon.com
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Customer Service
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Gift Cards
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Registry
            </p>
            <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
              Browsing History
            </p>
            <span className="flex items-center justify-between">
              <p className="py-1 px-1 border border-transparent hover:border-[#2a2f34]">
                Sell
              </p>
            </span>
          </div>
        </div>
        <div className="flex cursor-pointer">
          <span
            className="absolute left-5 gap-1 hidden sm:flex xl:hidden items-center border border-transparent hover:border-[#2a2f34] px-1 py-1"
            onClick={() => setSidebar(true)}
          >
            <GiHamburgerMenu className="w-6 h-6" />
            All
          </span>
          <p className="border border-transparent hover:border-[#2a2f34] px-3 py-1">
            Shop holiday fashion deals
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
