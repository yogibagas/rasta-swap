import React from 'react'

import SwapBg from "./../../../assets/swap-bg.jpg";
export default function HeroSection() {
    return (
        <div>
            
      <div
        className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: "url(" + SwapBg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-4xl font-bold">Swap and Exchange</h1>
      </div>
        </div>
    )
}
