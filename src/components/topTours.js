import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const TopTours = ({isMobile}) => {
  const topTours = [
    {
      id: 1,
      imgUrl: "/assets/images/toptours1.png",
      title: "Harry Potter Warner Bros Studio Tour",
      duration: "7 hours",
      starRate: "4.5",
      ratings: "1.6K",
    },
    {
      id: 2,
      imgUrl: "/assets/images/toptours2.png",
      title: "Harry Potter Warner Bros Studio Tour",
      duration: "6 hours",
      starRate: "4.5",
      ratings: "1.8K",
    },
    {
      id: 3,
      imgUrl: "/assets/images/toptours3.png",
      title: "Harry Potter Warner Bros Studio Tour",
      duration: "8 hours",
      starRate: "4.5",
      ratings: "1.2K",
    },
    {
      id: 4,
      imgUrl: "/assets/images/toptours4.png",
      title: "Harry Potter Warner Bros Studio Tour",
      duration: "10 hours",
      starRate: "4.5",
      ratings: "1.8K",
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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };
  return (
    <section className="p-4 sm:p-8 topTours">
      <div className="flex flex-col items-center justify-center mx-auto pt-4 sm:p-0">
        <h3 className="font-volkhov text-left sm:text-center text-3xl sm:text-5xl font-medium text-[#152B69] ">
          Top London Tours and <span className="font-bold">Attractions</span>
        </h3>
      </div>
      <div className="flex items-center justify-center py-6 mx-auto ">
        {!isMobile && (
          <>
            {topTours.map((item, index) => (
              <Link key={item.id} to="/">
                <div
                  className={`flex flex-col relative topToursCard p-6 rounded-3xl ${
                    index % 2 !== 0 ? "relative top-3" : "m-4"
                  }`}
                >
                  <img src={item.imgUrl} alt="top-tours" />
                  <div className="flex items-center text-sm absolute top-[58%] left-8 bg-white px-2 py-1 rounded-full">
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96094 0.93335L8.53254 5.77023H13.6183L9.50384 8.75959L11.0754 13.5965L6.96094 10.6071L2.84644 13.5965L4.41804 8.75959L0.303542 5.77023H5.38934L6.96094 0.93335Z"
                          fill="#FFC14B"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 font-medium">{item.starRate}</span>
                    <span className="ml-2 text-slate-500">
                      ({item.ratings})
                    </span>
                  </div>
                  <div className="flex flex-col pr-6">
                    <p className=" text-base font-medium py-2 mr-8">
                      {item.title}
                    </p>
                    <div className="flex items-center">
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8452 3.93066C7.87646 3.93066 3.84521 7.96191 3.84521 12.9307C3.84521 17.8994 7.87646 21.9307 12.8452 21.9307C17.814 21.9307 21.8452 17.8994 21.8452 12.9307C21.8452 7.96191 17.814 3.93066 12.8452 3.93066Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M12.8452 6.93066V13.6807H17.3452"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className=" text-sm pl-2 text-slate-500">
                        Duration : {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </>
        )}
        {isMobile && (
          <Slider {...settings}>
            {topTours.map((item, index) => (
              <Link key={item.id} to="/">
                <div
                  className={`flex flex-col relative topToursCard p-6 rounded-3xl ${
                    index % 2 !== 0 ? "relative top-3" : ""
                  }`}
                >
                  <img src={item.imgUrl} alt="top-tours" />
                  <div className="flex items-center text-sm absolute top-[58%] left-8 bg-white px-2 py-1 rounded-full">
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.96094 0.93335L8.53254 5.77023H13.6183L9.50384 8.75959L11.0754 13.5965L6.96094 10.6071L2.84644 13.5965L4.41804 8.75959L0.303542 5.77023H5.38934L6.96094 0.93335Z"
                          fill="#FFC14B"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 font-medium">{item.starRate}</span>
                    <span className="ml-2 text-slate-500">
                      ({item.ratings})
                    </span>
                  </div>
                  <div className="flex flex-col pr-6">
                    <p className=" text-base font-medium py-2 mr-8">
                      {item.title}
                    </p>
                    <div className="flex items-center">
                      <span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.8452 3.93066C7.87646 3.93066 3.84521 7.96191 3.84521 12.9307C3.84521 17.8994 7.87646 21.9307 12.8452 21.9307C17.814 21.9307 21.8452 17.8994 21.8452 12.9307C21.8452 7.96191 17.814 3.93066 12.8452 3.93066Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M12.8452 6.93066V13.6807H17.3452"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className=" text-sm pl-2 text-slate-500">
                        Duration : {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default TopTours;
