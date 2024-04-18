import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import ImageTextStrip from "../components/imageTextStrip";
import MoreStations from "../components/moreStations";
import TableOfContent from "../components/tableOfContent";
import StationMap from "../components/stationMap";
import FAQComponent from "../components/faq";
import GetStarted from "../components/getStarted";
import StationDetails from "../components/stationDetails";
import DepartureArrival from "../components/departureArrival";
const StationsPage = () => {
  const imageUrl = "/assets/images/station-page-banner.png";
  const textContent = {
    heading: "All Stations",
    subHeading: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent} />
      <ImageTextStrip />
      <MoreStations />
      <TableOfContent />
      <div id="stationMap"><StationMap /></div>
      <div id="stationDetails"><StationDetails /></div>
      <div id="departureArrival"><DepartureArrival /></div>
      <div id="faq"><FAQComponent /></div>
      <GetStarted />
    </Layout>
  );
};

export default StationsPage;
