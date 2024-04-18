import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      img: "/assets/images/destination1.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "Split ticket from",
      fare: "£38.30",
      savings: "$25.41 saving (44%)",
    },
    {
      id: 2,
      img: "/assets/images/destination2.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "Split ticket from",
      fare: "£30.30",
      savings: "$30.31 saving (48%)",
    },
    {
      id: 3,
      img: "/assets/images/destination3.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "Split ticket from",
      fare: "£48.30",
      savings: "$18.21 saving (38%)",
    },
    {
      id: 4,
      img: "/assets/images/from-to-route.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "Split ticket from",
      fare: "£58.30",
      savings: "$10.41 saving (25%)",
    },
    {
      id: 5,
      img: "/assets/images/from-to-route1.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "Split ticket from",
      fare: "£68.30",
      savings: "$8.41 saving (15%)",
    },
  ];

  const CustomArrow = ({ onClick, direction }) => (
    <div className={`${direction}-btn`} onClick={onClick}>
      {direction === "prev" ? (
        <div
          className={`absolute -top-16 left-[59%] sm:left-auto sm:right-20 sm:-top-16 z-10 w-10 sm:w-12 h-10 sm:h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:bg-[#152B69] hover:text-white`}
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
          className={`absolute -top-16 right-[32.5%] sm:right-5 sm:-top-16 z-10 w-10 sm:w-12 h-10 sm:h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:text-white hover:bg-[#152B69]`}
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
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <section className="flex flex-col items-center mx-auto my-6 p-8 h-[600px] popularDestination">
      <h3 className="font-volkhov text-3xl sm:text-5xl font-[400] leading-15 tracking-normal text-left w-full sm:pl-10 text-[#152B69]">
        Popular <span className="font-bold">Destinations</span>
      </h3>
      <div className="flex items-center p-5">
        <Slider {...settings}>
          {destinations.map((item, index) => (
            <div
              key={item.id}
              className="relative z-30 m-5 slick-slide h-[500px]"
            >
              <img
                src={item.img}
                alt="destination"
                className="relative z-20 w-full"
              />
              <div className="flex items-center justify-between top absolute -bottom-32 w-full max-h-[300px] h-[160px] bg-white py-10 pb-2 px-8 rounded-br-3xl rounded-bl-3xl z-10 cardShadow">
                <div className="flex text-left justify-between font-normal leading-5 tracking-normal">
                  <div className="max-h-[100px] flex items-center justify-center">
                    <img src="/assets/images/route1.png" alt="route" />
                  </div>
                  <div className="max-h-[100px]">
                    <div className="text-lg flex items-center pb-2 mx-2 border-b-2 border-gray-200">
                      {item.from}
                    </div>
                    <div className="text-lg flex items-center pt-1 mx-2">
                      {item.to}
                    </div>
                  </div>
                </div>
                <div className="text-left font-normal leading-5 tracking-normal max-h-[100px]">
                  <p className="text-base">{item.text}</p>
                  <p className="text-3xl font-semibold text-[#152B69]">
                    {item.fare}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularDestinations;
