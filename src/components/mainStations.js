import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainStations = () => {
  const stations = [
    "Manchester Piccadilly",
    "London Euston",
    "Manchester Piccadilly",
    "London Paddington",
    "London Charing Cross",
    "Manchester Piccadilly",
    "London King's Cross",
    "Manchester Piccadilly",
    "London Liverpool Street",
    "London St Pancras",
  ];
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <section className="p-4 sm:p-8 bg-[#FCF5E9]">
      <div className="flex flex-col items-center justify-center sm:w-[80%] mx-auto">
        <h3 className="font-volkhov text-center text-3xl sm:text-5xl font-medium text-[#152B69] ">
          Main Train Stations in <span className="font-bold">London</span>
        </h3>
        <p className=" text-justify sm:text-center m-2 sm:m-4">
          The biggest and busiest stations in London are the following; if you
          are travelling into London, you will likely arrive at one of these:
          When searching for your journeys with our fare finder, you can select
          London (All Stations), and we will find the best and lowest priced
          station in London for your arrival. If you are looking to get to an
          Airport, you can also get there by train from some of these stations.
        </p>
      </div>
      <div className="flex flex-wrap w-[80%] mx-auto">
        {stations.map((item, index) => (
          <Link
            key={index}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            to="/"
            className={`m-4 flex items-center justify-between w-[300px] px-6 py-1 rounded-full ${
              hoveredLink === index ? "bg-[#FFCD6B]" : "bg-[#ffffff]"
            }`}
          >
            <div className="flex items-center justify-center text-base font-medium py-2 ">
              <span
                className={`w-2 h-2 ${
                  hoveredLink === index
                    ? "bg-black"
                    : "bg-[#FFCD6B] transition-all duration-700"
                } rounded-full mr-3 cursor-pointer`}
              ></span>{" "}
              {item}
            </div>
            <div
              className={`arrow ${
                hoveredLink === index ? "opacity-100 " : "opacity-0"
              }`}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 -6.5 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g
                    id="icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="ui-gambling-website-lined-icnos-casinoshunter"
                      transform="translate(-1511.000000, -158.000000)"
                      fill="#1C1C1F"
                      fillRule="nonzero"
                    >
                      <g id="1" transform="translate(1350.000000, 120.000000)">
                        <path
                          d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                          id="right-arrow"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainStations;
