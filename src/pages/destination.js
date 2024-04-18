import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import ImageTextStrip from "../components/imageTextStrip";
import BookTrip from "../components/bookTrip";
import FAQComponent from "../components/faq";
import GetStarted from "../components/getStarted";
import PopularJourney from "../components/popularJourney";
import MainStations from "../components/mainStations";
import TopTours from "../components/topTours";
import MoreIdeas from "../components/moreIdeas";
const DestinationPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imageUrl = "/assets/images/destination-page-banner.png";
  const textContent = {
    heading: "Destinations",
    subHeading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent} />
      <ImageTextStrip />
      <BookTrip />
      <PopularJourney />
      <MainStations />
      <TopTours isMobile={isMobile} />
      <FAQComponent />
      <MoreIdeas isMobile={isMobile} />
      <GetStarted />
    </Layout>
  );
};

export default DestinationPage;
