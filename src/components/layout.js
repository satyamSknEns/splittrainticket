import React from "react";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCookie } from "../config/coockies";
// import axios from "axios";
import Header from "./header";
import Footer from "./footer";
// import Loader from "./loader";

const Layout = ({ children }) => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const userToken = getCookie("token");
  //   const getUserData = async () => {
  //     const user = getCookie("user");
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/users/getuser",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${userToken}`,
  //           },
  //           params: {
  //             token: userToken,
  //           },
  //         }
  //       );
  //       if (response.data[0]) {
  //         setUser(JSON.parse(user));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       // navigate("/login");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getUserData();
  // }, []);

  return (
    <div className="flex items-center justify-center flex-col overflow-hidden">
      {/* {isLoading && <Loader />} */}
      <Header />
      <div className="mt-[75px] sm:mt-[89px] w-full">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
