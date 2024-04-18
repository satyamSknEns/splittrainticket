import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SuccessModal from "../components/successModal";
import { setCookie } from "../config/coockies";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const onSubmit = async (data) => {
    console.log("formDaa", data);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signUp",
        data
      );
      console.log("Successfully SignUp:", response.data);
      if (response.data) {
        const token = response?.data?.token;
        const expirationTime = 50 * 60;
        const { firstName, lastName, email } = data;
        const user = { firstName, lastName, email };
        setCookie("user", JSON.stringify(user), expirationTime);
        setCookie("token", token, expirationTime);
        reset();
        setLoginCheck(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error(
        "SignUp failed:",
        error.response ? error.response.data : error.message
      );
      console.log("error.response.", error.response);
      setLoginCheck(true);
      setSuccessModal(false);
      setErrorMsg(
        error.response?.data?.errors?.email?.message ||
          error.response?.data?.errors?.mobileNumber?.message ||
          error.response?.data?.errors?.confirmPassword?.message ||
          error.response?.data?.message ||
          error.message ||
          "Network Error"
      );
    }
  };
  const handleClose = () => {
    setLoginCheck(false);
  };
  const handleCloseModal = () => {
    setSuccessModal(false);
    // navigate("/login");
    navigate("/");
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <section className="p-4 sm:p-8 text-center bg-[#152B69]">
      <div className="sm:hidden flex flex-col items-start sm:my-6">
        <h1 className="flex text-left font-medium text-2xl my-6 text-white">
          Lorem ipsum, or lipsum as it is sometimes known
        </h1>
        <img src="/assets/images/login-banner.png" alt="login banner" />
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="flex flex-col items-start sm:w-[40%] w-full order-last sm:order-none">
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
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl sm:w-[60%] w-full">
          <h3 className=" text-4xl font-bold my-8">
            Sign up into your account
          </h3>
          <div className="flex flex-col w-[90%] sm:w-[80%] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex sm:flex-row flex-col items-center justify-between">
                <div
                  className={`flex my-3 w-full bg-[#EBF9FF] sm:mr-2 rounded relative ${
                    errors.firstName
                      ? "border border-red-500"
                      : "border border-transparent"
                  }`}
                >
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    placeholder="First Name"
                    className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                  />
                  {errors.firstName && (
                    <p className="absolute -top-7 text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div
                  className={`flex my-3 w-full bg-[#EBF9FF] sm:ml-2 rounded relative ${
                    errors.lastName
                      ? "border border-red-500"
                      : "border border-transparent"
                  }`}
                >
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    placeholder="Last Name"
                    className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                  />
                  {errors.lastName && (
                    <p className="absolute -top-7 text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`flex my-3 w-full bg-[#EBF9FF] rounded relative ${
                  errors.email
                    ? "border border-red-500"
                    : "border border-transparent"
                }`}
              >
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Email address"
                  className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                />
                {errors.email && (
                  <p className="absolute -top-7 text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex sm:flex-row flex-col items-center justify-between">
                <div
                  className={`flex my-3 w-full bg-[#EBF9FF] sm:mr-2 rounded relative ${
                    errors.mobileNumber
                      ? "border border-red-500"
                      : "border border-transparent"
                  }`}
                >
                  <input
                    type="text"
                    {...register("mobileNumber", {
                      required: "Mobile is required",
                      minLength: {
                        value: 10,
                        message: "Not a valid mobile number",
                      },
                    })}
                    placeholder="Mobile Number"
                    className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                  />
                  {errors.mobileNumber && (
                    <p className="absolute -top-7 text-red-500 text-sm mt-1">
                      {errors.mobileNumber.message}
                    </p>
                  )}
                </div>
                <div
                  className={`flex my-3 w-full bg-[#EBF9FF] sm:ml-2 rounded relative ${
                    errors.dob
                      ? "border border-red-500"
                      : "border border-transparent"
                  }`}
                >
                  <input
                    type="date"
                    {...register("dob", { required: "DOB is required" })}
                    placeholder="Date of birth"
                    className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                  />
                  {errors.dob && (
                    <p className="absolute -top-7 text-red-500 text-sm mt-1">
                      {errors.dob.message}
                    </p>
                  )}
                </div>
              </div>
              <div
                className={`flex my-3 w-full bg-[#EBF9FF] rounded relative ${
                  errors.password
                    ? "border border-red-500"
                    : "border border-transparent"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="Password"
                  className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
                />
                <span
                  onClick={handlePassword}
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
                  {showPassword && (
                    <div className="absolute top-1/2 left-[10px] transform -translate-x-1/2 -translate-y-1/2">
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
              <div
                className={`flex my-3 mt-6 w-full bg-[#EBF9FF] rounded relative ${
                  errors.confirmPassword
                    ? "border border-red-500"
                    : "border border-transparent"
                }`}
              >
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    minLength: {
                      value: 8,
                      message: "This must be matched the password",
                    },
                  })}
                  placeholder="Confirm Password"
                  className="w-full bg-[#EBF9FF] rounded outline-none p-4 pl-3"
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
                  <p className="absolute -top-7 text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className=" relative">
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
              <div className="bg-[#FFCD6B] rounded-full text-lg font-medium cursor-pointer mt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="p-3 w-full rounded-full"
                >
                  {isSubmitting ? "Loading..." : "Sign Up"}
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center my-4 text-lg font-medium">
              Already have account?
              <Link to="/login">
                <span className="ml-2 text-[#152B69] font-medium cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {successModal && (
        <SuccessModal
          message="Success! Your account has been created."
          closeModal={handleCloseModal}
        />
      )}
    </section>
  );
};

export default SignUp;
