import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SearchDetails = () => {
  const listWithDates = [
    {
      id:1,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:2,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:3,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:4,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:5,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:6,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:7,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:8,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:9,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:10,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:11,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:12,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:13,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:14,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:15,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:16,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:17,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
    {
      id:18,
      date: "Mon, 19 Feb",
      cost: "$79.02",
    },
  ];
  const [selectedMode, setSelectedMode] = useState("Train");
  const CustomArrow = ({ onClick, direction }) => (
    <div
      className={`${direction}-btn absolute z-20 p-2 cursor-pointer`}
      onClick={onClick}
    >
      {direction === "prev" ? (
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
      ) : (
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
      )}
    </div>
  );
  const settings = {
    speed: 1000,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };
  return (
    <section className="p-8 flex items-center justify-center mx-auto relative bg-white searchDetails w-full h-[250px]">
      <div className="absolute w-[85%] bottom-10 rounded-2xl searchTabShadow">
        <div className="flex items-center justify-between bg-[#FCF5E9] py-6 px-8 rounded-tl-2xl rounded-tr-2xl">
          <div className="flex text-lg">
            <div className="p">
              You searched for:{" "}
              <span className="text-[#152B69] font-medium">London</span> to
              <span className="text-[#152B69] font-medium"> Leads</span>
            </div>
            <div className="p">
              <span className="px-4 border-r border-slate-800">
                Single Journey
              </span>{" "}
              <span className="px-4 border-r border-slate-800">1 Adult</span>
            </div>
            <div className="text-[#152B69] font-medium px-4 cursor-pointer">
              Add a railcard
            </div>
          </div>
          <div className="bg-[#FFCD6B] py-[6px] px-4 text-[#152B69] font-medium rounded-full cursor-pointer">
            Modifications
          </div>
        </div>
        <div className="flex items-center justify-between px-8 py-6 bg-white">
          <div className="flex">
            <div className="flex items-center justify-start cursor-pointer w-[150px]" onClick={() => setSelectedMode("Train")}>
              <span className=" w-5 h-5 border border-blue-900 rounded-full flex items-center justify-center">
                <span className={`inline-block w-4 h-4 ${selectedMode === 'Train' ? 'bg-blue-900' : 'bg-[#F1F0F0]'} rounded-full`}></span>
              </span>
              <span className={`mx-2 text-lg ${selectedMode === 'Train' ? 'font-semibold' : ''}`}>Train</span>
            </div>
            <div className="flex items-center justify-start cursor-pointer w-[150px]" onClick={() => setSelectedMode("Bus")}>
              <span className=" w-5 h-5 border border-blue-900 rounded-full flex items-center justify-center">
                <span className={`inline-block w-4 h-4 ${selectedMode === 'Bus' ? 'bg-blue-900' : 'bg-[#F1F0F0]'} rounded-full`}></span>
              </span>
              <span className={`mx-2 text-lg ${selectedMode === 'Bus' ? 'font-semibold' : ''}`}>Bus</span>
            </div>
            <div className="flex items-center justify-start cursor-pointer w-[150px]" onClick={() => setSelectedMode("Split save")}>
              <span className=" w-5 h-5 border border-blue-900 rounded-full flex items-center justify-center">
                <span className={`inline-block w-4 h-4 ${selectedMode === 'Split save' ? 'bg-blue-900' : 'bg-[#F1F0F0]'} rounded-full`}></span>
              </span>
              <span className={`mx-2 text-lg ${selectedMode === 'Split save' ? 'font-semibold' : ''}`}>Split save</span>
            </div>
          </div>
          <div className="flex relative">
            <p className="mr-3 text-[#152B69] text-lg font-semibold">
              Other days from $48.10
            </p>
            <span className="dropdown"></span>
          </div>
        </div>
        <div className="flex items-center justify-center pb-12">
          <Slider {...settings}>
            {listWithDates.map((item, index) => (
              <div key={item.id} className="flex items-center flex-col bg-[#F1F0F0] p-4 rounded-2xl max-w-[150px] mx-4">
                <p>{item.date}</p>
                <p>
                  From{" "}
                  <span className="text-lg font-bold">{item.cost}</span>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SearchDetails;
