import React from 'react'

const Loader = () => {
  return (
    <div className="loading w-[100vw] h-[170vh] md:h-[110vh] absolute top-[-80px] flex justify-center items-center">
    <span className="loader"></span>
    </div>
    
  );
}

export default Loader