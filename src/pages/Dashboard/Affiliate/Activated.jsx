import React, { useState, useRef } from 'react';
import DateInput from '../../../components/Elements/DateInput'
import Button from '../../../components/Elements/Button'
import Svg from '../../../components/Elements/Svg'

const Activated = () => {
    const [copied, setCopied] = useState(false);
    const textRef = useRef(null); // Ref to hold the <p> element

    const handleClick = () => {
        const textToCopy = textRef.current.textContent; // Get text content
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Show copied message for 2 seconds
            })
            .catch((err) => {
                console.error('Failed to copy text:', err);
                // Handle potential errors (e.g., user denied clipboard access)
            });
    };
    return (
        <div className="relative overflow-hidden">
            <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
                <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Affiliate</h3>
                <div className="flex items-center sm:gap-4 gap-3">
                    <DateInput />
                </div>
            </div>
            <div className="px-5 space-y-5 text-center sm:text-left pb-5">
                <div className='flex items-center justify-center sm:justify-start relative'>
                    <div className="flex items-center justify-between w-full flex-col sm:flex-row gap-2 pt-8 pb-3">
                        <div className="sm:space-y-3 text-[#4E4C4C] text-center sm:text-left">
                            <h4 className="text-lg">
                                Rewards
                            </h4>
                            <h2 className="font-bold text-3xl ">$1200.00</h2>
                        </div>
                        <Button text={'Redeem rewards'} className={'px-7 py-3'} />
                    </div>
                    <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10 hidden sm:block' />
                </div>
                <div className="lg:flex lg:items-center grid grid-cols-2 xl:gap-12 text-[#4E4C4C] border-b text-center  lg:flex-wrap xl:flex-nowrap">
                    <div className="flex items-center justify-center flex-col gap-2 p-6">
                        <p className="">Total</p>
                        <h4 className="text-2xl font-bold">$200</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2 p-6">
                        <p className="">Monthly</p>
                        <h4 className="text-2xl font-bold">$200</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2 p-6">
                        <p className="">Members</p>
                        <h4 className="text-2xl font-bold">$200</h4>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2 p-6">
                        <p className="">Rewards history</p>
                        <h4 className="text-2xl font-bold">$200</h4>
                    </div>
                </div>
                <div className="flex justify-between flex-col xl:flex-row xl:gap-2 gap-5 border-b pb-3 border-dashed">
                    <div className="">
                        <h3 className="xl:text-2xl text-xl font-medium text-[#808080]">Refer your friends</h3>
                        <h4 className="xl:text-lg text-base font-semibold text-[#F33F41]">Earn $5 Each</h4>
                    </div>
                    <div className="">
                        <p className="pb-2 font-medium text-[#686868]">
                            Refer Id
                        </p>
                        <div className="xl:w-full w-fit m-auto sm:m-0 gap-5  bg-white shadow-[1px_1px_20px_5px_rgba(0,0,0,0.1)] rounded-lg px-6 py-4 flex items-center justify-between">
                            <p ref={textRef} className="text-[#949494]">LSUbaske188343666655</p>
                            <button onClick={handleClick}>
                                <Svg.CopyIcon />
                            </button>
                        </div>
                        <p className="italic mt-5 font-medium text-sm text-[#F33F41]">COPY OR SHARE YOUR REFERRAL CODE WITH FRIENDS</p>
                    </div>
                </div>
                <div className="sm:space-y-5 space-y-3 pb-8">
                    <h3 className="sm:text-xl text-[#4E4C4C] font-medium text-left">Refers History</h3>
                    <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                        <div className="flex items-center sm:gap-4 gap-3">
                            <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                                <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                            </div>
                            <div className="space-y-[2px]">
                                <h4 className="font-semibold text-black sm:text-base text-sm">Sammed Modi</h4>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                            </div>
                        </div>
                        <h3 className="text-gray-800 font-semibold">$25.00</h3>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                        <div className="flex items-center sm:gap-4 gap-3">
                            <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                                <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                            </div>
                            <div className="space-y-[2px]">
                                <h4 className="font-semibold text-black sm:text-base text-sm">Sammed Modi</h4>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                            </div>
                        </div>
                        <h3 className="text-gray-800 font-semibold">$25.00</h3>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                        <div className="flex items-center sm:gap-4 gap-3">
                            <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                                <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                            </div>
                            <div className="space-y-[2px]">
                                <h4 className="font-semibold text-black sm:text-base text-sm">Sammed Modi</h4>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                                <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                            </div>
                        </div>
                        <h3 className="text-gray-800 font-semibold">$25.00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activated