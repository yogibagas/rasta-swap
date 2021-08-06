import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Liquidity() {
  return (
    <div className="flex flex-col mx-auto py-8 space-y-6 w-full items-center">
      <div className="btn-container">
        <button className="bg-gradient-to-r rounded-md text-white from-green-rasta to-yellow-rasta px-8 py-2 flex flex-row space-x-2 items-center">
          <span className="icon">
            <FaIcons.FaPlusSquare />
          </span>
          <span>Add Liquidity</span>
        </button>
      </div>
      <div className="separator w-full">
        <hr className="border-1 border-gray-300" />
      </div>
      <div className="bg-gray-300 flex items-center px-8 py-8 rounded-xl">Connect to a wallet to view your liquidity.</div>
      <div className="notes text-left">Don't see a pool you joined? <Link to="#" className="text-green-rasta">Import it</Link>
      </div>
    </div>
  );
}
