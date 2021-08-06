import React, { useState } from "react";
import Swap from "./CardElements/Swap";
import Liquidity from "./CardElements/Liquidity";
import Settings from "./CardElements/Settings"

export default function CardSection() {
  const [content, setContent] = useState("swap");
  const swapContent = () =>
    setContent(content === "swap" ? "liquidity" : "swap");

  return (
    <div>
      <div className="box flex flex-col items-center">
        <div className="w-1/4 shadow-box flex flex-col px-4 py-6">
          <Settings/>
          <div className="content flex items-center flex-col">
            <div className="tabs flex flex-row space-x-4 text-gray-inBlack">
              <button
                className={
                  (content === "swap" ? "border-b-2" : "border-b-0") +
                  " border-yellow-rasta px-2"
                }
                onClick={swapContent}
              >
                Swap
              </button>
              <button
                className={
                  (content === "liquidity" ? "border-b-2" : "border-b-0") +
                  " border-yellow-rasta px-2"
                }
                onClick={swapContent}
              >
                Liquidity
              </button>
            </div>
          </div>
          <div className="tabs-content flex">
              {content==='swap' && <Swap/> }
              {content==='liquidity' && <Liquidity/> }
          </div>
        </div>
      </div>
    </div>
  );
}
