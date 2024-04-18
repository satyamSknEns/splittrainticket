import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MoreIdeas = ({ isMobile }) => {
  const trainDetails = [
    {
      id: 1,
      category: "Trains from London",
      routes: [
        "London to Brighton",
        "London to Manchester",
        "London to Edinburgh",
        "London to Birmingham",
        "London to Leeds",
      ],
    },
    {
      id: 2,
      category: "Trains to London",
      routes: [
        "London from Brighton",
        "London from Manchester",
        "London from Edinburgh",
        "London from Birmingham",
        "London from Leeds",
      ],
    },
    {
      id: 3,
      category: "Other Destinations",
      routes: [
        "London to Brighton",
        "London to Manchester",
        "London to Edinburgh",
        "London to Birmingham",
        "London to Leeds",
      ],
    },
  ];
  const CustomArrow = ({ onClick, direction }) => (
    <div className={`${direction}-btn`} onClick={onClick}>
      {direction === "prev" ? (
        <div
          className={`absolute -top-24 left-[59%] sm:left-auto sm:right-20 sm:-top-28 z-10 w-10 sm:w-[54px] h-10 sm:h-[54px] border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:bg-[#152B69] hover:text-white`}
        >
          <svg
            className={`w-5 h-5 transition-transform rotate-90`}
            fill="none"
            stroke={`currentColor`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      ) : (
        <div
          className={`absolute -top-24 right-[32.5%] sm:right-5 sm:-top-28 top z-10 w-10 sm:w-[54px] h-10 sm:h-[54px] border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:text-white hover:bg-[#152B69]`}
        >
          <svg
            className={`w-5 h-5 transition-transform -rotate-90`}
            fill="none"
            stroke={`currentColor`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      )}
    </div>
  );

  const settings = {
    speed: 1000,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <section className="p-4 sm:p-8 bg-[#EBF9FF] moreIdeas">
      <div className="flex flex-col items-start justify-center mx-auto my-6">
        <h3 className="font-volkhov text-left sm:text-center text-3xl sm:text-5xl font-medium text-[#152B69] ">
          Looking for more ideas?
        </h3>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center py-8 mx-auto ">
        {!isMobile && (
          <>
            {trainDetails.map((item) => (
              <div
                key={item.id}
                className="flex flex-col mx-10 px-12 py-8 bg-white rounded-2xl sm:w-[27%]"
              >
                <div className="flex items-center justify-center bg-[#FFC14B] rounded-full w-14 h-14">
                  <svg
                    width="22"
                    height="27"
                    viewBox="0 0 22 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.506349 18.8235V6.15683C0.506349 4.97905 0.812127 4.03994 1.42368 3.3395C2.03524 2.63905 2.84057 2.10572 3.83968 1.7395C4.83968 1.37327 5.97879 1.12883 7.25701 1.00616C8.53524 0.883496 9.84057 0.822607 11.173 0.823496C12.6397 0.823496 14.0232 0.884829 15.3237 1.0075C16.6241 1.13016 17.7575 1.37461 18.7237 1.74083C19.6899 2.10705 20.4508 2.64039 21.0063 3.34083C21.5619 4.04127 21.8397 4.97994 21.8397 6.15683V18.8235C21.8397 20.1346 21.3899 21.2404 20.4903 22.1408C19.5908 23.0413 18.485 23.4911 17.173 23.4902L19.173 25.4902V26.1568H16.5063L13.8397 23.4902H8.50635L5.83968 26.1568H3.17301V25.4902L5.17301 23.4902C3.8619 23.4902 2.75613 23.0404 1.85568 22.1408C0.955238 21.2413 0.50546 20.1355 0.506349 18.8235ZM11.173 3.49016C8.81746 3.49016 7.09524 3.62927 6.00635 3.9075C4.91746 4.18572 4.17301 4.49105 3.77301 4.8235H18.7063C18.373 4.44572 17.6566 4.12927 16.557 3.87416C15.4575 3.61905 13.6628 3.49105 11.173 3.49016ZM3.17301 11.4902H9.83968V7.49016H3.17301V11.4902ZM17.173 14.1568H3.17301H19.173H17.173ZM12.5063 11.4902H19.173V7.49016H12.5063V11.4902ZM6.50635 19.4902C7.08413 19.4902 7.5619 19.3013 7.93968 18.9235C8.31746 18.5457 8.50635 18.0679 8.50635 17.4902C8.50635 16.9124 8.31746 16.4346 7.93968 16.0568C7.5619 15.6791 7.08413 15.4902 6.50635 15.4902C5.92857 15.4902 5.45079 15.6791 5.07301 16.0568C4.69524 16.4346 4.50635 16.9124 4.50635 17.4902C4.50635 18.0679 4.69524 18.5457 5.07301 18.9235C5.45079 19.3013 5.92857 19.4902 6.50635 19.4902ZM15.8397 19.4902C16.4175 19.4902 16.8952 19.3013 17.273 18.9235C17.6508 18.5457 17.8397 18.0679 17.8397 17.4902C17.8397 16.9124 17.6508 16.4346 17.273 16.0568C16.8952 15.6791 16.4175 15.4902 15.8397 15.4902C15.2619 15.4902 14.7841 15.6791 14.4063 16.0568C14.0286 16.4346 13.8397 16.9124 13.8397 17.4902C13.8397 18.0679 14.0286 18.5457 14.4063 18.9235C14.7841 19.3013 15.2619 19.4902 15.8397 19.4902ZM5.17301 20.8235H17.173C17.7508 20.8235 18.2286 20.6346 18.6063 20.2568C18.9841 19.8791 19.173 19.4013 19.173 18.8235V14.1568H3.17301V18.8235C3.17301 19.4013 3.3619 19.8791 3.73968 20.2568C4.11746 20.6346 4.59524 20.8235 5.17301 20.8235ZM11.173 4.8235H18.7063H3.77301H11.173Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium my-4 flex items-center">
                  {item.category}
                </h2>
                {item.routes.map((route, index) => (
                  <Link key={index} to="#">
                    <div className="py-2 text-base text-slate-500 leading-6 font-normal hover:text-[#152B69] hover:underline underline-offset-2 cursor-pointer transition-all duration-700">
                      {" "}
                      <span
                        className={`bg-black w-[5px] h-[5px] rounded-full mr-3 cursor-pointer inline-block`}
                      ></span>{" "}
                      {route}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </>
        )}
        {isMobile && (
          <Slider {...settings}>
            {trainDetails.map((item) => (
              <div
                key={item.id}
                className="flex flex-col mx-10 px-12 py-8 bg-white rounded-2xl sm:w-[27%]"
              >
                <div className="flex items-center justify-center bg-[#FFC14B] rounded-full w-14 h-14">
                  <svg
                    width="22"
                    height="27"
                    viewBox="0 0 22 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.506349 18.8235V6.15683C0.506349 4.97905 0.812127 4.03994 1.42368 3.3395C2.03524 2.63905 2.84057 2.10572 3.83968 1.7395C4.83968 1.37327 5.97879 1.12883 7.25701 1.00616C8.53524 0.883496 9.84057 0.822607 11.173 0.823496C12.6397 0.823496 14.0232 0.884829 15.3237 1.0075C16.6241 1.13016 17.7575 1.37461 18.7237 1.74083C19.6899 2.10705 20.4508 2.64039 21.0063 3.34083C21.5619 4.04127 21.8397 4.97994 21.8397 6.15683V18.8235C21.8397 20.1346 21.3899 21.2404 20.4903 22.1408C19.5908 23.0413 18.485 23.4911 17.173 23.4902L19.173 25.4902V26.1568H16.5063L13.8397 23.4902H8.50635L5.83968 26.1568H3.17301V25.4902L5.17301 23.4902C3.8619 23.4902 2.75613 23.0404 1.85568 22.1408C0.955238 21.2413 0.50546 20.1355 0.506349 18.8235ZM11.173 3.49016C8.81746 3.49016 7.09524 3.62927 6.00635 3.9075C4.91746 4.18572 4.17301 4.49105 3.77301 4.8235H18.7063C18.373 4.44572 17.6566 4.12927 16.557 3.87416C15.4575 3.61905 13.6628 3.49105 11.173 3.49016ZM3.17301 11.4902H9.83968V7.49016H3.17301V11.4902ZM17.173 14.1568H3.17301H19.173H17.173ZM12.5063 11.4902H19.173V7.49016H12.5063V11.4902ZM6.50635 19.4902C7.08413 19.4902 7.5619 19.3013 7.93968 18.9235C8.31746 18.5457 8.50635 18.0679 8.50635 17.4902C8.50635 16.9124 8.31746 16.4346 7.93968 16.0568C7.5619 15.6791 7.08413 15.4902 6.50635 15.4902C5.92857 15.4902 5.45079 15.6791 5.07301 16.0568C4.69524 16.4346 4.50635 16.9124 4.50635 17.4902C4.50635 18.0679 4.69524 18.5457 5.07301 18.9235C5.45079 19.3013 5.92857 19.4902 6.50635 19.4902ZM15.8397 19.4902C16.4175 19.4902 16.8952 19.3013 17.273 18.9235C17.6508 18.5457 17.8397 18.0679 17.8397 17.4902C17.8397 16.9124 17.6508 16.4346 17.273 16.0568C16.8952 15.6791 16.4175 15.4902 15.8397 15.4902C15.2619 15.4902 14.7841 15.6791 14.4063 16.0568C14.0286 16.4346 13.8397 16.9124 13.8397 17.4902C13.8397 18.0679 14.0286 18.5457 14.4063 18.9235C14.7841 19.3013 15.2619 19.4902 15.8397 19.4902ZM5.17301 20.8235H17.173C17.7508 20.8235 18.2286 20.6346 18.6063 20.2568C18.9841 19.8791 19.173 19.4013 19.173 18.8235V14.1568H3.17301V18.8235C3.17301 19.4013 3.3619 19.8791 3.73968 20.2568C4.11746 20.6346 4.59524 20.8235 5.17301 20.8235ZM11.173 4.8235H18.7063H3.77301H11.173Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-medium my-4 flex items-center">
                  {item.category}
                </h2>
                {item.routes.map((route, index) => (
                  <Link key={index} to="#">
                    <div className="py-2 text-base text-slate-500 leading-6 font-normal hover:text-[#152B69] hover:underline underline-offset-2 cursor-pointer transition-all duration-700">
                      {" "}
                      <span
                        className={`bg-black w-[5px] h-[5px] rounded-full mr-3 cursor-pointer inline-block`}
                      ></span>{" "}
                      {route}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default MoreIdeas;
