import React from "react";

const BookTrip = () => {
  const chooseDestination = [
    {
      id: 1,
      iconUrl: "/assets/images/choose-dest1.png",
      title: "Choose Destination",
      text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",
    },
    {
      id: 2,
      iconUrl: "/assets/images/choose-dest2.png",
      title: "Choose Destination",
      text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",
    },
    {
      id: 3,
      iconUrl: "/assets/images/choose-dest3.png",
      title: "Choose Destination",
      text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.",
    },
  ];
  const percentage = 40;

  return (
      <section className="flex sm:flex-row flex-col items-center justify-center p-4 sm:px-8 sm:p-0 bg-[#EBF9FF]">
        <div className="flex flex-col items-start justify-start w-full mt-4 sm:m-0 sm:w-1/2 sm:px-16">
          <h2 className="font-volkhov text-3xl sm:text-4xl font-normal sm:leading-normal tracking-tight text-center sm:text-left text-[#152B69]">
            Lorem ipsum is placeholder text{" "}
            <span className="font-semibold">commonly</span>
          </h2>
          <div className="text-lg font-normal leading-7 tracking-normal text-justify sm:mr-16">
            {chooseDestination.map((item) => (
              <div
                className="flex my-6 items-center justify-center"
                key={item.id}
              >
                <div className="flex items-center justify-center bg-[#FFC14B] p-4 w-[78px] h-[64px] rounded-2xl">
                  <img src={item.iconUrl} alt="icon" className="w-full" />
                </div>
                <div className="mx-4">
                  <h3 className=" text-lg font-semibold text-[#152B69]">
                    {item.title}
                  </h3>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center w-full sm:w-1/2 rounded-3xl relative">
          <div className="flex flex-col justify-center m-8 sm:m-20 p-5 sm:p-10 pb-6 bg-white rounded-3xl relative">
            <img src="/assets/images/booktrip.png" alt="book-trip" />
            <div className="flex flex-col py-3">
              <h3 className="text-left text-lg font-medium">Trip To London</h3>
              <p className="py-2 text-base text-slate-400 font-medium">
                14-29 June
              </p>
              <div className="flex py-3">
                <div className="p-2 bg-slate-200 mr-2 rounded-full">
                  <img src="/assets/images/booktrip-leaf.png" alt="icon" />
                </div>
                <div className="p-2 bg-slate-200 mr-2 rounded-full">
                  <img src="/assets/images/booktrip-map.png" alt="icon" />
                </div>
                <div className="p-2 bg-slate-200 mr-2 rounded-full">
                  <img src="/assets/images/booktrip-send.png" alt="icon" />
                </div>
              </div>
              <div className="flex items-center py-3">
                <img src="/assets/images/booktrip-building.png" alt="" />{" "}
                <span className="text-base text-[#353348] font-medium inline-block ml-2">
                  2.5K people going
                </span>
              </div>
            </div>
            <div className="absolute -right-10 flex rounded-2xl bg-white p-4">
              <div className="mr-4">
                <img src="/assets/images/booktrip-ongoing.png" alt="ongoing" />
              </div>
              <div className="content">
                <p className="text-[#84829A] text-base font-normal">Ongoing</p>
                <p className=" text-xl font-medium">Trip to rome</p>
                <div className="flex flex-col">
                  <p className="text-baae">
                    <span>{percentage}%</span>{" "}
                    <span className="text-base font-medium">completed</span>
                  </p>
                  <div className="flex h-2 mb-4 overflow-hidden text-xs bg-slate-200 rounded-3xl my-1">
                    <div
                      style={{ width: `${percentage}%` }}
                      className="flex flex-col justify-center text-center text-white bg-[#8A79DF] shadow-none whitespace-nowrap"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BookTrip;
