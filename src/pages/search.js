import React from "react";
import Layout from "../components/layout";
import HeaderBanner from "../components/headerBanner";
import SearchDetails from "../components/searchDetails";
import SearchList from "../components/searchList";
import MostVisited from "../components/mostVisited";
const SearchPage = () => {
  const imageUrl = "/assets/images/search-page-banner.png";
  const textContent = {
    heading: "",
    subHeading: "",
    description: "",
  };
  return (
    <Layout>
      <HeaderBanner imageUrl={imageUrl} textContent={textContent} search="search" />
      <SearchDetails />
      <SearchList />
      <MostVisited />
    </Layout>
  );
};

export default SearchPage;
