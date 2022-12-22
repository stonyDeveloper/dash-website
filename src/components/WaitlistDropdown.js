import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
const WaitlistDropdown = ({toggleDropdown }) => {
  const closeDropDown = () => {
      
  }

  useEffect(() => {
    AOS.init({duration: 100})
  }, [])
  
  return (
    <>
      
        <div
          data-aos="fade-down"
          data-aos-duration="200"
          className="w-[215px] h-[119px] rounded-[5px] bg-[#FFFFFF] px-[16px] py-[13px] absolute top-[46.5%] md:top-[-50px] md:right-[26px] z-50"
          
        >
          <Link to="/individual_waitlist">
            <div
              onClick={toggleDropdown}
              className="individual py-[10px] pl-[21px] rounded-[5px] border-[1px] border-[#F9BC60] cursor-pointer hover:bg-[#F9BC60]"
            >
              Individual
            </div>
          </Link>

          <Link to="/business_waitlist">
            <div
              onClick={toggleDropdown}
              className="business py-[10px] pl-[21px] rounded-[5px] border-[1px] border-[#F9BC60] mt-[6px] cursor-pointer hover:bg-[#F9BC60]"
            >
              Business
            </div>
          </Link>
        </div>
    
    </>
  );
};

export default WaitlistDropdown;
