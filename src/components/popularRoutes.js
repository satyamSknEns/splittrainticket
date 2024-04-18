import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PopularRoutes = () => {
  const destinations = [
    {
      id: 1,
      img: "assets/images/routes1.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "London to Edinburgh Train",
    },
    {
      id: 2,
      img: "assets/images/routes2.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "London to Edinburgh Train",
    },
    {
      id: 3,
      img: "assets/images/routes3.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "London to Edinburgh Train",
    },
    {
      id: 4,
      img: "assets/images/routes4.png",
      from: "Rome, Italty",
      to: "Birmingham",
      text: "London to Edinburgh Train",
    },
  ];

  const CustomArrow = ({ onClick, direction }) => (
    <div className={`${direction}-btn`} onClick={onClick}>
      {direction === "prev" ? (
        <div
          className={`absolute -top-20 left-[26%] sm:left-auto sm:right-20 sm:-top-16 z-10 w-10 sm:w-12 h-10 sm:h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:bg-[#152B69] hover:text-white`}
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
          className={`absolute -top-20 right-[66%] sm:right-5 sm:-top-16 z-10 w-10 sm:w-12 h-10 sm:h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:bg-[#152B69] hover:text-white`}
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
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <section className="relative py-8 overflow-hidden popularRoutes h-[600px]">
      <div className="mx-auto w-[1240px]">
        <Slider {...settings} className="z-50 top-20">
          {destinations.map((item, index) => (
            <div
              key={item.id}
              className={`cards relative z-30 m-5 max-h-80 bg-white flex flex-col p-3 rounded-3xl ${
                index === 1
                  ? "top-24 rotate-2"
                  : index === 2
                  ? "top-2 -rotate-3"
                  : index === 3
                  ? "top-20 rotate-2 p-5"
                  : "top-0 rotate-2"
              }`}
            >
              <img
                src={item.img}
                alt="destination"
                className={`relative z-20 ${
                  index === 1
                    ? "-rotate-[3.8deg]"
                    : index === 2
                    ? "rotate-[5deg]"
                    : index === 3
                    ? "-rotate-0"
                    : "-rotate-3"
                }`}
              />
              <div
                className={`flex items-center text-left font-normal leading-5 tracking-normal py-4 max-h-[100px] ${
                  index === 1
                    ? "-rotate-3"
                    : index === 2
                    ? "-rotate-2 pl-1"
                    : index === 3
                    ? "-rotate-3"
                    : "-rotate-2"
                }`}
              >
                <img
                  src="/assets/images/train-icon.png"
                  alt="train-icon"
                  width={50}
                  height={50}
                />
                <p className="flex items-center justify-center text-base font-medium px-5 pr-12 rotate-2 mt-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full flex flex-col items-center justify-center mx-auto max-h-[750px] h-[640px] bg-[#FFF8EC] absolute top-0">
        <div className="flex absolute">
          <img
            src="/assets/images/layered-circle.png"
            alt="backgound"
            width={550}
            height={550}
          />
        </div>
        <div className="absolute left-0 bottom-[46%] z-30">
          <img src="/assets/images/train-icon1.png" alt="icon" />
        </div>
        <div className="flex absolute z-10 top-[30%] left-8">
          <img src="/assets/images/indicate.png" alt="indicate" />
        </div>
        <div className="flex absolute z-20 mt-3 top-[30%] left-8">
          <img src="/assets/images/indicate1.png" alt="indicate" />
        </div>
        <h3 className="font-volkhov text-3xl sm:text-5xl font-[400] leading-15 tracking-normal text-left w-full pl-10 text-[#152B69] -mt-10 mb-4 absolute top-20">
          Popular <span className="font-bold">Routes</span>
        </h3>
      </div>
    </section>
  );
};

export default PopularRoutes;
