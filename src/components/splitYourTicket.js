import React, { useState, useEffect } from "react";

const SplitYourTicket = ({imageUrl,bgColor}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const tabs = [
    {
      id: 1,
      name: "Tip 1",
      content: [
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
      ],
    },
    {
      id: 2,
      name: "Tip 2",
      content: [
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti.",
      ],
    },
    {
      id: 3,
      name: "Tip 3",
      content: [
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
      ],
    },
    {
      id: 4,
      name: "Tip 4",
      content: [
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti.",
        "Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam! Et labore harum non nobis ipsum eum molestias mollitia.",
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [tabCount, setTabCount] = useState(1);
  const handleTabClick = (tab) => {
    setSelectedTab(tab.name);
    setTabCount(tab.id);
  };
  const sectionStyle = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : {
        backgroundColor: bgColor,
      };

  return (
    <section
      className="flex items-center flex-col p-4 sm:p-8 bg-[#EBF9FF] min-h-[500px]"
      style={sectionStyle}
    >
      <h2 className="font-volkhov text-3xl sm:text-5xl font-medium leading-59 tracking-tight text-center sm:mb-4 text-[#152B69] py-4">
        Split Your <span className="font-bold">Ticket</span>
      </h2>
      <div className={`w-full sm:w-auto flex items-center justify-between pb-4 sm:py-4 sm:p-4 relative z-20 ${imageUrl ? '' : 'bg-[#EBF9FF] rounded-full py-3 px-6'}`}>
        <span className={`Tab-${tabCount} ${isMobile ? 'mobileTab' : 'slideTab'} mx-3`}></span>
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab)}
            className={` relative z-20 font-medium text-lg cursor-pointer sm:px-8 py-2 mx-4 rounded-full ${
              selectedTab === tab.name ? "" : ""
            } transition-all duration-700 ease-in-out`}
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="sm:w-[80%] mx-auto">
        {tabs.map((tab) =>
          tab.name === selectedTab ? (
            <ul key={tab.id} className="">
              {tab.content.map((item, index) => (
                <div key={index} className="flex items-start mb-2 ease-in-out">
                  <div className="mr-4">
                    {" "}
                    <span className={`w-3 h-3 inline-flex border items-center justify-center rounded-full cursor-pointer ${imageUrl ? 'bg-[#152B69]' : 'bg-[#80bcd6]'}`}></span>
                  </div>
                  <li
                    key={index}
                    className="text-base leading-7 tracking-normal text-left"
                  >
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          ) : null
        )}
      </div>
    </section>
  );
};

export default SplitYourTicket;
