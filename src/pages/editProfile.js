import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SuccessModal from "../components/successModal";
import { getCookie, setCookie } from "../config/coockies";
import axios from "axios";
import Loader from "../components/loader";
import Layout from "../components/layout";
const EditProfile = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  const [loginCheck, setLoginCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getUser = JSON.parse(getCookie("user"));

  useEffect(() => {
    const userToken = getCookie("token");
    const getUserData = async () => {
      try {
        const response = await axios.get(
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
        if (response.data[0]) {
          setValue("firstName", response.data[0].firstName);
          setValue("lastName", response.data[0].lastName);
          setValue("mobileNumber", response.data[0].mobileNumber);
          setValue("dob", response.data[0].dob);
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
  }, [setValue, getUser.email]);

  const onSubmit = async (data) => {
    console.log("formDaa", data);
    const userToken = getCookie("token");
    const user = JSON.parse(getCookie("user"));
    const expirationTime = 50 * 60;
    try {
      const response = await axios.put(
        `http://localhost:8080/users/edituser/${user.email}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log("Successfully Updated:", response.data);
      if (response.data) {
        // navigate("/profile");
        setCookie(
          "user",
          JSON.stringify(response?.data?.updatedUser),
          expirationTime
        );
        setLoginCheck(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error(
        "SignUp failed:",
        error.response ? error.response.data : error.message
      );
      console.log(
        "error.response.data",
        error.response?.data?.error?.errors?.mobileNumber?.message
      );
      setLoginCheck(true);
      setSuccessModal(false);
      setErrorMsg(
        error.response?.data?.error?.errors?.mobileNumber?.message ||
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
    navigate("/profile");
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
                  <h1 className=" text-left font-medium text-2xl sm:text-4xl my-6 text-white">
                    Lorem ipsum, or lipsum as it is sometimes known
                  </h1>
                  <img
                    src="/assets/images/login-banner.png"
                    alt="login banner"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-2xl sm:w-[60%] w-full pb-8 sm:pb-0">
                <h3 className=" text-2xl sm:text-4xl font-bold my-8">Edit Profile</h3>
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
                        className={`flex my-3 w-full bg-[#EBF9FF] ml-2 rounded relative ${
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
                message="Success! Your profile has been updated."
                closeModal={handleCloseModal}
              />
            )}
          </section>
        </Layout>
      )}
    </>
  );
};

export default EditProfile;
