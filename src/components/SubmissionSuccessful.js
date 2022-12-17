import React from "react";
import CheckIcon from "../assets/submissionSuccessful.png"

const SubmissionSuccessful = () => {
  return (
    <div className="flex items-center gap-[13px] py-[26px] pl-[48px] pr-[29px] bg-[#ABD1C6] w-fit rounded-[5px]">
      <img className="w-[24px] h-[24px]" src={CheckIcon} alt="icon" />
      <p className="font-[500] text-[#001E1D] text-[16px] leading-[20.16px]">
        Submission Successful. Thank you for joining our waiting list
      </p>
    </div>
  );
};

export default SubmissionSuccessful;
