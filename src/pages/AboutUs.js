import React from "react";
import DashLogo from "../assets/Full-logo.png";
import { Link } from "react-router-dom";
import AboutImage from "../assets/about-us.png";
import AboutMd from "../assets/aboutMdImage.png";
import TextLogo from "../assets/about-us-text-icon.png";
import WaitlistDropdown from "../components/WaitlistDropdown";
import InstagramIcon from "../assets/instagramIcon.png";
import TwitterIcon from "../assets/twitterIcon.png";

const AboutUs = ({ showDropdown, toggleDropdown, setShowDropdown, footerDropdown, toggleFooterDropdown, setFooterDropdown }) => {
  const closeNavDropdown = () => {
    if (showDropdown === true){
      setShowDropdown(false)
    }
  }

  const closeFooterDropdown = () => {
    if (footerDropdown === true){
      setFooterDropdown(false)
    }
  }

  const closeDropdowns = () => {
    closeNavDropdown()
    closeFooterDropdown()
  }
  return (
    <>
    <div onClick={closeDropdowns}>
      <div className="bg-[#FFFFFF] relative">
        <div className="pt-[26px] flex items-center justify-between pr-[30px]">
          <Link
            to="/"
            className="rectangle bg-[#FFFFFF] md:w-1/6 flex justify-center items-center py-[7px] h-[48px] w-[120px] md:h-[75px] rounded-r-full md:max-w-[217px]"
          >
            <img className="w-[60%]" src={DashLogo} alt="logo" />
          </Link>

          <Link to="/" className="md:hidden">
            <p className="text-[#F9BC60] font-[500] text-[18px] leading-[22.68px] md:text-[20px] md:leading-[25.2px] pr-[16px] cursor-pointer">
              Home
            </p>
          </Link>
          <button
            className="hidden md:block bg-[#F9BC60]  py-[15px] px-[22px] rounded-[10px] text-[20px] font-[500] hover:bg-[#ac8a58]"
            onClick={toggleDropdown}
          >
            <span className="mr-[16px] cursor-pointer">Join the waitlist</span>
            {!showDropdown && <i class="fa fa-angle-down animate-fade"></i>}
            {showDropdown && <i class="fa fa-angle-up animate-fade"></i>}
          </button>
        </div>
        <div className="top-[700px] hidden md:block">
          {showDropdown && (
            <WaitlistDropdown
              mdTop="md:top-[100px]"
              mdRight="md:right-[24px]"
              toggleDropdown={toggleDropdown}
            />
          )}
        </div>

        <div className="md:flex md:justify-between px-[50px] md:items-center mt-[60px]">
          <h2 className="font-[600] text-[32px] leading-[44.8px] text-[#001E1D] mt-[35px] text-center pb-[33px] md:font-[600] md:text-[96px] md:leading-[104.4px] md:text-left ">
            What is Daash?
          </h2>
          <div className="hidden md:block">
            <img className="w-full" src={AboutMd} alt="packagedelivery" />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <img className="w-full" src={AboutImage} alt="packagedelivery" />
      </div>
      <div className="cards bg-white pt-[161px] hidden xl:flex px-[50px] gap-[22px]">
        <div className="card bg-[#004643] w-fit pt-[47px] pr-[55px] pl-[30px] rounded-[10px] h-[450px]">
          <img className="w-[69px]" src={TextLogo} alt="" />
          <p className="font-[400] text-[24px]  leading-[33.6px] text-[#FFFFFE] mt-[22px]">
            Daash is an on-demand aggregator company that aggregates logistics
            partners and their assets (Dispatch bikes) with senders (End users)
            into a single platform where they can transact business.{" "}
          </p>
        </div>
        <div className="card bg-[#004643] w-fit pt-[47px] pr-[55px] pl-[30px] rounded-[10px] h-[450px]">
          <img className="w-[69px]" src={TextLogo} alt="" />
          <p className="font-[400] text-[24px]  leading-[33.6px] text-[#FFFFFE] mt-[22px]">
            More specifically, Daash is a transportation logistics company and
            technology provider with a mobile app that allows senders (End
            users) to request for a delivery and dispatch riders to charge fares
            and get paid. Independent contractors as drivers.{" "}
          </p>
        </div>
        <div className="card bg-[#004643] w-fit pt-[47px] pr-[55px] pl-[30px] rounded-[10px] h-[450px]">
          <img className="w-[69px]" src={TextLogo} alt="" />
          <p className="font-[400] text-[24px] leading-[33.6px] text-[#FFFFFE] mt-[22px]">
            Daash aims to be one of the many services that will contribute to
            the sharing economy, supplying a means of connecting existing
            resources instead of providing the physical resources.{" "}
          </p>
        </div>
      </div>
      <div className="about-us-texts pt-[33px] px-[21px] text-left text-[#FFFFFE] pb-[30px] xl:hidden">
        <div className="flex flex-col gap-[18px]">
          <img className="w-[69px] h-[48px]" src={TextLogo} alt="icon" />
          <p className="font-[400] text-[20px] leading-[28px]">
            Daash is an on-demand aggregator company that aggregates logistics
            partners and their assets (Dispatch bikes) with senders (End users)
            into a single platform where they can transact business.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[18px] mt-[45px]">
          <img className="w-[69px] h-[48px]" src={TextLogo} alt="icon" />
          <p className="font-[400] text-[20px] leading-[28px]">
            More specifically, Daash is a transportation logistics company and
            technology provider with a mobile app that allows senders (End
            users) to request for a delivery and dispatch riders to charge fares
            and get paid. Independent contractors as drivers.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[18px] mt-[45px]">
          <img className="w-[69px] h-[48px]" src={TextLogo} alt="icon" />
          <p className="font-[400] text-[20px] leading-[28px]">
            Daash aims to be one of the many services that will contribute to
            the sharing economy, supplying a means of connecting existing
            resources instead of providing the physical resources.
          </p>
        </div>
      </div>

      <div className="blank bg-white h-[249px]"></div>

      <div className="footer">
        <div className="footer-box text-center md:text-left w-[319px] h-[250px] md:w-[700px] lg:w-[886px]   bg-[#ABD1C6] rounded-[10px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between mt-[-130px] md:pl-[68.5px] md:pr-[50.5px]">
          <h1 className="font-[600] text-[32px] text-[#001E1D]">
            Built Just For You. <br /> Join The Team
          </h1>
          <div className="relative">
            <button
              className="bg-[#F9BC60] mt-[25px]  py-[15px] px-[22px] rounded-[10px] text-[20px] font-[500] hover:bg-[#ac8a58]"
              onClick={toggleFooterDropdown}
            >
              <span className="mr-[16px] cursor-pointer">
                Join the waitlist
              </span>
              {!footerDropdown && <i class="fa fa-angle-down animate-fade"></i>}
              {footerDropdown && <i class="fa fa-angle-up animate-fade"></i>}
            </button>
            {footerDropdown && (
              <div className="absolute top-[105%] left-[0]">
                <WaitlistDropdown toggleDropdown={toggleFooterDropdown} />
              </div>
            )}
          </div>
        </div>

        <div className="footer-links flex pt-[53px] justify-center gap-[55px] pb-[65px]">
          <div className="flex flex-col gap-[16px]">
            <p className="font-[500] text-[16px] leading-[20.16px] text-[#FFFFFE]">
              Company
            </p>
            <Link
              to="/about_us"
              >
            <p className="font-[400] text-[16px] leading-[20.16px] text-[#ABD1C6]">
              About us
            </p>
            </Link>
          </div>

          <div className="flex flex-col gap-[16px]">
            <p className="font-[500] text-[16px] leading-[20.16px] text-[#FFFFFE]">
              Connect with us
            </p>
            <div className="flex gap-[10px]">
              <img src={InstagramIcon} alt="instagramIcon" />
              <img src={TwitterIcon} alt="twitterIcon" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutUs;
