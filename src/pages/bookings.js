import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import AllBookings from "../components/allBookings";
const Bookings = () => {
  const imageUrl = "/assets/images/booking-page-banner.png";
  const textContent = {
    heading: "",
    subHeading: "",
    description: "",
  };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent} search="booking" />
      <AllBookings />
    </Layout>
  );
};

export default Bookings;
