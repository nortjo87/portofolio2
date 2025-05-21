import { useState } from 'react'
import {sny} from './assets/index'


function App() {

  return (
    <div className="w-screen h-screen items-center justify-center bg-gray-100">
      <header className="w-full h-12 bg-white flex flex-row items-center justify-between border-b border-gray-200 transition-all duration-700">
        <div className="flex-1 flex items-center ">
          {/* Left part */}
          <span className="text-gray-600">Left</span>
        </div>
        <div className="flex-1 flex items-center justify-center bg-amber-300">
          {/* Center part */}
          <h1 className="text-3xl font-bold text-gray-800">My App</h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          {/* Right part */}
          <span className="text-gray-600">Right</span>
        </div>
      </header>
      <div className="w-full h-[calc(100vh-3rem)] flex flex-col md:flex-row transition-all duration-700">
        <div className="order-2 md:order-1 flex-1 bg-white flex items-center justify-center border-r border-gray-200 md:border-r md:border-gray-200 border-b md:border-b-0 transition-all duration-700">
          part 1
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/3 bg-gray-50 flex flex-col items-center justify-end border-b md:border-b-0 border-r border-gray-200 md:border-r md:border-gray-200 transition-all duration-700">
        <div className="w-full flex justify-center relative" style={{ minHeight: '500px' }}>
          <div className="absolute inset-0 flex justify-center items-center">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] h-[500px]"
          >
            <path
            fill="#0F62FE"
            d="M29.2,-50.5C37.4,-45.9,43.2,-37.1,51.3,-28C59.4,-18.9,69.8,-9.4,73.8,2.3C77.9,14.1,75.5,28.2,70,41.7C64.4,55.2,55.6,68.1,43.4,71.2C31.2,74.2,15.6,67.4,0.1,67.3C-15.4,67.1,-30.8,73.6,-39.4,68.5C-48,63.3,-49.8,46.6,-52.4,33.2C-55,19.9,-58.4,9.9,-61.7,-1.9C-65.1,-13.8,-68.4,-27.6,-65.8,-40.9C-63.2,-54.2,-54.6,-67,-42.7,-69.4C-30.7,-71.7,-15.4,-63.7,-2.4,-59.6C10.5,-55.4,21.1,-55.1,29.2,-50.5Z"
            transform="translate(100 100)"
            />
          </svg>
          </div>
          <img src={sny} alt="Logo" className="w-[390px] h-auto relative z-10" />
        </div>
        </div>
        <div className="order-3 flex-1 bg-white flex items-center justify-center transition-all duration-700">
          Part 3
        </div>
      </div>
    </div>
  )
}


export default App
