import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import ImageTextStrip from "../components/imageTextStrip";
import MoreDetails from "../components/moreDetails";
import TrackAnimation from "../components/trackAnimation";
import TrustedOperators from "../components/trustedOperators";
import PopularDestinations from "../components/popularDestinations";
import PopularRoutes from "../components/popularRoutes";
import GetStarted from "../components/getStarted";
import FAQComponent from "../components/faq";
import GoExplore from "../components/goExplore";
import TestimonialSlider from "../components/testimonialSlider";
import SplitYourTicket from "../components/splitYourTicket";

const Home = () => {
  const imageUrl = "/assets/images/homepage-banner.png";
  const textContent = 
    {
      heading: "Search Split Tickets to get the",
      subHeading: "Cheapest Fare",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quisquam!",
    };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent} />
      <ImageTextStrip />
      <MoreDetails />
      <TrackAnimation />
      <SplitYourTicket imageUrl="/assets/images/splityourticket.png" bgColor="#EBF9FF" />
      <PopularDestinations />
      <PopularRoutes />
      <TestimonialSlider />
      <GoExplore />
      <TrustedOperators />
      <FAQComponent />
      <GetStarted />
    </Layout>
  );
};

export default Home;
