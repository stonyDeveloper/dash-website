import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DashLogo from "../assets/Full-logo.png";
import FineBoy from "../assets/fineboy1.png";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import SubmissionSuccessful from "../components/SubmissionSuccessful";

const IndividualWaitlist = () => {
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [showSuccessfulModal, setShowSuccessfulModal] = useState(false)

  const userInfo = {
    fullName,
    gender,
    phoneNumber,
    emailAddress,
    stateOfResidence,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToWaitlist(userInfo);
    setFullName("");
    setGender("");
    setPhoneNumber("");
    setEmailAddress("");
    setStateOfResidence("");
    // console.log(userInfo)
  };

  const addToWaitlist = async (userinfo) => {
    setShowSuccessfulModal(false)
    const res = axios.post(
      `https://sheet.best/api/sheets/f86a73c5-605b-478b-9810-4b9e67a4a835`,
      userinfo
    );
    setShowSuccessfulModal(true)

    setTimeout(() => {
      setShowSuccessfulModal(false)
    }, 5000)

    // alert("Submission Successful. Thank you for joining our waiting list");
    // console.log(res);

    // setTasks([...tasks, data]);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="individual-waitlist pt-[19px]" data-aos="fade-in">
      <div className="flex items-center justify-between pr-[51px]">
        <Link
          to="/"
          className="rectangle bg-[#FFFFFF] w-1/6 flex justify-center items-center py-[7px] md:h-[75px] rounded-r-full md:max-w-[217px]"
        >
          <img className="w-[60%]" src={DashLogo} alt="logo" />
        </Link>

        <Link to="/">
          <p className="text-[#F9BC60] font-[400] text-[16px] leading-[20.16px] md:text-[20px] md:leading-[25.2px] underline pr-[16px] cursor-pointer">
            Go back
          </p>
        </Link>
      </div>

      <div>{showSuccessfulModal && <SubmissionSuccessful />}</div>

      <div className="lg:grid lg:grid-cols-2 place-items-center lg:mt-[-20px]">
        <img src={FineBoy} alt="fineboy" className="mx-auto lg:w-[80%]" />

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
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <select
              className="select py-[14px] px-[16px] rounded-[10px] text-[#001E1D] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              name="gender"
              id=""
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male" className="text-black">
                Male
              </option>
              <option value="female">Female</option>
            </select>

            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="text"
              placeholder="Phone No"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="text"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="text"
              placeholder="State of Residence"
              value={stateOfResidence}
              onChange={(e) => setStateOfResidence(e.target.value)}
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

export default IndividualWaitlist;
