import React from 'react'

const InputFieldDropdown = ({dropdownList, setGender, gender, toggleGenderDropdown}) => {
  // const dropdownList = ["Male", "Female"]
  const chooseGender = (item) => {
    console.log("working")
    setGender(item)
    toggleGenderDropdown()
  }
  return (
    <div className='drop bg-white px-[16px] py-[13px] rounded-[5px]'>
        {dropdownList.map((item, index) => 
          <div onClick={() => chooseGender(item)} className='font-[400] text-[16px] text-[black] leading-[20.16px] py-[10px] pl-[21px] border border-[#F9BC60] rounded-[5px] mt-[6px]' key={index}>
            {item}
          </div>
        )}
    </div>
  )
}

export default InputFieldDropdown