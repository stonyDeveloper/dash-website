import React from "react";
import DashLogo from "../assets/Full-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Bike from "../assets/bike-final.png";
import Select from "react-select";
import { useState } from "react";
import SubmissionSuccessful from "../components/SubmissionSuccessful";

const BusinessWaitlist = ({setShowDropdown, setFooterDropdown}) => {
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState("");
  const [businessSector, setBusinessSector] = useState("");
  const [bikeNumber, setBikeNumber] = useState("");
  const [location, setLocation] = useState("");

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
    console.log(businessInfo);
  };

  const navigate = useNavigate();

  return (
    <div className="pt-[19px]">
      <div className="flex items-center justify-between pr-[51px]">
        <div className="rectangle bg-[#FFFFFF] w-1/6 flex justify-center items-center py-[7px] md:h-[75px] rounded-r-full md:max-w-[217px]">
          <img className="w-[60%]" src={DashLogo} alt="logo" />
        </div>

        <p
          onClick={() => {
            navigate(-1)
          }}
          className="text-[#F9BC60] font-[400] text-[16px] leading-[20.16px] md:text-[20px] md:leading-[25.2px] underline pr-[16px] cursor-pointer"
        >
          Go back
        </p>
      </div>

      <div>
        <SubmissionSuccessful />
      </div>

      <div className="lg:grid lg:grid-cols-2 place-items-center lg:mt-[-20px]">
        <img src={Bike} alt="bike" className="mx-auto lg:w-[50%]" />

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
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="email"
              placeholder="Business email"
              value={businessEmail}
              onChange={(e) => setBusinessEmail(e.target.value)}
            />
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="number"
              placeholder="Phone No"
              value={businessPhoneNumber}
              onChange={(e) => setBusinessPhoneNumber(e.target.value)}
            />
            <select
              className="select py-[14px] px-[16px] rounded-[10px] text-[#001E1D] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              name="businessSector"
              id=""
              value={businessSector}
              onChange={(e) => setBusinessSector(e.target.value)}
            >
              <option value="" disabled selected>
                Business Sector
              </option>
              <option value="male" className="text-black">
                Male
              </option>
              <option value="female">Female</option>
            </select>
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="text"
              placeholder="Number of bikes owned"
              value={bikeNumber}
              onChange={(e) => setBikeNumber(e.target.value)}
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="text"
              placeholder="Business location (State)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="submit"
              value="Submit"
              className="font-[500] md:w-[80%] text-[20px] leading-[25px] py-[13px] rounded-[10px] mt-[20px] bg-[#F9BC60]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessWaitlist;
