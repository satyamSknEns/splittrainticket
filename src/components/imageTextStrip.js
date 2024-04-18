import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImageTextStrip = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardDetails = [
    {
      id: 1,
      img: "/assets/images/group.png",
      desc: "Compare cheap prices for train and bus tickets.",
    },
    {
      id: 2,
      img: "/assets/images/group.png",
      desc: "Compare cheap prices for train and bus tickets.",
    },
    {
      id: 3,
      img: "/assets/images/group.png",
      desc: "Compare cheap prices for train and bus tickets.",
    },
    {
      id: 4,
      img: "/assets/images/group.png",
      desc: "Compare cheap prices for train and bus tickets.",
    },
  ];

  const CustomArrow = ({ onClick, direction }) => (
    <div className={`${direction}-btn absolute`} onClick={onClick}>
      {direction === "prev" ? (
        <div
          className={`w-12 h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:bg-[#152B69] hover:text-white`}
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
          className={`w-12 h-12 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 border-[#152B69] hover:text-white hover:bg-[#152B69]`}
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
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <section
      className={`flex items-center justify-center my-5 p-4 px-10 w-[80%] mx-auto rounded-full ${
        !isMobile ? "bg-[#FCF5E9]" : ""
      } relative imageTextStrip`}
    >
      {!isMobile && (
        <>
          {cardDetails.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center flex-col justify-center ${
                index !== cardDetails.length - 1 ? "border-r" : ""
              }`}
            >
              <img src={item.img} alt="card-img" />
              <p className="text-center text-base font-medium leading-6 tracking-normal p-4">
                {item.desc}
              </p>
            </div>
          ))}
        </>
      )}
      {isMobile && (
        <Slider {...settings} className="sm:hidden">
          {cardDetails.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center flex-col justify-center mx-auto bg-[#FCF5E9] p-4 rounded-full ${
                index !== cardDetails.length - 1 ? "border-r" : ""
              }`}
            >
              <img src={item.img} alt="card-img" className=" w-12 h-12 mx-auto" />
              <p className="w-[60%] sm:w-full mx-auto text-center text-base font-medium leading-6 tracking-normal p-4">
                {item.desc}
              </p>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default ImageTextStrip;
