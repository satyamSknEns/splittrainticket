import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SuccessModal from "../components/successModal";
import { getCookie } from "../config/coockies";
import axios from "axios";
import Loader from "../components/loader";
import Layout from "../components/layout";
const ChangePassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [loginCheck, setLoginCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const getUser = JSON.parse(getCookie("user"));

  useEffect(() => {
    const userToken = getCookie("token");
    if (!userToken) {
      navigate("/login");
    }
    const getUserData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/users/getuser",
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
            params: {
              email: getUser.email,
            },
          }
        );
        if (data[0]) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    };
    getUserData();
  }, [navigate, getUser.email]);

  const onSubmit = async (data) => {
    console.log("formDaa", data);
    const userToken = getCookie("token");
    const user = JSON.parse(getCookie("user"));
    try {
      const response = await axios.put(
        `http://localhost:8080/auth/changepassword`,
        { data: data, email: user.email },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("Successfully changed:", response.data);
      if (response.data) {
        setLoginCheck(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error(
        "Password Change Failed:",
        error.response ? error.response.data : error.message
      );
      console.log("error.response.data", error.response?.data?.message);
      setLoginCheck(true);
      setSuccessModal(false);
      setErrorMsg(
        error.response?.data?.message || error.message || "Network Error"
      );
    }
  };
  const handleClose = () => {
    setLoginCheck(false);
  };
  const handleCloseModal = () => {
    setSuccessModal(false);
    navigate("/profile");
  };
  const handleOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section className="p-4 sm:p-8 text-center bg-[#152B69]">
            <div className="flex sm:flex-row flex-col">
              <div className="flex flex-col items-start sm:w-[40%] w-full">
                {/* <Link
                  to="/"
                  className="flex items-center justify-center rounded-full bg-[#FFCD6B] p-3 w-24 h-24"
                >
                  <img src="/assets/header-logo.png" alt="logo" />
                </Link> */}
                <div className="flex flex-col items-start my-6">
                  <h1 className="text-center sm:text-left font-medium text-2xl sm:text-4xl my-6 text-white">
                    Lorem ipsum, or lipsum as it is sometimes known
                  </h1>
                  <img
                    src="/assets/images/login-banner.png"
                    alt="login banner"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-2xl sm:w-[60%] w-full pb-8 sm:pb-0">
                <h3 className=" text-2xl sm:text-4xl font-bold my-8">Change Password</h3>
                <div className="flex flex-col w-[90%] sm:w-[80%] mx-auto">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                      className={`flex my-5 w-full bg-[#EBF9FF] rounded relative ${
                        errors.password
                          ? "border border-red-500"
                          : "border border-transparent"
                      }`}
                    >
                      <div className="p-2 flex items-center justify-center">
                        <span>
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_772_1850)">
                              <path
                                d="M6.08594 7.09625V6.22125C6.08594 3.32175 8.43644 0.971249 11.3359 0.971249C14.2354 0.971249 16.5859 3.32175 16.5859 6.22125V7.09625H18.3359C18.8192 7.09625 19.2109 7.488 19.2109 7.97125V18.4712C19.2109 18.9545 18.8192 19.3462 18.3359 19.3462H4.33594C3.85269 19.3462 3.46094 18.9545 3.46094 18.4712V7.97125C3.46094 7.488 3.85269 7.09625 4.33594 7.09625H6.08594ZM17.4609 8.84625H5.21094V17.5962H17.4609V8.84625ZM10.4609 13.8621C9.93786 13.5595 9.58594 12.994 9.58594 12.3462C9.58594 11.3797 10.3694 10.5962 11.3359 10.5962C12.3025 10.5962 13.0859 11.3797 13.0859 12.3462C13.0859 12.994 12.734 13.5595 12.2109 13.8621V15.8462H10.4609V13.8621ZM7.83594 7.09625H14.8359V6.22125C14.8359 4.28825 13.2689 2.72125 11.3359 2.72125C9.40294 2.72125 7.83594 4.28825 7.83594 6.22125V7.09625Z"
                                fill="#9F9F9F"
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
                      </div>
                      <input
                        type={showOldPassword ? "text" : "password"}
                        {...register("oldPassword", {
                          required: "Old password is required",
                        })}
                        placeholder="Old Password"
                        className={`w-full bg-[#EBF9FF] placeholder:rounded outline-none p-4 pl-1`}
                      />
                      <span
                        onClick={handleOldPassword}
                        className="inline-flex items-center justify-center absolute top-5 right-0 text-slate-400 cursor-pointer"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="font-medium mr-2"
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
                              d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                              fill="#9F9F9F"
                            ></path>{" "}
                          </g>
                        </svg>
                        {showOldPassword && (
                          <div className="absolute top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2">
                            <span className="block w-5 h-0.5 bg-[#9F9F9F] transform rotate-45"></span>
                          </div>
                        )}
                      </span>

                      {errors.oldPassword && (
                        <p className="absolute -top-7 text-red-500 text-sm mt-2">
                          {errors.oldPassword.message}
                        </p>
                      )}
                    </div>
                    <div
                      className={`flex my-5 w-full bg-[#EBF9FF] rounded relative ${
                        errors.password
                          ? "border border-red-500"
                          : "border border-transparent"
                      }`}
                    >
                      <div className="p-2 flex items-center justify-center">
                        <span>
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_772_1850)">
                              <path
                                d="M6.08594 7.09625V6.22125C6.08594 3.32175 8.43644 0.971249 11.3359 0.971249C14.2354 0.971249 16.5859 3.32175 16.5859 6.22125V7.09625H18.3359C18.8192 7.09625 19.2109 7.488 19.2109 7.97125V18.4712C19.2109 18.9545 18.8192 19.3462 18.3359 19.3462H4.33594C3.85269 19.3462 3.46094 18.9545 3.46094 18.4712V7.97125C3.46094 7.488 3.85269 7.09625 4.33594 7.09625H6.08594ZM17.4609 8.84625H5.21094V17.5962H17.4609V8.84625ZM10.4609 13.8621C9.93786 13.5595 9.58594 12.994 9.58594 12.3462C9.58594 11.3797 10.3694 10.5962 11.3359 10.5962C12.3025 10.5962 13.0859 11.3797 13.0859 12.3462C13.0859 12.994 12.734 13.5595 12.2109 13.8621V15.8462H10.4609V13.8621ZM7.83594 7.09625H14.8359V6.22125C14.8359 4.28825 13.2689 2.72125 11.3359 2.72125C9.40294 2.72125 7.83594 4.28825 7.83594 6.22125V7.09625Z"
                                fill="#9F9F9F"
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
                      </div>
                      <input
                        type={showNewPassword ? "text" : "password"}
                        {...register("password", {
                          required: "New password is required",
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                            message:
                              "Password at least 8 characters, 1 uppercase, 1 number required.",
                          },
                        })}
                        placeholder="New Password"
                        className={`w-full bg-[#EBF9FF] placeholder:rounded outline-none p-4 pl-1`}
                      />
                      <span
                        onClick={handleNewPassword}
                        className="inline-flex items-center justify-center relative text-slate-400 cursor-pointer"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="font-medium mr-2"
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
                              d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                              fill="#9F9F9F"
                            ></path>{" "}
                          </g>
                        </svg>
                        {showNewPassword && (
                          <div className="absolute top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2">
                            <span className="block w-5 h-0.5 bg-[#9F9F9F] transform rotate-45"></span>
                          </div>
                        )}
                      </span>

                      {errors.password && (
                        <p className="absolute -top-7 text-red-500 text-sm mt-2">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <div
                      className={`flex my-4 w-full bg-[#EBF9FF] rounded relative ${
                        errors.password
                          ? "border border-red-500"
                          : "border border-transparent"
                      }`}
                    >
                      <div className="p-2 flex items-center justify-center">
                        <span>
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_772_1850)">
                              <path
                                d="M6.08594 7.09625V6.22125C6.08594 3.32175 8.43644 0.971249 11.3359 0.971249C14.2354 0.971249 16.5859 3.32175 16.5859 6.22125V7.09625H18.3359C18.8192 7.09625 19.2109 7.488 19.2109 7.97125V18.4712C19.2109 18.9545 18.8192 19.3462 18.3359 19.3462H4.33594C3.85269 19.3462 3.46094 18.9545 3.46094 18.4712V7.97125C3.46094 7.488 3.85269 7.09625 4.33594 7.09625H6.08594ZM17.4609 8.84625H5.21094V17.5962H17.4609V8.84625ZM10.4609 13.8621C9.93786 13.5595 9.58594 12.994 9.58594 12.3462C9.58594 11.3797 10.3694 10.5962 11.3359 10.5962C12.3025 10.5962 13.0859 11.3797 13.0859 12.3462C13.0859 12.994 12.734 13.5595 12.2109 13.8621V15.8462H10.4609V13.8621ZM7.83594 7.09625H14.8359V6.22125C14.8359 4.28825 13.2689 2.72125 11.3359 2.72125C9.40294 2.72125 7.83594 4.28825 7.83594 6.22125V7.09625Z"
                                fill="#9F9F9F"
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
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmPassword", {
                          required: "Confirm Password is required",
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                            message: "Confirm password must be same",
                          },
                        })}
                        placeholder="Confirm Password"
                        className={`w-full bg-[#EBF9FF] placeholder:rounded outline-none p-4 pl-1`}
                      />
                      <span
                        onClick={handleConfirmPassword}
                        className="inline-flex items-center justify-center relative text-slate-400 cursor-pointer"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="font-medium mr-2"
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
                              d="M12.0001 5.25C9.22586 5.25 6.79699 6.91121 5.12801 8.44832C4.28012 9.22922 3.59626 10.0078 3.12442 10.5906C2.88804 10.8825 2.70368 11.1268 2.57736 11.2997C2.51417 11.3862 2.46542 11.4549 2.43187 11.5029C2.41509 11.5269 2.4021 11.5457 2.393 11.559L2.38227 11.5747L2.37911 11.5794L2.10547 12.0132L2.37809 12.4191L2.37911 12.4206L2.38227 12.4253L2.393 12.441C2.4021 12.4543 2.41509 12.4731 2.43187 12.4971C2.46542 12.5451 2.51417 12.6138 2.57736 12.7003C2.70368 12.8732 2.88804 13.1175 3.12442 13.4094C3.59626 13.9922 4.28012 14.7708 5.12801 15.5517C6.79699 17.0888 9.22586 18.75 12.0001 18.75C14.7743 18.75 17.2031 17.0888 18.8721 15.5517C19.72 14.7708 20.4039 13.9922 20.8757 13.4094C21.1121 13.1175 21.2964 12.8732 21.4228 12.7003C21.4859 12.6138 21.5347 12.5451 21.5682 12.4971C21.585 12.4731 21.598 12.4543 21.6071 12.441L21.6178 12.4253L21.621 12.4206L21.6224 12.4186L21.9035 12L21.622 11.5809L21.621 11.5794L21.6178 11.5747L21.6071 11.559C21.598 11.5457 21.585 11.5269 21.5682 11.5029C21.5347 11.4549 21.4859 11.3862 21.4228 11.2997C21.2964 11.1268 21.1121 10.8825 20.8757 10.5906C20.4039 10.0078 19.72 9.22922 18.8721 8.44832C17.2031 6.91121 14.7743 5.25 12.0001 5.25ZM4.29022 12.4656C4.14684 12.2885 4.02478 12.1311 3.92575 12C4.02478 11.8689 4.14684 11.7115 4.29022 11.5344C4.72924 10.9922 5.36339 10.2708 6.14419 9.55168C7.73256 8.08879 9.80369 6.75 12.0001 6.75C14.1964 6.75 16.2676 8.08879 17.8559 9.55168C18.6367 10.2708 19.2709 10.9922 19.7099 11.5344C19.8533 11.7115 19.9753 11.8689 20.0744 12C19.9753 12.1311 19.8533 12.2885 19.7099 12.4656C19.2709 13.0078 18.6367 13.7292 17.8559 14.4483C16.2676 15.9112 14.1964 17.25 12.0001 17.25C9.80369 17.25 7.73256 15.9112 6.14419 14.4483C5.36339 13.7292 4.72924 13.0078 4.29022 12.4656ZM14.25 12C14.25 13.2426 13.2427 14.25 12 14.25C10.7574 14.25 9.75005 13.2426 9.75005 12C9.75005 10.7574 10.7574 9.75 12 9.75C13.2427 9.75 14.25 10.7574 14.25 12ZM15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92898 15.75 8.25005 14.0711 8.25005 12C8.25005 9.92893 9.92898 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                              fill="#9F9F9F"
                            ></path>{" "}
                          </g>
                        </svg>
                        {showConfirmPassword && (
                          <div className="absolute top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2">
                            <span className="block w-5 h-0.5 bg-[#9F9F9F] transform rotate-45"></span>
                          </div>
                        )}
                      </span>

                      {errors.confirmPassword && (
                        <p className="absolute -top-7 text-red-500 text-sm mt-2">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      {loginCheck && (
                        <div className="flex items-center bg-red-500 text-white w-full p-2 transition-all ease-in-out duration-1000 rounded">
                          <p className="w-full text-sm text-white">
                            {errorMsg || "Network Error"}
                          </p>
                          <span
                            className=" absolute right-0 top-1 cursor-pointer px-2"
                            onClick={handleClose}
                          >
                            x
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="rounded-lg text-lg font-medium cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#FFCD6B] mt-4 mx-2 w-[120px]">
                        <Link to="/profile">
                          <button className="p-3 w-full rounded-full">
                            Cancle
                          </button>
                        </Link>
                      </div>
                      <div className="bg-[#FFCD6B] rounded-lg text-lg font-medium cursor-pointer shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#FFCD6B] mt-4 mx-2 w-[120px]">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="p-3 w-full rounded-full"
                        >
                          {isSubmitting ? "Loading..." : "Update"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {successModal && (
              <SuccessModal
                message="Success! Your password has been updated."
                closeModal={handleCloseModal}
              />
            )}
          </section>
        </Layout>
      )}
    </>
  );
};

export default ChangePassword;
