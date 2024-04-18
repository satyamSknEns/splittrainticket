import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchEngine = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    adults: 1,
    children: 0,
    tripType: "oneWay",
    departureDate: new Date().toISOString().split("T")[0],
    returnDate: "",
  });

  const [cityOptions, setCityOptions] = useState([]);
  const [filteredFromCityOptions, setFilteredFromCityOptions] = useState([]);
  const [filteredToCityOptions, setFilteredToCityOptions] = useState([]);
  const [formErrors, setFormErrors] = useState({
    from: "",
    to: "",
    returnDate: "",
  });

  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/cities",
          { country: "india" }
        );

        setCityOptions(response.data.data);
      } catch (error) {
        console.error(
          "Error fetching data: ",
          error.response ? error.response.data : "Unknown error"
        );
      }
    };

    fetchCitiesData();
  }, [formData]);
  // console.log("formData", formData);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !e.target.closest(".city-options") &&
        !e.target.closest("#from") &&
        !e.target.closest("#to")
      ) {
        setFilteredFromCityOptions([]);
        setFilteredToCityOptions([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    if (name === "from" && value.trim() === "") {
      setFilteredFromCityOptions([]);
    } else if (name === "to" && value.trim() === "") {
      setFilteredToCityOptions([]);
    } else {
      const filteredCities = cityOptions.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );

      if (name === "from") {
        setFilteredFromCityOptions(filteredCities);
      } else if (name === "to") {
        setFilteredToCityOptions(filteredCities);
      }
    }

    if (name === "tripType") {
      setFormData((prevData) => ({
        ...prevData,
        returnDate: prevData.tripType === "return" ? prevData.returnDate : "",
      }));
      validateForm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.from.trim() === "") {
      errors.from = "Please enter the origin station.";
      isValid = false;
    }

    if (formData.to.trim() === "") {
      errors.to = "Please enter the destination station.";
      isValid = false;
    }

    if (formData.tripType === "return" && formData.returnDate.trim() === "") {
      errors.returnDate = "Please select the return date.";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const handleCitySelect = (selectedCity) => {
    setFormData((prevData) => ({ ...prevData, from: selectedCity }));
    setFilteredFromCityOptions([]);
  };

  const handleToCitySelect = (selectedCity) => {
    setFormData((prevData) => ({ ...prevData, to: selectedCity }));
    setFilteredToCityOptions([]);
  };
  const handleSwap = () => {
    setFormData((prevData) => ({
      ...prevData,
      from: formData.to,
      to: formData.from,
    }));
  };

  return (
    <div className="searchEngine max-w-[500px] mx-auto mt-8 p-8 border border-[#D2EBF5] rounded-3xl bg-[#D2EBF5]">
      <form onSubmit={handleSubmit}>
        <div className="mb-1 relative">
          <label
            htmlFor="from"
            className="block text-sm font-semibold text-gray-600 mb-1"
          >
            From
          {((formErrors.from) && (formData.from === "")) && (
            <span className="text-red-500 text-[13px] font-normal ml-2">{formErrors.from}</span>
          )}
          </label>
          <div className="inputfield relative">
            <input
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              placeholder="Enter origin station..."
              className="w-full p-2 border border-gray-300 rounded-md outline-none pl-8"
            />
            <svg
              className="absolute left-1 top-[9px]"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13066 12.3057C3.48209 12.6571 3.83352 12.7677 4.52695 12.7677L12.1307 12.808C12.2009 12.808 12.2609 12.808 12.2914 12.8479C12.3214 12.8779 12.3312 12.9383 12.3312 12.9987L12.3612 20.6127C12.3715 21.3057 12.4821 21.6571 12.8335 22.0086C13.3058 22.4907 13.9688 22.4106 14.4608 21.9284C14.7222 21.667 14.9331 21.2354 15.1238 20.8334L22.8081 4.26014C23.2097 3.41671 23.1595 2.79357 22.7481 2.38171C22.3457 1.98014 21.7229 1.93 20.8795 2.33157L4.30581 10.0159C3.90381 10.2066 3.47223 10.4174 3.21081 10.6789C2.72866 11.1709 2.64852 11.824 3.13066 12.3061"
                fill="#D2EBF5"
              />
            </svg>
          </div>
          {filteredFromCityOptions.length > 0 && (
            <ul className="mt-1 border rounded-md absolute top-16 w-full bg-white max-h-60 overflow-auto z-20 boxShadow">
              {filteredFromCityOptions.map((city) => (
                <li
                  key={city.id}
                  className="p-2 cursor-pointer px-4"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4 relative">
          <span className="absolute right-0 -top-4 z-10 cursor-pointer" onClick={handleSwap}>
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24.2615" cy="24.6118" r="22.7615" fill="#588FD0" stroke="#D2EBF5" strokeWidth="3"/>
              <path d="M26.9282 16.4185L26.9282 26.5585L28.2615 26.5585L28.2615 16.4185L30.7482 18.8918C30.8104 18.9536 30.8841 19.0024 30.9651 19.0357C31.0462 19.0689 31.133 19.0859 31.2206 19.0855C31.3082 19.0852 31.3948 19.0677 31.4757 19.0339C31.5565 19.0001 31.6298 18.9507 31.6915 18.8885C31.7533 18.8263 31.8021 18.7526 31.8354 18.6716C31.8686 18.5905 31.8856 18.5037 31.8852 18.4162C31.8849 18.3286 31.8674 18.2419 31.8336 18.1611C31.7998 18.0803 31.7504 18.0069 31.6882 17.9452L27.5949 13.8718L23.5015 17.9452C23.4314 18.0045 23.3742 18.0776 23.3336 18.16C23.2931 18.2424 23.27 18.3323 23.2658 18.4241C23.2616 18.5159 23.2764 18.6075 23.3093 18.6933C23.3422 18.7791 23.3925 18.8571 23.457 18.9225C23.5215 18.9879 23.5988 19.0393 23.6841 19.0734C23.7694 19.1076 23.8608 19.1237 23.9526 19.1208C24.0445 19.1179 24.1347 19.0961 24.2177 19.0567C24.3007 19.0173 24.3746 18.9612 24.4349 18.8918L26.9282 16.4185Z" fill="#D2EBF5"/>
              <path d="M28.2615 27.9452L28.2615 29.9452L26.9281 29.9452L26.9281 27.9452L28.2615 27.9452Z" fill="#D2EBF5"/>
              <path d="M28.2615 31.2785L28.2615 32.6119L26.9281 32.6119L26.9281 31.2785L28.2615 31.2785Z" fill="#D2EBF5"/>
              <path d="M24.3547 31.2252C24.4169 31.1635 24.4663 31.0901 24.5001 31.0093C24.5339 30.9285 24.5514 30.8418 24.5518 30.7542C24.5521 30.6666 24.5351 30.5798 24.5019 30.4988C24.4686 30.4177 24.4198 30.344 24.358 30.2818C24.2963 30.2197 24.223 30.1703 24.1422 30.1365C24.0613 30.1027 23.9747 30.0851 23.8871 30.0848C23.7995 30.0845 23.7127 30.1014 23.6316 30.1347C23.5506 30.1679 23.4769 30.2168 23.4147 30.2785L20.928 32.7518L20.928 22.6118L19.5947 22.6118L19.5947 32.7518L17.1014 30.2785C17.0411 30.2092 16.9672 30.1531 16.8842 30.1137C16.8012 30.0743 16.711 30.0524 16.6191 30.0496C16.5273 30.0467 16.4359 30.0628 16.3506 30.0969C16.2653 30.131 16.188 30.1824 16.1235 30.2478C16.059 30.3133 16.0087 30.3913 15.9758 30.4771C15.9429 30.5628 15.9281 30.6545 15.9323 30.7462C15.9365 30.838 15.9596 30.9279 16.0001 31.0103C16.0407 31.0928 16.0979 31.1659 16.168 31.2252L20.2614 35.2785L24.3547 31.2252Z" fill="#D2EBF5"/>
              <path d="M20.9282 19.2785L20.9282 21.2785L19.5949 21.2785L19.5949 19.2785L20.9282 19.2785Z" fill="#D2EBF5"/>
              <path d="M20.9282 16.6118L20.9282 17.9452L19.5949 17.9452L19.5949 16.6118L20.9282 16.6118Z" fill="#D2EBF5"/>
            </svg>
          </span>
          <label
            htmlFor="to"
            className="block text-sm font-semibold text-gray-600 mb-1"
          >
            To
          {((formErrors.to) && (formData.to === "")) && (
            <span className="text-red-500 text-[13px] font-normal ml-2">{formErrors.to}</span>
          )}
          </label>
          <div className="inputfield relative">
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              placeholder="Enter destination station..."
              className="w-full p-2 border border-gray-300 rounded-md outline-none pl-8"
            />
            <svg
              className="absolute left-1 top-[9px]"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9292 9.26407C19.9292 8.34482 19.7481 7.43456 19.3964 6.58528C19.0446 5.73601 18.529 4.96433 17.8789 4.31432C17.2289 3.66431 16.4573 3.14869 15.608 2.79691C14.7587 2.44513 13.8485 2.26407 12.9292 2.26407C12.0099 2.26407 11.0997 2.44513 10.2504 2.79691C9.40114 3.14869 8.62946 3.66431 7.97945 4.31432C7.32944 4.96433 6.81383 5.73601 6.46204 6.58528C6.11026 7.43456 5.9292 8.34482 5.9292 9.26407C5.9292 10.6511 6.3382 11.9411 7.0342 13.0291H7.0262L12.9292 22.2641L18.8322 13.0291H18.8252C19.5461 11.9056 19.9293 10.5989 19.9292 9.26407ZM12.9292 12.2641C12.1335 12.2641 11.3705 11.948 10.8079 11.3854C10.2453 10.8228 9.9292 10.0597 9.9292 9.26407C9.9292 8.46842 10.2453 7.70536 10.8079 7.14275C11.3705 6.58014 12.1335 6.26407 12.9292 6.26407C13.7248 6.26407 14.4879 6.58014 15.0505 7.14275C15.6131 7.70536 15.9292 8.46842 15.9292 9.26407C15.9292 10.0597 15.6131 10.8228 15.0505 11.3854C14.4879 11.948 13.7248 12.2641 12.9292 12.2641Z"
                fill="#D2EBF5"
              />
            </svg>
          </div>
          {filteredToCityOptions.length > 0 && (
            <ul className="mt-1 border border-gray-300 rounded-md absolute top-16 w-full bg-white max-h-60 overflow-y-auto z-20">
              {filteredToCityOptions.map((city) => (
                <li
                  key={city.id}
                  className="p-2 cursor-pointer px-4"
                  onClick={() => handleToCitySelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mb-4">
          <div>
            <label className="mr-4 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={formData.tripType === "oneWay"}
                onChange={handleInputChange}
                className="cursor-pointer"
              />
              <span className="ml-2 text-sm leading-tight text-left font-medium">
                One Way
              </span>
            </label>
            <label className="mr-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="return"
                checked={formData.tripType === "return"}
                onChange={handleInputChange}
                className="cursor-pointer"
              />
              <span className="ml-2 text-sm leading-tight text-left font-medium">
                Return
              </span>
            </label>
          {((formErrors.returnDate) && (formData.returnDate === "") && formData.tripType === "return") && (
            <span className="text-red-500 text-[13px]">{formErrors.returnDate}</span>
          )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-4 w-full pr-2">
            <label
              htmlFor="departureDate"
              className="block text-sm font-medium mb-2"
            >
              Departure
            </label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          {formData.tripType === "return" && (
            <div className="mb-4 w-full pl-2">
              <label
                htmlFor="returnDate"
                className="block text-sm font-medium mb-2"
              >
                Return
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
          )}
        </div>
        <p className="w-full mb-2">Passenger Information</p>
        <div className="flex items-center justify-between">
          <div className="mb-4 flex items-center">
            <div className="icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_476_293)">
                  <path
                    d="M9.25572 7.53044C7.22259 7.49897 5.66949 5.86457 5.65573 3.93044C5.68932 1.91545 7.33627 0.344574 9.25572 0.330444C11.2906 0.407394 12.8413 1.96499 12.8557 3.93044C12.8157 5.94703 11.1771 7.51679 9.25572 7.53044ZM12.1664 8.27726C14.7252 8.30713 16.0228 10.5517 16.0346 12.7963V18.3304H13.526L13.5261 13.4666C13.465 13.1304 13.2372 13.0164 13.0286 13.0493C12.8333 13.0802 12.6547 13.2398 12.6452 13.4666V18.3304H5.67514V13.4666C5.62179 13.1466 5.41822 13.0236 5.22018 13.036C5.00811 13.0493 4.80238 13.218 4.79428 13.4666V18.3304H2.32408V12.7963C2.30938 10.4042 3.8226 8.29499 6.21114 8.27726H12.1664Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_476_293">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.179199 0.330444)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <label htmlFor="adults" className="block text-sm font-medium mx-2">
              Adult (16+)
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              min={0}
              max={40}
              className="w-[60px] p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div className="mb-4 flex items-center">
            <div className="icon">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_476_293)">
                  <path
                    d="M9.25572 7.53044C7.22259 7.49897 5.66949 5.86457 5.65573 3.93044C5.68932 1.91545 7.33627 0.344574 9.25572 0.330444C11.2906 0.407394 12.8413 1.96499 12.8557 3.93044C12.8157 5.94703 11.1771 7.51679 9.25572 7.53044ZM12.1664 8.27726C14.7252 8.30713 16.0228 10.5517 16.0346 12.7963V18.3304H13.526L13.5261 13.4666C13.465 13.1304 13.2372 13.0164 13.0286 13.0493C12.8333 13.0802 12.6547 13.2398 12.6452 13.4666V18.3304H5.67514V13.4666C5.62179 13.1466 5.41822 13.0236 5.22018 13.036C5.00811 13.0493 4.80238 13.218 4.79428 13.4666V18.3304H2.32408V12.7963C2.30938 10.4042 3.8226 8.29499 6.21114 8.27726H12.1664Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_476_293">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.179199 0.330444)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <label
              htmlFor="children"
              className="block text-sm font-medium mx-2"
            >
              Children (5-15)
            </label>

            <input
              type="number"
              id="children"
              name="children"
              min={0}
              max={40}
              value={formData.children}
              onChange={handleInputChange}
              className="w-[60px] p-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-lg font-medium bg-[#152B69] hover:bg-[#203f97] transition-all duration-500 ease-in-out text-white p-4 rounded-full w-full"
        >
          Search Now
        </button>
      </form>
    </div>
  );
};

export default SearchEngine;
