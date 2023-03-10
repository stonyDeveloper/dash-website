import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashLogo from "../assets/Full-logo.png";
import FineBoy from "../assets/fineboy1.png";
import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import SubmissionSuccessful from "../components/SubmissionSuccessful";
import Loader from "../components/Loader";
import InputFieldDropdown from "../components/InputFieldDropdown";

const IndividualWaitlist = ({ setShowDropdown, setFooterDropdown }) => {
  // const genders = [
  //   { value: "male", label: "Male" },
  //   { value: "female", label: "Female" },
  // ];

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("Gender");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [stateOfResidence, setStateOfResidence] = useState("");
  const [showSuccessfulModal, setShowSuccessfulModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [genderDropdown, setGenderDropdown] = useState(false);

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

  const navigate = useNavigate();

  const addToWaitlist = async (userinfo) => {
    setLoading(true);
    setShowSuccessfulModal(false);
    await axios.post(
      `https://api.apispreadsheets.com/data/tStBtA86QoyJzTG6/`,
      userinfo
    );
    // console.log(res)
    setLoading(false);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setShowSuccessfulModal(true);

    setTimeout(() => {
      // setShowSuccessfulModal(false)
      navigate("/");
    }, 3000);

    // alert("Submission Successful. Thank you for joining our waiting list");
    // console.log(res);

    // setTasks([...tasks, data]);
  };

  const handleChange = (e) => {
    if (e.target.id === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.id === "gender") {
      setGender(e.target.value);
    } else if (e.target.id === "phoneNumber") {
      setPhoneNumber(e.target.value);
    } else if (e.target.id === "stateOfResidence") {
      setStateOfResidence(e.target.value);
    } else if (e.target.id === "emailAddress") {
      setEmailAddress(e.target.value);
    }

    if (
      fullName &&
      gender !== "Gender" &&
      phoneNumber &&
      emailAddress &&
      stateOfResidence
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

    console.log(userInfo);
  };

  const toggleGenderDropdown = () => {
    setGenderDropdown((prevGenderDropdown) => !prevGenderDropdown);
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="individual-waitlist pt-[19px] pb-[47px] relative"
      data-aos="fade-in"
    >
      <div className="flex items-center justify-between pr-[17px]">
        <Link
          to="/"
          className="rectangle bg-[#FFFFFF] md:w-1/6 flex justify-center items-center py-[7px] md:h-[75px] h-[48px] w-[120px] rounded-r-full md:max-w-[217px]"
        >
          <img className="w-[60%]" src={DashLogo} alt="logo" />
        </Link>

        <p
          onClick={() => navigate(-1)}
          className="text-[#F9BC60] font-[400] text-[16px] leading-[20.16px] md:text-[20px] md:leading-[25.2px] underline pr-[16px] cursor-pointer"
        >
          Go back
        </p>
      </div>

      <div className="flex justify-center">
        {showSuccessfulModal && <SubmissionSuccessful />}
      </div>

      <div className="relative lg:grid lg:grid-cols-2 place-items-center lg:mt-[-20px]">
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
              id="fullName"
              onChange={handleChange}
              required
            />
            {/* <select
              className="select py-[14px] px-[16px] rounded-[10px] text-[#001E1D] min-h-[50px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              name="gender"
              id="gender"
              value={gender}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male" className="text-black">
                Male
              </option>
              <option value="female">Female</option>
            </select> */}
            <div className="relative md:w-[80%] w-full">
              <div
                onClick={toggleGenderDropdown}
                className={`w-full  py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] bg-white ${gender === "Gender" ? "text-[#9BA3AF]" : "text-black" } flex items-center justify-between`}
              >
                <p>{gender}</p>
                <i class="fa fa-angle-down"></i>
              </div>
              {genderDropdown && (
                <div className="absolute top-[55px] w-[101%]">
                  <InputFieldDropdown dropdownList={["Male", "Female"]} setGender={setGender} gender={gender} toggleGenderDropdown={toggleGenderDropdown} />
                </div>
              )}
            </div>

            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="number"
              placeholder="Phone No"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              required
            />
            <input
              className="w-full py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px] md:w-[80%]"
              type="email"
              placeholder="Email Address"
              id="emailAddress"
              value={emailAddress}
              onChange={handleChange}
              required
            />
            <input
              className="w-full md:w-[80%] py-[16px] px-[19px] rounded-[10px] font-[500] text-[16px] leading-[20px]"
              type="text"
              placeholder="State of Residence"
              id="stateOfResidence"
              value={stateOfResidence}
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

export default IndividualWaitlist;
