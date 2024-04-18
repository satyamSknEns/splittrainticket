import React, { useState } from "react";

const SearchList = () => {
  const searchList = [
    {
      id: 1,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "12:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "13:55",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "1h 45m",
      leftQty: "Only 5 left",
      platform: "3B estimated",
      updatedTime: "9h 12m",
      chnages: "4 changes",
      savings: "$82.70",
    },
    {
      id: 2,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "13:05",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "15:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 10m",
      leftQty: "Only 4 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "2 changes",
      savings: "$72.70",
    },
    {
      id: 3,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "15:00",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "17:05",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "2 changes",
      savings: "$62.70",
    },
    {
      id: 4,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "15:30",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "17:45",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 15m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "4 changes",
      savings: "$52.70",
    },
    {
      id: 5,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
    {
      id: 6,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
    {
      id: 7,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
    {
      id: 8,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
    {
      id: 9,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
    {
      id: 10,
      from: "Prague",
      fromDate: "Fri, 17 May 2022",
      fromTime: "18:10",
      to: "Madrid-Barajas",
      toDate: "Fri, 17 May 2022",
      toTime: "20:15",
      cost1: "$129.32",
      cost2: "$341.32",
      totalTime: "2h 5m",
      leftQty: "Only 2 left",
      platform: "5B estimated",
      updatedTime: "9h 12m",
      chnages: "5 changes",
      savings: "$92.70",
    },
  ];
  const [selectedTrains, setSelectedTrains] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const handleChange = (id) => {
    setSelectedTrains((prevSelectedTrains) =>
      prevSelectedTrains.includes(id)
        ? prevSelectedTrains.filter((trainId) => trainId !== id)
        : [...prevSelectedTrains, id]
    );
  };
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  const shouldShowViewMore = searchList.length > 5;

  const visibleItems = viewMore ? searchList : searchList.slice(0, 5);
  return (
    <section className="pb-8">
      <div className="flex border-b-2 w-[90%] mx-auto">
        <p className=" text-lg font-medium mr-4 mb-2  pr-4">Standard</p>
        <p className=" text-lg font-medium mr-4 mb-2  pr-4">1st Class</p>
        <p className=" text-lg font-medium flex items-center cursor-pointer">
          <span className="bg-blue-900 text-white text-3xl w-6 h-6 rounded-full flex items-center justify-center mr-2 mb-2">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M7.34375 13.625V1.375M13.4688 7.5H1.21875"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />{" "}
            </svg>
          </span>
          <span className="mb-2">Add a return</span>
        </p>
      </div>
      <div className="flex py-8">
        <div className={`flex flex-col w-2/3 transition-all duration-700 ease-in-out ${viewMore ? 'h-[100%]' : 'h-auto'}`}>
          <div className="w-full flex mb-6">
            <div className="flex w-[15%]"></div>
            <div className="flex items-center justify-start w-[85%] p-2 text-[#727171] bg-[#FCF5E9]">
              <div className="relative -left-6">
                <img
                  src="/assets/icons/search-train-icon.png"
                  alt="search-train-icon"
                />
              </div>
              <span className="mr-2 text-lg">Prague LKPR</span>
              <i className="gg-arrow-right"></i>
              <span className="mx-2 text-lg">Madrid MAD</span>
            </div>
          </div>
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-6 cursor-pointer"
              onClick={() => handleChange(item.id)}
            >
              <div className="flex flex-col items-center justify-center w-[15%] cursor-pointer">
                <div
                  className={`w-8 h-8 ${
                    selectedTrains.includes(item.id)
                      ? "bg-[#152B69]"
                      : "bg-[#C4C4C4]"
                  } rounded flex items-center pb-1 justify-center`}
                >
                  <div className="check"></div>
                </div>
                <p className="text-xs italic text-[#727171] my-1">
                  {selectedTrains.includes(item.id)
                    ? "Deselect Train"
                    : "Select Train"}
                </p>
              </div>
              <div
                className={`flex w-[85%] ${
                  selectedTrains.includes(item.id)
                    ? "bg-[#EBF9FF]"
                    : "bg-[#F1F0F0]"
                }`}
              >
                <div className="bg-[#152B69] w-7"></div>
                <div className="flex flex-col w-full p-2">
                  <div className="flex justify-between pt-2 pb-4">
                    <div className="flex">
                      <div className="flex flex-col pr-4">
                        <p className="text-xs mb-1">{item.fromDate}</p>
                        <p className="text-xs mb-1">{item.from}</p>
                        <p className="text-xs font-medium text-[#727171]">
                          LKPR
                        </p>
                        <h2 className="text-3xl font-semibold text-[#4E4E4E]">
                          {item.fromTime}
                        </h2>
                      </div>
                      <div className="gg-arrow-right rightArrow">
                        <span className=" absolute left-[35%] text-[#727171] font-medium text-[11px] bottom-3">
                          {item.totalTime}
                        </span>
                      </div>
                      <div className="flex flex-col pl-4">
                        <p className="text-xs mb-1">{item.toDate}</p>
                        <p className="text-xs mb-1">{item.to}</p>
                        <p className="text-xs font-medium text-[#727171]">
                          MAD
                        </p>
                        <h2 className="text-3xl font-semibold text-[#4E4E4E]">
                          {item.toTime}
                        </h2>
                      </div>
                    </div>
                    <div className="">
                      <p className="inline-flex items-center justify-center cursor-pointer pr-6">
                        <span className=" w-4 h-4 border border-black mr-2 rounded-full flex items-center justify-center">
                          <span
                            className={`inline-block w-3 h-3 rounded-full`}
                          ></span>
                        </span>
                        <span className="font-medium">{item.cost1}</span>
                      </p>
                      <div className=" inline-flex flex-col items-center justify-center cursor-pointer pl-6">
                        <p className="flex items-center justify-center">
                          <span className=" w-4 h-4 border border-black mr-2 rounded-full flex items-center justify-center">
                            <span
                              className={`inline-block w-3 h-3 rounded-full`}
                            ></span>
                          </span>
                          <span className="font-medium">{item.cost2}</span>
                        </p>
                        <span className=" text-xs text-[#C31A1A] font-medium">
                          {item.leftQty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col justify-between">
                      <p className="text-xs font-medium text-[#707070]">
                        Plat. {item.platform}
                      </p>
                      <p className="text-sm my-1">
                        {item.updatedTime},{" "}
                        <span className="font-medium underline">
                          {item.chnages}
                        </span>
                      </p>
                    </div>
                    <p className="text-[#0EC742] font-medium">
                      Save {item.savings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {shouldShowViewMore && (
            <div
              className={`flex items-center text-base font-medium justify-center cursor-pointer text-[#152B69]`}
              onClick={handleViewMore}
            >
              {viewMore ? "View less" : "View more"}
            </div>
          )}
        </div>
        <div className="flex flex-col w-1/3 mx-12">
          <div className="flex flex-col bg-[#152B69] rounded-2xl p-8">
            <div className="flex justify-between text-white">
              <p className="flex flex-col text-base font-medium">
                <span>Total</span>
                <span>1 Adult</span>
              </p>
              <p className=" text-2xl font-medium">$79.02</p>
            </div>
            <p className=" text-xs text-slate-100 my-4">
              You’re saving <span>$132.59</span> with SplitSave!
            </p>
            <div className=" w-full flex items-center justify-center rounded-full text-[#152B69] font-medium p-2 px-6 bg-[#FFCD6B] cursor-pointer mt-6">
              Continue
            </div>
            <p className=" text-[#FFCD6B] text-sm text-center my-2 cursor-pointer">
              Go to Checkout
            </p>
          </div>
          <img src="/assets/images/route-map.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SearchList;
