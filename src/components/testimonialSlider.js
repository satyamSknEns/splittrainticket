import React, { useState } from "react";
import { Link } from "react-router-dom";
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id:1,
      text:
        "Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.",
      profileName: "Michel John",
      location: "Delhi, India",
      rating: 5,
    },
    {
      id:2,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore fuga deserunt corrupti possimus deleniti dolorem sapiente optio odit reiciendis id, qui iusto ex voluptatem dignissimos!",
      profileName: "Jhon cloe",
      location: "Noida, India",
      rating: 4,
    },
    {
      id:3,
      text:
        "Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.",
      profileName: "Nick John",
      location: "Delhi NCR, India",
      rating: 5,
    },
    {
      id:4,
      text:
        "Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.",
      profileName: "Andrew Sharma",
      location: "Delhi NCR, India",
      rating: 3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
  };
  return (
    <section className="flex sm:flex-row flex-col items-center justify-between p-4 my-4 sm:p-8 sm:my-8 overflow-hidden">
      <div className="flex flex-col items-center sm:items-start w-full sm:w-[35%] p-4 sm:p-16 sm:pr-5">
        <h3 className="font-volkhov text-3xl sm:text-5xl font-medium leading-15 tracking-normal text-center sm:text-left w-full sm:pr-10 text-[#152B69]">
          What people say <span className="font-bold">about Us.</span>
        </h3>
        <div className="flex items-center justify-between py-2 sm:py-5 my-2 sm:my-5">
        {slides.map((item,index) => (
          <div key={item.id} className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-700 ${index === currentSlide ? 'bg-[#152B69]' : 'bg-gray-300'} ${index === 0 ? 'ml-5 sm:ml-0' : ''} rounded-full mr-5 cursor-pointer`} onClick={() => setCurrentSlide(index)}></div>
        ))}
        </div>
        <Link
          to="/pages/routes"
          className="text-base bg-[#FFCD6B] font-medium leading-5 tracking-normal text-left rounded-full p-4 px-8 my-2 sm:my-4 cursor-pointer"
        >
          More Review
        </Link>
      </div>
      <div className={`w-full sm:w-[52%] pr-6 m-8 sm:m-0  ${currentSlide === slides.length - 1 ? 'transition-all duration-75 border-0 h-[320px]' : 'translate-y-5 translate-x-2 border-r-2 border-b-2 rounded-3xl transition-all duration-500 h-[360px]'}`}>
        <div className="flex items-center justify-center relative h-[320px]">
          {slides.map((item,index) => (
            <div
              key={item.id}
              className={`flex flex-col p-6 py-8 sm:p-10 rounded-3xl absolute ${
                index === currentSlide ? "z-20" : "z-10 opacity-0"
              } transition-all duration-700 ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-[1000px] -translate-y-80"
                  : "translate-x-50"
              } mb-2 ${currentSlide === slides.length - 1 ? 'border-gray-400 border' : 'cardBoxShadow'}`}
            >
              <div className="text-xl sm:text-2xl font-medium leading-38 tracking-0 text-left py-6">
                {item.text}
              </div>
              <div className="flex items-center justify-between pt-8">
                <div className="flex">
                  <img src="assets/images/profile.png" alt="profile" />
                  <div className="px-4">
                    <h2 className="text-xl font-semibold">
                      {item.profileName}
                    </h2>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
                <div className="rating">
                  <div className="flex items-center justify-center">
                    {Array.from({ length: item.rating }, (_, index) => (
                      <img key={index} src="assets/images/star.png" alt="rating" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-[7%] flex items-center sm:flex-col justify-end sm:justify-center relative">
        <div
          className={`order-last sm:order-none w-10 h-10 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 ${currentSlide === slides.length - 1 ? 'border-gray-500':'border-[#152B69] hover:text-white hover:bg-[#152B69]'}`}
          onClick={currentSlide === slides.length - 1 ? null : nextSlide}
        >
          <svg
            className={`w-5 h-5 transition-transform -rotate-90`}
            fill="none"
            stroke={`${currentSlide === slides.length - 1 ? 'gray' : 'currentColor'}`}
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
        <div
          className={`order-first sm:order-none w-10 h-10 border transition-all flex items-center justify-center rounded-full cursor-pointer m-1 ${currentSlide === 0 ? 'border-gray-400': 'border-[#152B69] hover:bg-[#152B69] hover:text-white'}`}
          onClick={currentSlide === 0 ? null : prevSlide}
        >
          <svg
            className={`w-5 h-5 transition-transform rotate-90`}
            fill="none"
            stroke={`${currentSlide === 0 ? 'gray' : 'currentColor'}`}
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
      </div>
    </section>
  );
};

export default TestimonialSlider;
