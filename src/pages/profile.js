import React, { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../config/coockies";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import axios from "axios";
import Loader from "../components/loader";
import { baseUrl } from "../config/config";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getUser = JSON.parse(getCookie("user"));
  const firstInitial = getUser?.firstName.charAt(0);
  const lastInitial = getUser?.lastName.charAt(0);
  const initials = firstInitial + lastInitial;


  useEffect(() => {
    const userToken = getCookie("token");
    if (!userToken) {
      navigate("/login");
      return;
    }
    const getUserData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users/getuser`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          params: {
            email: getUser?.email,
          },
        });
        if (response.data[0]) {
          setUser(response.data[0]);
          setIsLoading(false);
        } else {
          removeCookie("token");
          removeCookie("user");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getUserData();
  }, []);

  const handleLogOut = () => {
    removeCookie("token");
    removeCookie("user");
    navigate("/login");
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section className="w-full flex justify-center sm:p-8">
            <div className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[95%] sm:w-[80%] my-8">
              <div className="flex sm:flex-row flex-col items-center justify-between sm:p-8 p-4 border-b w-full">
                <div className="flex sm:flex-row flex-col items-center">
                  <div className="w-24 h-24 bg-[#FFCD6B] rounded-full flex items-center justify-center font-medium text-3xl">
                    {initials}
                  </div>
                  <div className="ml-4 sm:text-left text-center">
                    <h2 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:items-center sm:justify-center justify-start py-4">
                  <Link
                    to="/change-password"
                    className="bg-[#FFCD6B] text-[#152B69] font-medium py-2 my-2 sm:my-0 mx-2 px-4 rounded flex items-center"
                  >
                    <span className="mr-2">
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_772_1850)">
                          <path
                            d="M6.08594 7.09625V6.22125C6.08594 3.32175 8.43644 0.971249 11.3359 0.971249C14.2354 0.971249 16.5859 3.32175 16.5859 6.22125V7.09625H18.3359C18.8192 7.09625 19.2109 7.488 19.2109 7.97125V18.4712C19.2109 18.9545 18.8192 19.3462 18.3359 19.3462H4.33594C3.85269 19.3462 3.46094 18.9545 3.46094 18.4712V7.97125C3.46094 7.488 3.85269 7.09625 4.33594 7.09625H6.08594ZM17.4609 8.84625H5.21094V17.5962H17.4609V8.84625ZM10.4609 13.8621C9.93786 13.5595 9.58594 12.994 9.58594 12.3462C9.58594 11.3797 10.3694 10.5962 11.3359 10.5962C12.3025 10.5962 13.0859 11.3797 13.0859 12.3462C13.0859 12.994 12.734 13.5595 12.2109 13.8621V15.8462H10.4609V13.8621ZM7.83594 7.09625H14.8359V6.22125C14.8359 4.28825 13.2689 2.72125 11.3359 2.72125C9.40294 2.72125 7.83594 4.28825 7.83594 6.22125V7.09625Z"
                            fill="#152B69"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_772_1850">
                            <rect
                              width="21"
                              height="21"
                              fill="white"
                              transform="translate(0.835938 0.0962601)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Change Password
                  </Link>
                  <Link
                    to="/pages/bookings"
                    className="bg-[#FFCD6B] text-[#152B69] font-medium py-2 mb-2 sm:mb-0 mx-2 px-4 rounded flex items-center"
                  >
                    <span className="mr-2">
                      <svg
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="18px"
                        height="18px"
                        fill="#152B69"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path
                              className="st0"
                              d="M430.337,231.065H81.674c-29.701,0-53.858,24.16-53.858,53.862v49.884v15.976l15.806,2.262 c9.135,1.31,16.03,9.258,16.03,18.483c0,9.225-6.891,17.173-16.022,18.482l-15.814,2.262v15.978v49.892 c0,29.693,24.157,53.854,53.858,53.854h348.663c29.701,0,53.862-24.161,53.862-53.854v-49.558V391l-17.571-0.822 c-9.982-0.463-17.808-8.655-17.808-18.645c0-9.982,7.826-18.174,17.815-18.646l17.564-0.83v-17.58v-49.55 C484.199,255.225,460.038,231.065,430.337,231.065z M465.765,334.477c-19.686,0.936-35.371,17.14-35.371,37.056 c0,19.923,15.685,36.135,35.371,37.055v49.558c0,19.565-15.864,35.428-35.428,35.428H81.674c-19.569,0-35.432-15.863-35.432-35.428 v-49.892c17.991-2.579,31.836-18.011,31.836-36.722c0-18.703-13.846-34.135-31.836-36.721v-49.884 c0-19.573,15.863-35.436,35.432-35.436h348.663c19.564,0,35.428,15.863,35.428,35.436V334.477z"
                            ></path>{" "}
                            <rect
                              x="133.621"
                              y="439.419"
                              className="st0"
                              width="12.19"
                              height="31.8"
                            ></rect>{" "}
                            <rect
                              x="133.621"
                              y="383.564"
                              className="st0"
                              width="12.19"
                              height="31.792"
                            ></rect>{" "}
                            <rect
                              x="133.621"
                              y="327.7"
                              className="st0"
                              width="12.19"
                              height="31.8"
                            ></rect>{" "}
                            <rect
                              x="133.621"
                              y="271.846"
                              className="st0"
                              width="12.19"
                              height="31.799"
                            ></rect>{" "}
                            <polygon
                              className="st0"
                              points="111.245,180.758 100.592,186.68 116.053,214.461 126.702,208.539 "
                            ></polygon>{" "}
                            <path
                              className="st0"
                              d="M497.524,179.025l-24.095-43.311l-8.558-15.36l-15.749,7.826c-8.948,4.442-19.768,1.09-24.617-7.639 c-4.865-8.721-2.001-19.687,6.492-24.95l14.952-9.266l-8.558-15.368l-24.088-43.294C398.863,1.714,366.006-7.658,340.047,6.79 L35.374,176.299c-25.955,14.44-35.318,47.305-20.878,73.256l0.875,1.578c3.27-6.394,7.43-12.243,12.324-17.409 c-4.803-15.643,1.762-33.044,16.636-41.326l304.681-169.51c17.1-9.518,38.674-3.368,48.192,13.732l24.088,43.302 c-16.751,10.38-22.575,32.182-12.895,49.582c9.681,17.401,31.271,23.942,48.925,15.172l24.095,43.312 c7.273,13.056,5.337,28.692-3.571,39.601c4.776,3.961,8.989,8.558,12.65,13.569C505.4,224.524,508.979,199.615,497.524,179.025z"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>
                    My Bookings
                  </Link>
                  <Link
                    to="/edit-profile"
                    className="bg-[#FFCD6B] text-[#152B69] font-medium py-2 mb-2 sm:mb-0 mx-2 px-4 rounded flex items-center"
                  >
                    <span className="mr-2">
                      <svg
                        width="13px"
                        height="13px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                            fill="#152B69"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    Edit
                  </Link>
                  <button
                    className="bg-[#FFCD6B] text-[#152B69] font-medium py-2 mx-2 sm:mx-0 px-4 rounded flex items-center"
                    onClick={handleLogOut}
                  >
                    <span className="mr-1">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M11.75 9.874C11.75 10.2882 12.0858 10.624 12.5 10.624C12.9142 10.624 13.25 10.2882 13.25 9.874H11.75ZM13.25 4C13.25 3.58579 12.9142 3.25 12.5 3.25C12.0858 3.25 11.75 3.58579 11.75 4H13.25ZM9.81082 6.66156C10.1878 6.48991 10.3542 6.04515 10.1826 5.66818C10.0109 5.29121 9.56615 5.12478 9.18918 5.29644L9.81082 6.66156ZM5.5 12.16L4.7499 12.1561L4.75005 12.1687L5.5 12.16ZM12.5 19L12.5086 18.25C12.5029 18.25 12.4971 18.25 12.4914 18.25L12.5 19ZM19.5 12.16L20.2501 12.1687L20.25 12.1561L19.5 12.16ZM15.8108 5.29644C15.4338 5.12478 14.9891 5.29121 14.8174 5.66818C14.6458 6.04515 14.8122 6.48991 15.1892 6.66156L15.8108 5.29644ZM13.25 9.874V4H11.75V9.874H13.25ZM9.18918 5.29644C6.49843 6.52171 4.7655 9.19951 4.75001 12.1561L6.24999 12.1639C6.26242 9.79237 7.65246 7.6444 9.81082 6.66156L9.18918 5.29644ZM4.75005 12.1687C4.79935 16.4046 8.27278 19.7986 12.5086 19.75L12.4914 18.25C9.08384 18.2892 6.28961 15.5588 6.24995 12.1513L4.75005 12.1687ZM12.4914 19.75C16.7272 19.7986 20.2007 16.4046 20.2499 12.1687L18.7501 12.1513C18.7104 15.5588 15.9162 18.2892 12.5086 18.25L12.4914 19.75ZM20.25 12.1561C20.2345 9.19951 18.5016 6.52171 15.8108 5.29644L15.1892 6.66156C17.3475 7.6444 18.7376 9.79237 18.75 12.1639L20.25 12.1561Z"
                            fill="#152B69"
                          ></path>{" "}
                        </g>
                      </svg>
                    </span>
                    Log Out
                  </button>
                </div>
              </div>
              <div className="p-4 sm:p-8">
                <h3 className="text-lg font-semibold mb-4">
                  Personal Information
                </h3>
                <div className="flex sm:flex-row flex-col mb-2">
                  <div className="sm:w-1/2 sm:pr-2">
                    <label className="block mb-2 sm:mb-1 text-sm">
                      Full Name
                    </label>
                    <p className="bg-[#EBF9FF] py-2 px-2 mb-2">{`${user.firstName} ${user.lastName}`}</p>
                  </div>
                  <div className="sm:w-1/2 sm:pl-2">
                    <label className="block mb-2 sm:mb-1 text-sm">Email</label>
                    <p className="bg-[#EBF9FF] py-2 px-2 mb-2">{user.email}</p>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col">
                  <div className="sm:w-1/2 sm:pr-2">
                    <label className="block mb-2 sm:mb-1 text-sm">Mobile</label>
                    <p className="bg-[#EBF9FF] py-2 px-2 mb-2">
                      {user.mobileNumber}
                    </p>
                  </div>
                  <div className="sm:w-1/2 sm:pl-2">
                    <label className="block mb-2 sm:mb-1 text-sm">
                      Date of Birth
                    </label>
                    <p className="bg-[#EBF9FF] py-2 px-2 mb-2">{user.dob}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export default ProfilePage;
