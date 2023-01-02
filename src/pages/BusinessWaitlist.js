import React from "react";
import DashLogo from "../assets/Full-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Bike from "../assets/bike-final.png";
import { useState, useEffect } from "react";
import SubmissionSuccessful from "../components/SubmissionSuccessful";
import axios from "axios";
import Loader from "../components/Loader";
import InputFieldDropdown from "../components/InputFieldDropdown";
import AOS from 'aos'

const BusinessWaitlist = ({ setShowDropdown, setFooterDropdown }) => {
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState("");
  const [businessSector, setBusinessSector] = useState("Sector");
  const [bikeNumber, setBikeNumber] = useState("");
  const [location, setLocation] = useState("");
  const [showSuccessfulModal, setShowSuccessfulModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [sectorDropdown, setSectorDropdown] = useState(false);

  const businessInfo = {
    businessName,
    businessEmail,
    businessPhoneNumber,
    businessSector,
    bikeNumber,
    location,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToWaitlist(businessInfo);
    console.log(businessInfo);
    setBusinessName("");
    setBusinessEmail("");
    setBusinessPhoneNumber("");
    setBusinessSector("");
    setBikeNumber("");
    setLocation("");
  };

  const addToWaitlist = async (businessInfo) => {
    setLoading(true);
    setShowSuccessfulModal(false);
    await axios.post(
      `https://api.apispreadsheets.com/data/zpuHy9NspsZGJ7QG/`,
      businessInfo
    );
    // console.log(res)
    setLoading(false);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setShowSuccessfulModal(true);

    setTimeout(() => {
      setShowSuccessfulModal(false);
      navigate("/");
    }, 3000);
  };

  const handleChange = (e) => {
    if (e.target.id === "businessName") {
      setBusinessName(e.target.value);
    } else if (e.target.id === "businessEmail") {
      setBusinessEmail(e.target.value);
    } else if (e.target.id === "businessPhoneNumber") {
      setBusinessPhoneNumber(e.target.value);
    } else if (e.target.id === "businessSector") {
      setBusinessSector(e.target.value);
    } else if (e.target.id === "bikeNumber") {
      setBikeNumber(e.target.value);
    } else if (e.target.id === "location") {
      setLocation(e.target.value);
    }

    if (
      businessName &&
      businessEmail &&
      businessPhoneNumber &&
      businessSector &&
      bikeNumber &&
      location
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

    console.log(businessInfo);
  };

  const navigate = useNavigate();

  const toggleSectorDropdown = () => {
    setSectorDropdown(prevSectorDropdown => !prevSectorDropdown)
  }

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="business-waitlist pt-[19px] pb-[100px]" data-aos="fade-in">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="rectangle bg-[#FFFFFF] md:w-1/6 flex justify-center items-center py-[7px] md:h-[75px] h-[48px] w-[120px] rounded-r-full md:max-w-[217px]"
        >
          <img className="w-[60%]" src={DashLogo} alt="logo" />
        </Link>

        <p
          onClick={() => {
            navigate(-1);
          }}
          className="text-[#F9BC60] font-[400] text-[16px] leading-[20.16px] md:text-[20px] md:leading-[25.2px] underline pr-[16px] cursor-pointer"
        >
          Go back
        </p>
      </div>

      <div className="flex justify-center">
        {showSuccessfulModal && <SubmissionSuccessful />}
      </div>

      <div className="lg:grid lg:grid-cols-2 place-items-center mt-[30px] lg:mt-[-20px]">
        <img src={Bike} alt="bike" className="mx-auto mt-[100px] w-[70%] lg:w-[60%]" />

        <div className="container px-[20px] md:px-[70px] lg:px-[0]  mt-[7px] m-auto">
          <h1 className="text-white font-[500] text-[32px] leading-[35.2px] md:text-center lg:text-left lg:text-[3rem] lg:leading-[70.4px]">
            Be the first to know <br /> when we launch
          </h1>

          <form
            className="input-fields mt-[40px] grid gap-[6px] md:gap-[12px] md:flex md:flex-col md:justify-center md:items-center lg:items-start"
            onSubmit={onSubmit}
          >
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="text"
              placeholder="Business name"
              value={businessName}
              id="businessName"
              onChange={handleChange}
              required
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="email"
              placeholder="Business email"
              value={businessEmail}
              id="businessEmail"
              onChange={handleChange}
              required
            />
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="text"
              placeholder="Phone No"
              value={businessPhoneNumber}
              id="businessPhoneNumber"
              onChange={handleChange}
              required
            />
            {/* <select
              className="select py-[14px] px-[16px] rounded-[10px] text-[#001E1D] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              name="businessSector"
              value={businessSector}
              id="businessSector"
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Business Sector
              </option>
              <option value="agriculture produce" className="text-black">
                Agriculture produce
              </option>
              <option value="food">Food</option>
              <option value="health and cold chain">Health and Cold chain</option>
              <option value="bank cards/bank products">Bank cards/Bank products</option>
            </select> */}

            <div className="relative md:w-[80%] w-full">
              <div
                onClick={toggleSectorDropdown}
                className={`w-full  py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] bg-white ${
                  businessSector === "Sector" ? "text-[#9BA3AF]" : "text-black"
                } flex items-center justify-between`}
              >
                <p>{businessSector}</p>
                <i class="fa fa-angle-down"></i>
              </div>
              {sectorDropdown && (
                <div className="absolute top-[55px] w-[101%]">
                  <InputFieldDropdown
                    dropdownList={["Agriculture produce", "Food", "Health and Cold chain", "Bank cards/Bank products"]}
                    setGender={setBusinessSector}
                    gender={businessSector}
                    toggleGenderDropdown={toggleSectorDropdown}
                  />
                </div>
              )}
            </div>
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="text"
              placeholder="Number of bikes owned"
              value={bikeNumber}
              id="bikeNumber"
              onChange={handleChange}
              required
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="text"
              placeholder="Business location (State)"
              value={location}
              id="location"
              onChange={handleChange}
              required
            />

            <input
              type="submit"
              value="Submit"
              className={`font-[500] md:w-[80%] text-[20px] leading-[25px] py-[13px] rounded-[10px] cursor-pointer mt-[20px] ${
                buttonDisabled ? "bg-[#9D9485]" : "bg-[#F9BC60]"
              }`}
              disabled={buttonDisabled}
            />
          </form>
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default BusinessWaitlist;
