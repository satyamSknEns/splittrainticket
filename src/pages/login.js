import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getCookie, setCookie } from "../config/coockies";
import axios from "axios";
import { baseUrl } from "../config/config";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [loginCheck, setLoginCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  useEffect(() => {
    const userToken = getCookie("token");
    if (userToken) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    console.log("formData", data);
    try {
      const response = await axios.post(
        `${baseUrl}/auth/login`,
        data
      );
      if (response.data) {
        console.log("Login successful:", response.data);
        const token = response?.data?.token;
        const expirationTime = keepLoggedIn ? 24 * 60 * 60 : 50 * 60;
        setCookie("token", token, expirationTime);
        const user = response?.data?.user;
        setCookie("user", JSON.stringify(user), expirationTime);
        navigate("/");
        setLoginCheck(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      console.log("error:", error);
      setLoginCheck(true);
      setErrorMsg(
        error.response?.data?.message || error.message || "Network Error"
      );
    }
  };
  const handleClose = () => {
    setLoginCheck(false);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleKeepLoggedIn = () => {
    setKeepLoggedIn(!keepLoggedIn);
  };

  console.log("keepLoggedIn", keepLoggedIn);
  return (
    <section className="p-4 sm:p-8 text-center bg-[#152B69]">
      <div className="sm:hidden flex flex-col items-start sm:my-6">
        <h1 className="flex text-left font-medium text-2xl my-6 text-white">
          Lorem ipsum, or lipsum as it is sometimes known
        </h1>
        <img src="/assets/images/login-banner.png" alt="login banner" />
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-col items-start sm:w-1/2 w-full order-last sm:order-none">
          <Link
            to="/"
            className="hidden sm:flex items-center justify-center rounded-full bg-[#FFCD6B] p-3 w-24 h-24"
          >
            <img src="/assets/header-logo.png" alt="logo" />
          </Link>
          <div className="hidden sm:flex flex-col items-start my-6">
            <h1 className="flex text-left font-medium text-4xl my-6 text-white">
              Lorem ipsum, or lipsum as it is sometimes known
            </h1>
            <img src="/assets/images/login-banner.png" alt="login banner" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl sm:w-1/2 w-full">
          <h3 className=" text-2xl sm:text-4xl font-bold my-8">
            Login into your account
          </h3>
          <form
            className="flex flex-col w-[90%] sm:w-[75%] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`flex my-2 w-full bg-[#EBF9FF] rounded relative ${
                errors.email
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
                    <g clipPath="url(#clip0_772_1847)">
                      <path
                        d="M18.3359 19.3463H16.5859V17.5963C16.5859 16.1465 15.4107 14.9713 13.9609 14.9713H8.71094C7.26119 14.9713 6.08594 16.1465 6.08594 17.5963V19.3463H4.33594V17.5963C4.33594 15.18 6.2947 13.2213 8.71094 13.2213H13.9609C16.3772 13.2213 18.3359 15.18 18.3359 17.5963V19.3463ZM11.3359 11.4713C8.43644 11.4713 6.08594 9.12076 6.08594 6.22128C6.08594 3.32178 8.43644 0.971275 11.3359 0.971275C14.2354 0.971275 16.5859 3.32178 16.5859 6.22128C16.5859 9.12076 14.2354 11.4713 11.3359 11.4713ZM11.3359 9.72128C13.2689 9.72128 14.8359 8.15427 14.8359 6.22128C14.8359 4.28828 13.2689 2.72128 11.3359 2.72128C9.40294 2.72128 7.83594 4.28828 7.83594 6.22128C7.83594 8.15427 9.40294 9.72128 11.3359 9.72128Z"
                        fill="#9F9F9F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_772_1847">
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
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className={`w-full bg-[#EBF9FF] placeholder:font-medium rounded outline-none p-4 pl-1`}
              />
              {errors.email && (
                <p className="absolute -top-7 text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div
              className={`flex my-2 mt-4 w-full bg-[#EBF9FF] rounded relative ${
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
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className={`w-full bg-[#EBF9FF] placeholder:font-medium rounded outline-none p-4 pl-1`}
              />
              <span
                onClick={handleShowPassword}
                className="inline-flex items-center justify-center relative text-slate-400 cursor-pointer"
              >
                <svg
                  width="24px"
                  height="24px"
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
                {showPassword && (
                  <div className="absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="block w-5 h-0.5 bg-[#9F9F9F] transform rotate-45"></span>
                  </div>
                )}
              </span>
              {errors.password && (
                <p className="absolute -top-7 text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between my-6 mt-8 relative">
              {loginCheck && (
                <div className="flex items-center absolute -top-8 bg-red-500 text-white w-full p-1 transition-all ease-in-out duration-1000 rounded">
                  <p className="w-full text-sm text-white">
                    {errorMsg || "Wrong email or password"}
                  </p>
                  <span
                    className="absolute right-0 top-0 cursor-pointer px-2"
                    onClick={handleClose}
                  >
                    x
                  </span>
                </div>
              )}
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={handleKeepLoggedIn}
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={keepLoggedIn}
                  onChange={handleKeepLoggedIn}
                  className="w-6 h-6 form-checkbox rounded-full cursor-pointer"
                />
                <span className="ml-3 font-medium">Keep me logged in</span>
              </div>
              <Link
                to="/forgot-password"
                className=" underline text-[#152B69] cursor-pointer"
              >
                Forget Password
              </Link>
            </div>
            <button
              className="bg-[#FFCD6B] p-3 rounded-full text-lg font-medium cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Log In"}
            </button>
            <div className="flex items-center justify-center my-4 text-lg font-medium">
              Don’t have an account yet?
              <Link to="/signup">
                <span className="ml-2 text-[#152B69] font-medium cursor-pointer">
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
