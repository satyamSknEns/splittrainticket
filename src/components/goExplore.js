import React from "react";
import { Link } from "react-router-dom";
const GoExplore = () => {
  return (
    <section className="flex sm:flex-row flex-col items-center p-8 bg-[#EBF9FF]">
      <div className="flex items-center justify-center w-full sm:w-1/2 p-8">
        <div className="relative">
          <div className="text-base bg-white p-4 px-6 inline-flex flex-col rounded-xl absolute top-6 -right-14 z-30">
            <div className="flex items-center">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FACD49"
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
                    d="M16.2429 5.75708C18.586 8.10023 18.586 11.8992 16.2429 14.2424M7.75758 14.2424C5.41443 11.8992 5.41443 8.10023 7.75758 5.75708M4.92893 17.0708C1.02369 13.1656 1.02369 6.83395 4.92893 2.92871M19.0715 2.92871C22.9768 6.83395 22.9768 13.1656 19.0715 17.0708M12.0002 11.9998C13.1048 11.9998 14.0002 11.1043 14.0002 9.99976C14.0002 8.89519 13.1048 7.99976 12.0002 7.99976C10.8957 7.99976 10.0002 8.89519 10.0002 9.99976C10.0002 11.1043 10.8957 11.9998 12.0002 11.9998ZM12.0002 11.9998V20.9998"
                    stroke="#FACD49"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <span className="text-3xl pl-2 font-bold">5000+</span>
            </div>
            <p className="text-right font-normal text-xs text-gray-500 pr-8">
              Customers
            </p>
          </div>
          <img
            src="assets/images/goexplore.png"
            alt="goexplore"
            className="relative z-20"
          />
          <img
            src="assets/images/goexplore1.png"
            alt="goexplore"
            className="absolute left-7 -top-4 z-10"
          />
          <img
            src="assets/images/goexplore2.png"
            alt="goexplore"
            className="absolute -left-24 top-24 z-20"
          />
          <p className="text-base bg-white p-4 px-8 inline-flex rounded-full absolute left-28 bottom-6 z-20">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.0918 10.4171C4.0918 5.88084 7.88252 2.21436 12.4678 2.21436C17.066 2.21436 20.8567 5.88084 20.8567 10.4171C20.8567 12.703 20.0254 14.8251 18.6571 16.6239C17.1475 18.608 15.287 20.3368 13.1927 21.6936C12.7134 22.0072 12.2809 22.0309 11.7547 21.6936C9.64862 20.3368 7.78806 18.608 6.29145 16.6239C4.92213 14.8251 4.0918 12.703 4.0918 10.4171ZM9.70729 10.6726C9.70729 12.1922 10.9474 13.3874 12.4678 13.3874C13.9892 13.3874 15.2413 12.1922 15.2413 10.6726C15.2413 9.1647 13.9892 7.9113 12.4678 7.9113C10.9474 7.9113 9.70729 9.1647 9.70729 10.6726Z"
                fill="#FACD49"
              />
            </svg>
            <span className="pl-2">Best Adventures</span>
          </p>
        </div>
      </div>
      <div className="flex items-start flex-col w-full sm:w-1/2 py-2 sm:px-10">
        <h2 className="font-Volkhov sm:text-[44px] text-2xl lea font-semibold sm:leading-[59px] tracking-0 text-left text-[#152B69]">
          It’s a Big World Out There,{" "}
          <span className="font-bold"> Go Explore</span>
        </h2>
        <p className="text-base font-normal leading-7 tracking-normal text-left mb-5">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <Link
          to="/pages/routes"
          className="text-base bg-[#FFCD6B] font-medium leading-5 tracking-normal text-left rounded-full p-4 px-8 my-4 cursor-pointer"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default GoExplore;
