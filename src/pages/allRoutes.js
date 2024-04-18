import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import ImageTextStrip from "../components/imageTextStrip";
import GetStarted from "../components/getStarted";
import FAQComponent from "../components/faq";
import SplitYourTicket from "../components/splitYourTicket";
import TrackAnimation from "../components/trackAnimation";
import MoreStations from "../components/moreStations";
import TravelFromTo from "../components/travelFromTo";
import TextImage from "../components/textImage";
import CityInformation from "../components/cityInformation";
import FromToRoutes from "../components/fromToRoutes";

const RoutesPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const imageUrl = "/assets/images/routepage-banner.png";
  const textContent = {
    heading: "All Train Routes",
    subHeading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent}/>
      <ImageTextStrip />
      <MoreStations />
      <SplitYourTicket bgColor="#FFFFFF"/>
      <TrackAnimation />
      <TravelFromTo />
      <TextImage />
      <FromToRoutes />
      <CityInformation isMobile={isMobile}/>
      <FAQComponent />
      <GetStarted />
    </Layout>
  );
};

export default RoutesPage;
