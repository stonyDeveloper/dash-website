import React from 'react'

const ReadButton = ({text, onClick}) => {
  return (
    <div className='mt-[10px]'>
        <button className='bg-[#004643] hover:bg-[#4f5757] px-4 rounded-md py-2 text-white' onClick={onClick}>
            {text}
        </button>
    </div>
  )
}

export default ReadButton