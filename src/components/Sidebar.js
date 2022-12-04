import React, { useEffect } from 'react';

import { CgProfile } from 'react-icons/cg';
import { HiChevronRight } from 'react-icons/hi';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { TfiWorld } from 'react-icons/tfi';
import { useRecoilState } from 'recoil';
import { sidebarState } from '../atoms/atoms';
import { seeAllShop } from '../atoms/atoms';
import { seeAllProgram } from '../atoms/atoms';
import { useAuth } from '../hooks/auth';

function Sidebar() {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const [see, setSee] = useRecoilState(seeAllShop);
  const [seeV, setSeeV] = useRecoilState(seeAllProgram);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (sidebar) {
      document.querySelector('.wrapper').classList.add('hide');
      document.querySelector('body').classList.add('scrollbarHide');
    } else {
      document.querySelector('.wrapper').classList.remove('hide');
      document.querySelector('body').classList.remove('scrollbarHide');
    }
  }, [sidebar]);

  return (
    <>
      {sidebar && (
        <div className="w-[365px] h-[100vh] overflow-y-scroll scrollbar scrollbar-track-[#202324] scrollbar-thumb-[#454A4D] bg-[#181a1b] top-0 fixed counter z-50">
          <div className="bg-[#1c2632] w-[365px] h-[5%] flex items-center justify-start text-xl text-white font-bold pl-10 space-x-3 sticky top-0 z-50">
            <span>
              <CgProfile className="text-3xl" />
            </span>
            <p>Hello, {user.displayName}</p>
            <span
              className="absolute left-[300px] text-white z-50 text-2xl cursor-pointer"
              onClick={() => setSidebar(false)}
            >
              X
            </span>
          </div>
          <div className="relative">
            <div className="border-b border-[#3B4042] py-5 space-y-3 text-[#D6D4D0] ">
              <h1 className="pl-10 text-xl font-bold">
                Digital Content & Devices
              </h1>
              <span className="pl-10 pr-5 py-2 font-medium flex justify-between items-center">
                <p>The clone was made for educational purpose</p>
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Amazon Music</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Kindle E-readers & Books</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Amazon Appstore</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
            </div>
            <div className="border-b border-[#3B4042] py-6 space-y-3 text-[#D6D4D0]">
              <h1 className="pl-10 text-xl font-bold">Shop By Department</h1>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Electronics</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Computers</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Smart Home</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Arts & Crafts</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              {see ? (
                ''
              ) : (
                <span
                  className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex items-center cursor-pointer"
                  onClick={() => setSee(true)}
                >
                  <p className="text-[#D6D4D0]">See All</p>
                  <BiChevronDown className="text-2xl mr-4" />
                </span>
              )}
              <div
                className={`border-t border-[#3B4042]  py-3 space-y-3 text-[#D6D4D0]  ${
                  see ? 'inline-block' : 'hidden'
                }`}
              >
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Automotive</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Baby</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Beauty and personal care</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Women's Fashion</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Men's Fashion</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Girls' Fashion</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Boys' Fashion</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Health and Household</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Home and Kitchen</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Industrial and Scientific</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Luggage</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Movies & Television</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Pet supplies</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Software</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Sports and Outdoors</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Tools & Home Improvement</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Toys and Games</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                  <p className="text-[#D6D4D0]">Video Games</p>
                  <HiChevronRight className="text-2xl mr-4" />
                </span>
                {see ? (
                  <span
                    className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex items-center cursor-pointer"
                    onClick={() => setSee(false)}
                  >
                    <p className="text-[#D6D4D0]">See Less</p>
                    <BiChevronUp className="text-2xl mr-4" />
                  </span>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className=" border-[#3B4042] py-6 space-y-3 text-[#D6D4D0]">
              <h1 className="pl-10 text-xl font-bold">Programs & Features</h1>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Gift Cards</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <p className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium ">
                <span className="text-[#D6D4D0]">#FoundItOnAmazon</span>
              </p>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Amazon Live</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">International Shopping</p>
                <HiChevronRight className="text-2xl mr-4" />
              </span>
              {seeV ? (
                ''
              ) : (
                <span
                  className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex items-center cursor-pointer"
                  onClick={() => setSeeV(true)}
                >
                  <p className="text-[#D6D4D0]">See All</p>
                  <BiChevronDown className="text-2xl mr-4" />
                </span>
              )}
            </div>
            <div
              className={`border-t border-[#3B4042]  py-3 space-y-3 text-[#D6D4D0] transition ${
                seeV ? 'inline-block' : 'hidden'
              }`}
            >
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex justify-between items-center cursor-pointer">
                <p className="text-[#D6D4D0]">Amazon Second Chance</p>
              </span>
              {seeV ? (
                <span
                  className="hover:bg-[#232627] hover:text-[#111111] pl-10 pr-5 py-2 font-medium flex items-center"
                  onClick={() => setSeeV(false)}
                >
                  <p className="text-[#D6D4D0] cursor-pointer">See Less</p>
                  <BiChevronUp className="text-2xl mr-4" />
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="py-6 space-y-3 border-t border-[#3B4042]  text-[#D6D4D0]">
              <h1 className="pl-10 text-xl font-bold">Help & Settings</h1>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 py-2 font-medium flex justify-between items-center">
                <p className="text-[#D6D4D0]">Your Account</p>
              </span>
              <span className="hover:bg-[#232627] pl-10 py-2 font-medium  flex items-center space-x-2">
                <TfiWorld />
                <p className="text-[#D6D4D0]">English</p>
              </span>
              <span className="hover:bg-[#232627] pl-10 py-2 font-medium flex items-center space-x-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4692/4692307.png"
                  alt=""
                  className="w-6 h-6"
                />
                <p className="text-[#D6D4D0]">United States</p>
              </span>
              <span className="hover:bg-[#232627] hover:text-[#111111] pl-10 py-2 font-medium flex justify-between items-center">
                <p className="text-[#D6D4D0]">Customer Service</p>
              </span>
              <span
                className="hover:bg-[#232627] hover:text-[#111111] pl-10 py-2 font-medium flex items-center cursor-pointer"
                onClick={logout}
              >
                <p className="text-[#D6D4D0]">Sign Out</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
