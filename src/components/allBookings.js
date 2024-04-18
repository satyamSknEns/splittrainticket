import React, { useState } from "react";

const AllBookings = () => {
  const searchList = [
    {
      category: ["All Journeys", "Upcoming", "Past Journeys"],
      data: [
        {
          id: 1,
          trainName: "Super Fast Express (55325)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "12:10",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "13:55",
          totalTime: "1h 45m",
          bookingStatus: "completed",
        },
        {
          id: 2,
          trainName: "Jwt Token Express (00643)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "13:05",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "15:15",
          totalTime: "2h 10m",
          bookingStatus: "completed",
        },
        {
          id: 3,
          trainName: "Node Js (01324)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "13:05",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "15:15",
          totalTime: "2h 10m",
          bookingStatus: "completed",
        },
        {
          id: 4,
          trainName: "React Next Express (43212)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "15:00",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "17:05",
          totalTime: "2h 5m",
          bookingStatus: "upcoming",
        },
        {
          id: 5,
          trainName: "Fast Forest (00421)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "15:30",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "17:45",
          totalTime: "2h 15m",
          bookingStatus: "upcoming",
        },
        {
          id: 6,
          trainName: "Next Express (14523)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "18:10",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "20:15",
          totalTime: "2h 5m",
          bookingStatus: "upcoming",
        },
        {
          id: 7,
          trainName: "JWT Express (23098)",
          from: "Prague",
          fromDate: "Fri, 17 May 2022",
          fromTime: "18:10",
          to: "Madrid-Barajas",
          toDate: "Fri, 17 May 2022",
          toTime: "20:15",
          totalTime: "2h 5m",
          bookingStatus: "upcoming",
        },
      ],
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState( searchList[0].category[0] );

  const selectedList = searchList[0].data.filter((item) => {
    if (selectedCategory === "All Journeys") {
      return true;
    } else if (selectedCategory === "Upcoming") {
      return item.bookingStatus === "upcoming";
    } else if (selectedCategory === "Past Journeys") {
      return item.bookingStatus === "completed";
    }
    return true;
  })

  return (
    <section className="p-8">
      <div className="flex flex-col items-start justify-center w-[90%] mx-auto">
        <h3 className="text-center text-5xl font-medium text-[#152B69] ">
          All Bookings
        </h3>
        <p className="text-left my-4">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual
          mockups.Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups.
        </p>
      </div>
      <div className="flex justify-between w-full mx-auto p-8">
        <div className="flex flex-col w-1/4 border-[1.5px] bg-[#EBF9FF] border-slate-300 rounded-xl shadow-[0_1px_10px_0px_rgb(0,0,0,0.14)] text-lg font-medium m-6 mt-0">
          {searchList[0].category.map((item ,index) => (
            <div
            key={index}
              className={`flex m-2 p-2 ml-0 mt-8 border-l-4 transition-all duration-300 ${selectedCategory === item ? 'border-[#152B69] text-[#152B69]' : 'border-[#EBF9FF] text-[#4E4E4E]'} cursor-pointer`}
              onClick={() => setSelectedCategory(item)}
            >
              <span className="pl-5">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center w-3/4 mx-6">
          {selectedList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-7"
            >
              <div className={`flex w-full bg-white`}>
                <div className="flex flex-col w-full p-2 border-[1.5px] border-slate-300 rounded-xl shadow-[0_1px_10px_0px_rgb(0,0,0,0.14)]">
                  <div className="flex items-center justify-between bg-[#FCF5E9] p-2 rounded">
                    <p className="text-[#4E4E4E] font-medium">
                      {item.trainName}
                    </p>
                    <p className="flex items-center justify-center cursor-pointer">
                      Ticket{" "}
                      <span className="mx-2">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9416 3.82781H3.94155V0.597809H13.9416V3.82781ZM14.5566 8.09781C14.8399 8.09781 15.0776 8.00181 15.2696 7.80981C15.4616 7.61781 15.5572 7.38014 15.5566 7.09681C15.5566 6.81348 15.4609 6.57614 15.2696 6.38481C15.0782 6.19348 14.8406 6.09748 14.5566 6.09681C14.2732 6.09681 14.0359 6.19281 13.8446 6.38481C13.6532 6.57681 13.5572 6.81414 13.5566 7.09681C13.5566 7.38014 13.6526 7.61781 13.8446 7.80981C14.0366 8.00181 14.2739 8.09748 14.5566 8.09681M12.9416 14.9818V10.4438H4.94156V14.9818H12.9416ZM13.9416 15.9818H3.94155V11.9818H0.518555V6.59681C0.518555 6.03014 0.710888 5.55514 1.09555 5.17181C1.48022 4.78848 1.95455 4.59681 2.51855 4.59681H15.3646C15.9312 4.59681 16.4062 4.78848 16.7896 5.17181C17.1729 5.55514 17.3646 6.03014 17.3646 6.59681V11.9818H13.9416V15.9818Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-full p-3 pt-2 pb-4">
                    <div className="flex flex-col pr-4 text-[#4E4E4E]">
                      <p className="text-sm font-medium mb-1">
                        {item.from} (LKPR)
                      </p>
                      <p className="text-sm mb-1">{item.fromDate}</p>
                      <h2 className="text-2xl font-semibold">
                        {item.fromTime}
                      </h2>
                    </div>
                    <div className="gg-arrow-right rightArrow !w-[300px] before:w-[300px] !top-[10%] !text-slate-300">
                      <span className=" absolute left-[42%] text-[#4E4E4E] font-medium text-base bottom-3">
                        {item.totalTime}
                      </span>
                    </div>
                    <div className="flex flex-col pl-4">
                      <p className="text-sm font-medium mb-1">
                        {item.to} (MAD)
                      </p>
                      <p className="text-xs mb-1">{item.toDate}</p>
                      <h2 className="text-2xl font-semibold text-[#4E4E4E]">
                        {item.toTime}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBookings;
