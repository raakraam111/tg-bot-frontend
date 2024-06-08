import React from 'react'

const Loader = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center p-4 bg-custom-red">
          <img
              src="src/assets/logo.png"
              alt="Chest"
              width="100"
              height="100"
          />
          <div className="loader"></div>
          <div className="text-red-700 text-xl mt-4">Your chest is loading...</div>
        </div>
  )
}

export default Loader