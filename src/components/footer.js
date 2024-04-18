import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const lists = [
    {
      title: "Resources",
      links: ["Download", "Help Center", "Guide Book", "App Directory"],
    },
    {
      title: "Travellers",
      links: [
        "Why Travellers",
        "Enterprice",
        "Customer Stories",
        "Instagram Post",
      ],
    },
    {
      title: "Company",
      links: ["Travelling", "About Locato", "Success", "Information"],
    },
    {
      title: "Get App",
      links: ["App Store", "Google Play Store"],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);
  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  // console.log("activeIndex", activeIndex);
  return (
    <footer className="footer-section flex sm:flex-row flex-col items-center justify-center p-4 sm:p-10 bg-[#EFF7FF] w-full">
      <div className="flex items-start justify-center flex-col w-full sm:w-1/4 sm:pl-10">
        <Link to="/" className="outline-none">
          <img src="/assets/footer-logo.png" alt="footer-logo" />
        </Link>
        <p className="text-lg font-normal leading-26 tracking-normal text-left text-gray-700 py-5">
          Enjoy the touring <br /> with Salty
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="#"
            className="text-white bg-[#FFC14B] w-[34px] h-[34px] flex items-center justify-center border-black rounded-full mx-2 ml-0"
          >
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="14px"
              height="14px"
              viewBox="0 0 96.124 96.123"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </Link>
          <Link
            to="#"
            className="text-white bg-[#ffffff] w-[34px] h-[34px] flex items-center justify-center border border-black rounded-full mx-2"
          >
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="0 0 32 32"
              id="Camada_1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path>{" "}
                  <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path>{" "}
                  <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </Link>
          <Link
            to="#"
            className="text-white bg-[#ffffff] w-[34px] h-[34px] flex items-center justify-center border border-black rounded-full mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <defs> </defs>
              <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
                  transform=" matrix(1 0 0 1 0 0) "
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-start justify-between w-full sm:space-x-8 sm:w-3/4 pt-4 sm:pt-0">
        {!isMobile && (
          <>
            {lists.map((items, index) => (
              <div key={items.title} className="py-4 sm:p-5">
                <h3 className="text-xl font-medium leading-18 tracking-normal text-left">
                  {items.title}
                </h3>
                <ul className="pt-3">
                  {items.links.map((item, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-sm font-normal leading-34 tracking-normal text-left py-2"
                    >
                      <Link to="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
        {isMobile && (
          <>
            {lists.map((items, index) => (
              <div
                key={items.title}
                className={`w-full border-b-2 py-3 sm:p-5 ${
                  index === 0 ? "pt-4 border-b-2" : "pt-2"
                } `}
              >
                <h3
                  className="flex items-center justify-between font-medium leading-18 tracking-normal text-left"
                  onClick={() => handleQuestionClick(index)}
                >
                  <span className="text-2xl">{items.title} </span>
                  <span
                    className={`text-4xl font-normal ease-in-out transition-all duration-1000`}
                  >
                    {activeIndex === index ? (
                      <span className="w-5 h-5 flex items-center justify-center">
                        -
                      </span>
                    ) : (
                      <span className="w-5 h-5 flex items-center justify-center">
                        +
                      </span>
                    )}
                  </span>
                </h3>
                <ul
                  className={`listContainer pt-3 transition-all duration-700 ${
                    activeIndex === index ? "open" : "overflow-hidden"
                  }`}
                >
                  {items.links.map((item, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-base font-normal leading-34 tracking-normal text-left py-2"
                    >
                      <Link to="/">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
