import React from 'react'
import DashLogo from "../assets/Full-logo.png";
import { Link } from 'react-router-dom';
import AboutImage from '../assets/about-us.png'
import TextLogo from '../assets/about-us-text-icon.png'

const AboutUs = () => {
  return (
    <>
     <div className='bg-[#FFFFFF]'>
        <div className="pt-[26px] flex items-center justify-between">
        <Link
          to="/"
          className="rectangle bg-[#FFFFFF] md:w-1/6 flex justify-center items-center py-[7px] h-[48px] w-[120px] md:h-[75px] rounded-r-full md:max-w-[217px]"
        >
          <img className="w-[60%]" src={DashLogo} alt="logo" />
        </Link>

        <Link to="/">
          <p className="text-[#F9BC60] font-[500] text-[18px] leading-[22.68px] md:text-[20px] md:leading-[25.2px] pr-[16px] cursor-pointer">
            Home
          </p>
        </Link>
      </div>

      <h2 className='font-[600] text-[32px] leading-[44.8px] text-[#001E1D] mt-[35px] text-center pb-[33px]'>What is Daash?</h2>
    </div>
    <div>
        <img className='w-full' src={AboutImage} alt="packagedelivery" />
    </div>
    <div className="about-us-texts pt-[33px] px-[21px] text-left text-[#FFFFFE] pb-[30px]">
        <div className='flex flex-col gap-[18px]'>
            <img className='w-[69px] h-[48px]' src={TextLogo} alt="icon" />
            <p className='font-[400] text-[20px] leading-[28px]'>Daash is an on-demand aggregator company that aggregates logistics partners and their assets (Dispatch bikes) with senders (End users) into a single platform where they can transact business. </p>

        </div>
        <div className='flex flex-col gap-[18px] mt-[45px]'>
            <img className='w-[69px] h-[48px]' src={TextLogo} alt="icon" />
            <p className='font-[400] text-[20px] leading-[28px]'>More specifically, Daash is a transportation logistics company and technology provider with a mobile app that allows senders (End users) to request for a delivery and dispatch riders to charge fares and get paid. Independent contractors as drivers. </p>

        </div>
        <div className='flex flex-col gap-[18px] mt-[45px]'>
            <img className='w-[69px] h-[48px]' src={TextLogo} alt="icon" />
            <p className='font-[400] text-[20px] leading-[28px]'>Daash aims to be one of the many services that will contribute to the sharing economy, supplying a means of connecting existing resources instead of providing the physical resources.</p>

        </div>
    </div>
    </>
   
  )
}

export default AboutUs