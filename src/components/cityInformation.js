import React, { useState } from "react";

const CityInformation = ({ isMobile }) => {
  const cityInfo = [
    {
      id: 1,
      cityName: "London",
      cityImg: [
        "/assets/images/city-info.png",
        "/assets/images/city-info1.png",
        "/assets/images/city-info2.png",
      ],
      desc: [
        "Typically you can expect the train to stop in Peterborough, York, Durham, and Newcastle on the way; with all of these worth visiting if you wish to stop en route, York is particularly worth a visit with its National Railway Museum. If you want to reach Edinburgh particularly quickly, take a Lumo train that only stops twice before reaching Edinburgh. Once you reach Newcastle, your route will hug the coast to Edinburgh; it's worth sitting on the right side of the train to see it.",

        "When you travel between London and Edinburgh on the East Coast route, you will typically start your journey from London King's Cross Station, famous for its Platform 9 ¾. Indeed you can take a picture next to the platform sign, and there is a shop with plenty of Harry Potter souvenirs. Trains from London Kings Cross to Edinburgh usually are high-speed, with no changes and minimal stops.",
      ],
    },
    {
      id: 2,
      cityName: "Edinburgh",
      cityImg: [
        "/assets/images/city-info.png",
        "/assets/images/city-info1.png",
        "/assets/images/city-info2.png",
      ],
      desc: [
        "When you travel between London and Edinburgh on the East Coast route, you will typically start your journey from London King's Cross Station, famous for its Platform 9 ¾. Indeed you can take a picture next to the platform sign, and there is a shop with plenty of Harry Potter souvenirs. Trains from London Kings Cross to Edinburgh usually are high-speed, with no changes and minimal stops.",

        "Typically you can expect the train to stop in Peterborough, York, Durham, and Newcastle on the way; with all of these worth visiting if you wish to stop en route, York is particularly worth a visit with its National Railway Museum. If you want to reach Edinburgh particularly quickly, take a Lumo train that only stops twice before reaching Edinburgh. Once you reach Newcastle, your route will hug the coast to Edinburgh; it's worth sitting on the right side of the train to see it.",
      ],
    },
  ];
  const [selectedCity, setSelectedCity] = useState(cityInfo[1]);
  const handleClick = (city) => {
    setSelectedCity(city);
  };
  return (
    <section className="p-4 sm:p-8">
      <h3 className="font-volkhov text-5xl font-medium leading-59 tracking-tight text-center mb-4 text-[#152B69] py-4">
        City <span className="font-bold">Information</span>
      </h3>
      <div
        className={`flex items-center justify-center sm:justify-start mx-auto sm:w-[25%] p-4 relative z-20 bg-[#EBF9FF] rounded-full py-2 px-6`}
      >
        <span
          className={`city-${selectedCity.id} ${
            selectedCity.id === 1 ? "ml-2" : ""
          } ${isMobile ? 'mobileSlideCity' : 'slideCity'} mx-3`}
        ></span>
        {cityInfo.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`relative z-20 font-medium text-lg cursor-pointer px-6 py-1 mx-3 rounded-full transition-all duration-700 ease-in-out`}
          >
            {item.cityName}
          </div>
        ))}
      </div>
      {cityInfo.map(
        (item) =>
          item.cityName === selectedCity.cityName && (
            <div className="flex sm:flex-row flex-col" key={item.id}>
              <div className="flex items-center justify-center sm:w-1/2 p-4 sm:p-8">
                <div className="relative">
                  <img
                    src={item.cityImg[0]}
                    alt="goexplore"
                    className="relative z-20"
                  />
                  <img
                    src={item.cityImg[1]}
                    alt="goexplore"
                    className="absolute -left-10 top-7 z-20"
                  />
                  <img
                    src={item.cityImg[2]}
                    alt="goexplore"
                    className="absolute -right-10 -bottom-14 z-20"
                  />
                </div>
              </div>
              <div className="flex items-start flex-col sm:w-1/2 p-4 sm:p-8 sm:px-10">
                <h2 className="text-3xl font-medium leading-59 tracking-0 text-left text-[#152B69]">
                  {item.cityName}
                </h2>
                {item.desc.map((text, index) => (
                  <p
                    key={index}
                    className="text-base font-normal leading-7 tracking-normal text-left mt-5"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default CityInformation;
