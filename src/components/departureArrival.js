import React, { useState } from "react";

const DepartureArrival = () => {
  const [activeTab, setActiveTab] = useState("Departure");

  const departureDetails = [
    {
      stationName: "To Lutton",
      trainName: "Thameslink",
      time: "12:32",
      platform: 2,
      status: "Late",
    },
    {
      stationName: "To Orpington",
      trainName: "Southestim",
      time: "13:32",
      platform: 6,
      status: "On Time",
    },
    {
      stationName: "To London Canon Street",
      trainName: "Thameslink",
      time: "14:00",
      platform: 5,
      status: "Late",
    },
    {
      stationName: "To London Charing Cross",
      trainName: "Southestim",
      time: "15:40",
      platform: 8,
      status: "Late",
    },
    {
      stationName: "To Horsham",
      trainName: "Southestim",
      time: "18:00",
      platform: 3,
      status: "On Time",
    },
  ];
  const arrivalDetails = [
    {
      stationName: "To Horsham",
      trainName: "Southestim",
      time: "10:32",
      platform: 8,
      status: "On Time",
    },
    {
      stationName: "To London Canon Street",
      trainName: "Thameslink",
      time: "13:00",
      platform: 4,
      status: "Late",
    },
    {
      stationName: "To Horsham",
      trainName: "Southestim",
      time: "15:45",
      platform: 5,
      status: "On Time",
    },
    {
      stationName: "To London Charing Cross",
      trainName: "Thameslink",
      time: "16:50",
      platform: 2,
      status: "On Time",
    },
    {
      stationName: "To Orpington",
      trainName: "Southestim",
      time: "18:30",
      platform: 1,
      status: "Late",
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTable = (data) => (
    <table className="border-collapse border border-black w-full rounded-3xl">
      <thead>
        <tr className="w-full text-xs sm:text-xl text-center bg-[#EBF9FF]">
          <th className="border border-black p-1 sm:p-4 ">Station Name</th>
          <th className="border border-black p-1 sm:p-4 ">Train Name</th>
          <th className="border border-black p-1 sm:p-4 ">Time</th>
          <th className="border border-black p-1 sm:p-4 ">Platform</th>
          <th className="border border-black p-1 sm:p-4 ">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="text-xs text-center sm:text-lg font-medium">
            <td className="border border-black p-2 sm:p-4 text-left font-medium text-[#152B69] text-xs sm:text-lg sm:px-4">{item.stationName}</td>
            <td className="border border-black p-3 sm:p-4">{item.trainName}</td>
            <td className="border border-black p-3 sm:p-4">{item.time}</td>
            <td className="border border-black p-3 sm:p-4">{item.platform}</td>
            <td className="border border-black p-2 sm:p-4"><span className={`inline-block p-2 sm:px-7 w-[80px] sm:w-[150px] rounded-full ${item.status === 'Late' ? ' text-red-500 bg-[#fce5e5]' : 'text-green-500 bg-[#e2ffec]'}`}>{item.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <section className="p-4 py-8 sm:p-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl font-medium sm:leading-normal tracking-tight text-center text-[#152B69]">
          Departures and arrivals from London Bridge
        </h2>
        <p className="w-full sm:w-[60%] sm:mx-auto sm:text-lg">
          Want to check the latest departures and arrivals into London Bridge
          station? Find Live information for the next trains departing and
          arriving at the station below.
        </p>
      </div>

      <div className="sm:w-[80%] mx-auto">
        <div className="flex items-center w-full mb-6">
          <div
            className={`text-center ml-8 text-2xl p-4 w-1/2 font-medium cursor-pointer relative border-b-[6px] ${activeTab === "Departure" ? "active border-green-500" : "border-opacity-0"}`}
            onClick={() => handleTabClick("Departure")}
          >
            <span>Departure</span>
          </div>
          <div
            className={`text-center mr-8 text-2xl p-4 w-1/2 font-medium cursor-pointer border-b-[6px] ${activeTab === "Arrival" ? "active border-green-500" : "border-opacity-0"}`}
            onClick={() => handleTabClick("Arrival")}
          >
            Arrival
          </div>
        </div>

        {activeTab === "Departure" ? renderTable(departureDetails) : null}
        {activeTab === "Arrival" ? renderTable(arrivalDetails) : null}
      </div>
    </section>
  );
};

export default DepartureArrival;
