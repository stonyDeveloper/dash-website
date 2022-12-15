import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
const WaitlistDropdown = ({ showDropdown, toggleDropdown }) => {
  const closeDropDown = () => {
      
  }

  useEffect(() => {
    AOS.init({duration: 500})
  }, [])
  
  return (
   
    <>
      {showDropdown && (
        <div data-aos="fade-down" className="w-[215px] h-[119px] rounded-[5px] bg-[#FFFFFF] px-[16px] py-[13px] absolute top-[-40px] right-[26px]">
          <Link to="/individual_waitlist">
            <div onClick={toggleDropdown} className="individual py-[10px] pl-[21px] rounded-[5px] border-[1px] border-[#F9BC60] cursor-pointer">
              Individual
            </div>
          </Link>

          <Link to="/business_waitlist">
            <div onClick={toggleDropdown} className="business py-[10px] pl-[21px] rounded-[5px] border-[1px] border-[#F9BC60] mt-[6px] cursor-pointer">
              Business
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default WaitlistDropdown;
