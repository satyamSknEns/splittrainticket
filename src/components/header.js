import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCookie } from "../config/coockies";
const Header = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [hamBurger, setHamBurger] = useState(false);
  const [checkCart, setCheckCart] = useState(false);
  const [checkMenu, setCheckMenu] = useState(false);
  const user = getCookie("user");
  const userData = JSON.parse(user);
  const currentUrl = location.pathname;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        hamBurger &&
        !event.target.closest("#hemburger") &&
        !event.target.closest(".hamburgerIcon")
      ) {
        setHamBurger(false);
      }
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [hamBurger]);

  const handleCart = () => {
    setCartOpen(!cartOpen);
    setCheckCart(true);
  };
  const cartClose = () => {
    setCartOpen(false);
  };
  const handelMenu = () => {
    setCheckMenu(true);
    setHamBurger(!hamBurger);
    setCartOpen(false);
  };
  const menuClose = () => {
    setHamBurger(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-[75px] sm:h-[90px] flex items-center justify-between z-[100] p-2 pl-2 sm:px-5 bg-[#ffffff]">
      <div className="flex items-center justify-center sm:px-10 cursor-pointer">
        <span
          className="sm:hidden -mt-2 mr-2 hamburgerIcon"
          onClick={handelMenu}
        >
          <svg
            width="38px"
            height="38px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 6H20M7 12H17M9 18H15"
                stroke="#152B69"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </span>
        <Link to="/" className="outline-none flex items-center justify-center">
          <img
            src="/assets/header-logo.png"
            alt="logo"
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between sm:w-[60%]">
        <div className="sm:flex hidden items-center justify-between text-base font-medium leading-5 tracking-normal text-center text-[#152B69] w-[55%]">
          <Link
            to="/pages/destination"
            className="p-3 px-4 mr-3 cursor-pointer hover:bg-blue-200 hover:rounded-full"
          >
            Destinations
          </Link>
          <Link
            to="/pages/routes"
            className="p-3 px-6 mr-3 cursor-pointer hover:bg-blue-200 hover:rounded-full"
          >
            Route
          </Link>
          <Link
            to="/pages/station"
            className="p-3 px-4 mr-3 cursor-pointer hover:bg-blue-200 hover:rounded-full"
          >
            Bus providers
          </Link>
        </div>
        <div className="flex items items-center justify-center cursor-pointer">
          <div
            className="flex items items-center justify-center sm:mr-5 p-2 sm:p-3"
            onClick={handleCart}
          >
            <img src="/assets/images/cart-icon.png" alt="cart-icon" />
            <span className="text-base font-medium leading-5 tracking-normal px-1">
              Cart
            </span>
          </div>
          <Link
            to="/profile"
            className="flex items items-center justify-center p-2 sm:p-3 rounded-full bg-[#FFCD6B]"
          >
            <div className="cart-icon">
              <img src="/assets/images/user-icon.png" alt="user-icon" />
            </div>

            <span className="text-center text-base font-medium leading-5 tracking-normal text-[#152B69] px-1">
              {userData && userData.firstName ? (
                <>
                  Hi, <span>{userData.firstName}</span>
                </>
              ) : (
                "Sign In"
              )}
            </span>
            <svg
              viewBox="0 0 24 24"
              width={20}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                  fill="#152B69"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </div>
      {checkCart && (
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-[350px] bg-[#152B69] p-8 pt-2 ${
            cartOpen ? "cartOpen" : "cartClose"
          }`}
        >
          <header className="flex items-center justify-between text-white text-2xl sm:text-lg border-b">
            <p className="font-medium">
              Cart <span>(1)</span>
            </p>
            <p className="cursor-pointer p-2 font-medium" onClick={cartClose}>
              X
            </p>
          </header>
          <div className="py-8">
            <div className="flex justify-between text-white">
              <p className="flex flex-col text-xl sm:text-base font-medium">
                <span>Total</span>
                <span>1 Adult</span>
              </p>
              <p className="text-3xl sm:text-2xl font-medium">$79.02</p>
            </div>
          </div>
          <footer className="absolute bottom-0 left-0 right-0">
            <p className=" text-center text-xl sm:text-base text-slate-100 my-4 px-4">
              You’re saving <span>$132.59</span> with SplitSave!
            </p>
            <div className="w-full flex items-center justify-center rounded-full text-[#152B69] text-2xl sm:text-lg font-medium p-2 px-6 bg-[#FFCD6B] cursor-pointer mt-6">
              Continue
            </div>
            <p className="text-[#FFCD6B] text-xl sm:text-base text-center my-2 cursor-pointer">
              Go to Checkout
            </p>
          </footer>
        </div>
      )}
      {checkMenu && (
        <div
          id="outsideContainer"
          className={`fixed top-0 left-0 right-0 bottom-0 w-full ${
            hamBurger ? "menuOpen" : "menuClose"
          }`}
        >
          <div
            id="hemburger"
            className={`fixed top-0 left-0 h-full w-[90%] bg-[#152B69] p-4 ${
              hamBurger ? "menuOpen" : "menuClose"
            }`}
          >
            <header className="flex items-center justify-between text-white">
              <div
                className="flex items-center justify-center"
                onClick={currentUrl === "/profile" ? menuClose : null}
              >
                <div className="menu-icon mr-2">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        opacity="0.5"
                        cx="12"
                        cy="9"
                        r="3"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      ></circle>{" "}
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                      ></circle>{" "}
                      <path
                        opacity="0.5"
                        d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <Link
                  to="/profile"
                  className={`pl-0 text-2xl p-3 px-4 mr-3 cursor-pointer ${currentUrl}`}
                >
                  <span className="text-center font-medium tracking-normal">
                    {userData && userData.firstName ? (
                      <>
                        Hi, <span>{userData.firstName}</span>
                      </>
                    ) : (
                      <>
                        <span className="underline">Sign In</span> Or{" "}
                        <span className="underline">Register</span>
                      </>
                    )}
                  </span>
                </Link>
              </div>
              <p
                className="cursor-pointer p-2 font-medium text-2xl"
                onClick={menuClose}
              >
                X
              </p>
            </header>
            <div className="pt-4 py-8 pl-2">
              <div className="flex flex-col items-start text-base font-medium leading-5 tracking-normal text-center text-white">
                <Link
                  to="/pages/destination"
                  className="pl-0 text-2xl p-3 px-4 mr-3 cursor-pointer"
                >
                  Destinations
                </Link>
                <Link
                  to="/pages/routes"
                  className="pl-0 text-2xl p-3 px-6 mr-3 cursor-pointer"
                >
                  Route
                </Link>
                <Link
                  to="/pages/station"
                  className="pl-0 text-2xl p-3 px-4 mr-3 cursor-pointer"
                >
                  Bus providers
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
