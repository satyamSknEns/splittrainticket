import React, { useState } from "react";

const MostVisited = () => {
  const [selectedCity, setSelectedCity] = useState("London");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const mostVisitedList = [
    {
      id: 1,
      img: "/assets/images/journey1.png",
      desc: "Popular train journeys to London",
      city: "London",
    },
    {
      id: 2,
      img: "/assets/images/mostvisited1.png",
      desc: "Popular train journeys to London",
      city: "London",
    },
    {
      id: 3,
      img: "/assets/images/mostvisited2.png",
      desc: "Popular train journeys to London",
      city: "London",
    },
    {
      id: 4,
      img: "/assets/images/destination1.png",
      desc: "Popular train journeys to Italy",
      city: "Italy",
    },
    {
      id: 5,
      img: "/assets/images/journey3.png",
      desc: "Popular train journeys to Italy",
      city: "Italy",
    },
    {
      id: 6,
      img: "/assets/images/journey2.png",
      desc: "Popular train journeys to Italy",
      city: "Italy",
    },
    {
      id: 7,
      img: "/assets/images/destination2.png",
      desc: "Popular train journeys to Paris",
      city: "Paris",
    },
    {
      id: 8,
      img: "/assets/images/destination3.png",
      desc: "Popular train journeys to Paris",
      city: "Paris",
    },
    {
      id: 9,
      img: "/assets/images/from-to-route.png",
      desc: "Popular train journeys to Paris",
      city: "Paris",
    },
  ];
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownVisible(false);
  };

  return (
    <section className="p-8 pt-0">
      <div className="flex items-center justify-between mx-auto p-8">
        <h3 className="text-center text-5xl font-medium text-[#152B69] ">
          Most visited place...
        </h3>
        <div
          className="flex items-start justify-between text-[#152B69] border-2 p-2 px-4 cursor-pointer rounded-xl relative w-[200px]"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <span className="text-2xl font-medium mr-2">{selectedCity}</span>
          <span className="dropdown relative before:top-[14px] before:-right-4 mr-3"></span>
          {dropdownVisible && (
            <div className="absolute mt-2 bg-white border rounded shadow-md w-full left-0 top-10">
              {["London", "Italy", "Paris"].map((city) => (
                <div
                  key={city}
                  className="p-2 px-4 text-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center px-8">
        {mostVisitedList
          .filter((item) => item.city === selectedCity)
          .slice(0, 3)
          .map((item) => (
            <div className="flex flex-col items-start justify-center mx-4">
              <div className="flex">
                <img src={item.img} alt="most visited place" />
              </div>
              <div className=" text-2xl text-[#3D3D3D] bg-white font-bold p-6 pl-2">
                {item.desc}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MostVisited;
