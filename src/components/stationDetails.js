import React, { useState } from "react";

const StationDetails = () => {
  const details = [
    {
      id: 1,
      category: "Ticket Office",
      iconUrl: "/assets/icons/station-ticket.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
    {
      id: 2,
      category: "Luggage",
      iconUrl: "/assets/icons/station-luggage.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
    {
      id: 3,
      category: "Facilities",
      iconUrl: "/assets/icons/station-facilities.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
    {
      id: 4,
      category: "Toilets",
      iconUrl: "/assets/icons/station-toilets.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
    {
      id: 5,
      category: "Wifi",
      iconUrl: "/assets/icons/station-wifi.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
    {
      id: 6,
      category: "Staffing and Customer Service",
      iconUrl: "/assets/icons/station-staff.png",
      details: {
        openingHours: {
          mondayToFriday: "open from 04:45:00 until 01:00:00",
          saturday: "open from 04:45:00 until 01:00:00",
          sunday: "open from 05:25:00 until 01:00:00",
        },
        ticketMachine: "Available",
        staffHelp: "Available",
        staffingLevel: "Available at all times",
        oysterTopup: "Available",
        oysterValidator: "Available",
        prePurchaseCollection: "Available",
        travelCardZone: "London Bridge is in Zone 1",
      },
    },
  ];
  const [selectedTab, setSelectedTab] = useState(details[0]);
  const handleClick = (item) => {
    setSelectedTab(item);
  };
  console.log("selectedTab", selectedTab);

  return (
    <section className="py-8 sm:p-8 bg-[#FCF5E9]">
      <h2 className="text-3xl sm:text-5xl font-medium leading-normal tracking-tight text-center text-[#152B69]">
        Station Details & Facilities
      </h2>
      <div className="flex items-center sm:justify-center bg-[#EBF9FF] sm:rounded-full py-4 sm:p-4 mx-auto my-4 w-full overflow-auto sm:w-[90%]">
        {details.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-center transition-all duration-700 min-w-max sm:min-w-min mx-2 px-4 py-2 rounded-full cursor-pointer ${
              item.category === selectedTab.category ? "bg-[#FFC14B]" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            <img src={item.iconUrl} alt="icon" width={28} height={28} />
            <p className="inline-block mx-2 text-base font-medium">{item.category}</p>
          </div>
        ))}
      </div>
      {details.map((item) =>
        item.category === selectedTab.category ? (
          <div key={item.id} className="flex flex-col items-center">
            <div className="flex items-start justify-center p-2 sm:p-10 w-full">
              <div className="flex text-lg sm:text-3xl w-[35%] font-semibold px-2 sm:px-8">
                {item.category} Department <br /> opening hours:
              </div>
              <div className="flex w-[65%] flex-col">
                <div className="flex items-center">
                  <span
                    className={`bg-black w-[5px] h-[5px] mr-3 rounded-full inline-block`}
                  ></span>{" "}
                  <span className=" text-sm sm:text-lg font-bold mr-1 py-2">
                    Monday to Friday
                  </span>{" "}
                  <span className="text-sm sm:text-lg">
                    {item.details.openingHours.mondayToFriday}
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`bg-black w-[5px] h-[5px] mr-3 rounded-full inline-block`}
                  ></span>{" "}
                  <span className=" text-sm sm:text-lg font-bold mr-1 py-2">Saturday</span>{" "}
                  <span className="text-sm sm:text-lg">
                    {item.details.openingHours.saturday}
                  </span>
                </div>
                <div className="flex items-center">
                  <span
                    className={`bg-black w-[5px] h-[5px] mr-3 rounded-full inline-block`}
                  ></span>{" "}
                  <span className=" text-sm sm:text-lg font-bold mr-1 py-2">Sunday</span>{" "}
                  <span className="text-sm sm:text-lg">
                    {item.details.openingHours.sunday}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex bg-white p-2 sm:p-6 rounded-2xl sm:w-auto w-full overflow-auto sm:overflow-hidden">
              <table className="table text-left">
                <thead>
                  <tr className=" border-b-2">
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Ticket Machine</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Staff Help</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Staffing level</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Oyster topup</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Oyster validator</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Pre-purchase collection</th>
                    <th className="p-2 sm:p-4 text-xs sm:text-base">Travel Card Zone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.ticketMachine}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.staffHelp}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.staffingLevel}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.oysterTopup}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.oysterValidator}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.prePurchaseCollection}</td>
                    <td className="p-2 sm:p-4 text-xs sm:text-base text-slate-500">{item.details.travelCardZone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default StationDetails;
