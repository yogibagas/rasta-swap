import React, { useState } from 'react'
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";

export default function Settings() {
    const [showModal, setShowModal] = useState(false)
    function SaveSettings(){
        //do something here

        //close modal
        setShowModal(false);
    }
    return (
        <div className="setting text-right items-end flex-col flex w-full">
            <button>
              <FiIcons.FiSettings className="text-xl" onClick={() => setShowModal(true)}/>
            </button>
            {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white pb-8 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t items-center ">
                  <h3 className="text-xl font-semibold text-center flex-grow-1">
                    Swap Settings
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex flex-col space-y-8">
                    <div className="slippage-tollerance flex flex-col">
                        <div className="flex flex-row">
                            <h4 className="text-md">Slippage Tollerance</h4>
                                <span className="has-tooltip ml-1 mt-2 text-xs">
                                    <span className=""><FaIcons.FaRegQuestionCircle/></span>
                                    <span className='tooltip rounded shadow-lg p-1 bg-red-600 text-white'>Some Nice Tooltip Text</span>
                                </span>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <input type="text" className="border-1 rounded-md border-gray-300 bg-green-300 px-2" defaultValue="0.1%"/>
                            <input type="text" className="border-1 rounded-md border-gray-300 bg-green-300 px-2" defaultValue="0.5%"/>
                            <input type="text" className="border-1 rounded-md border-gray-300 bg-green-300 px-2" defaultValue="1%"/>
                            <input type="text" className="border-1 rounded-md border-gray-300 px-2" defaultValue="20%"/>
                        </div>
                  </div>
                  <div className="transaction-deadline flex flex-col">
                        <div className="flex flex-row">
                            <h4 className="text-md">Transaction Deadline</h4>
                                <span className="has-tooltip ml-1 mt-2 text-xs">
                                    <span className=""><FaIcons.FaRegQuestionCircle/></span>
                                    <span className='tooltip rounded shadow-lg p-1 bg-red-600 text-white'>Some Nice Tooltip Text</span>
                                </span>
                        </div>
                        <div className="flex flex-row gap-2 mt-2">
                            <input type="text" className=" w-12 border-1 border-gray-300 px-2" defaultValue="20"/>
                            <span>Minutes</span>
                        </div>
                  </div>
                  <div className="button flex w-full items-center justify-center">
                      <button className="bg-gradient-to-r from-green-rasta to-yellow-rasta text-bold w-1/4 text-white px-2 py-2 rounded-xl" onClick={SaveSettings}>Finish Setting</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          </div>
    )
}
