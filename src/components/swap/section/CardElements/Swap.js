import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DataBank from '../../../DataBank'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

export default function Swap() {
    
    const coin = DataBank.coinList
    const [from, setFrom] = useState(coin[0])
    const [to, setTo] = useState(coin[1])
    
    const handleFrom = () => console.log(this);

    function changeFrom(e){
        let obj = coin.find(o => o.label === e.target.value);
        setFrom(obj);
    }
    function changeTo(e){
        let obj = coin.find(o => o.label === e.target.value);
        setTo(obj);
    }
    function swapCoin(){
        const tempFrom = to;
        const tempTo = from;
        setFrom(tempFrom);
        setTo(tempTo);
    }
    


    return (
        <div className="flex flex-col mx-auto py-8 space-y-6 w-full items-center">
            <div className="icon-wrapper flex flex-row space-x-4 items-center">
                <div className="icon-from"><LazyLoadImage src={from.icon.type} alt={from.label} className="w-8"/></div>
                <div className="separator"> <FaIcons.FaCaretRight/> </div>
                <div className="icon-from"><LazyLoadImage src={to.icon.type} alt={to.label} className="w-8"/></div>
            </div>
            <div className="dropdown-wrapper flex flex-row space-x-4 items-center w-full">
                <div className="from flex flex-col flex-grow-1">
                    <span>From</span>
                    <select name="fromCoin" value={from.label} className="w-full border-b-1 border-gray-300" onChange={changeFrom}>
                        {
                            coin.map((item,index) => {
                                return (<option key={index} value={item.label}>{item.label}</option>)
                            } )
                        }
                    </select>
                </div>
                <div className="separator flex">
                        <button className="px-2 py-2 bg-green-300 rounded-full text-2xl" onClick={swapCoin}>
                            <AiIcons.AiOutlineSwap/>
                        </button>
                </div>
                <div className="from flex flex-col flex-grow-1">
                    <span>To</span>
                    <select name="toCoin" value={to.label} className="w-full border-b-1 border-gray-300" onChange={changeTo}>
                        {
                            coin.map((item,index) => {
                                return (<option key={index} value={item.label} >{item.label}</option>)
                            } )
                        }
                    </select>
                </div>
            </div>
            <div className="input flex flex-row flex-grow-1 space-x-16">
                    <input type="number" className="w-full border-b-1 border-gray-300 px-2 py-2" defaultValue="0" name="valueFrom"/>
                    <input type="number" className="w-full border-b-1 border-gray-300 px-2 py-2" defaultValue="0" name="valueTo"/>
                </div>
                        
            
        </div>
    )
}
