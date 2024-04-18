import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const VerificationCode = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("formData", data);
    try {
      const response = await axios.post("http://localhost:8080/auth/verify", {
        data
      });
      if (response.data) {
        console.log(response.data);
        navigate("/reset-password");
      }
      console.log(
        "Verification code send on mail successfully:",
        response.data
      );
    } catch (error) {
      console.error(
        "Failed to send code:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <section className="p-8 text-center bg-[#152B69]">
      <div className="flex">
        <div className="flex flex-col items-start w-1/2">
          <div className="flex items-center justify-center rounded-full bg-[#FFCD6B] p-3 w-24 h-24">
            <img src="/assets/header-logo.png" alt="logo" />
          </div>
          <div className="flex flex-col items-start my-6">
            <h1 className=" text-left font-medium text-4xl my-6 text-white">
              Lorem ipsum, or lipsum as it is sometimes known
            </h1>
            <img src="/assets/images/login-banner.png" alt="login banner" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl w-1/2">
          <h3 className=" text-4xl font-bold my-8">Verification</h3>
          <p className="w-[75%] my-2 text-slate-400">
            Enter the verfication code received on your email
          </p>
          <form
            className="flex flex-col w-[75%] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className={`flex my-2 mt-6 w-full bg-[#EBF9FF] rounded relative ${
                errors.code
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            >
              <input
                type="text"
                {...register("code", { required: "Please Enter Code" })}
                placeholder="Enter Code"
                className={`w-full bg-[#EBF9FF] placeholder:font-medium rounded outline-none p-4`}
              />
              {errors.code && (
                <p className="absolute -top-7 text-red-500 text-sm mt-1">
                  {errors.code.message}
                </p>
              )}
            </div>
            <button
              className="bg-[#FFCD6B] p-3 rounded-full text-lg font-medium cursor-pointer my-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Verify"}
            </button>
            <div className="flex items-center justify-center my-4 text-lg font-medium">
              Go back to
              <Link to="/login">
                <span className="ml-2 text-[#152B69] font-medium cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VerificationCode;
