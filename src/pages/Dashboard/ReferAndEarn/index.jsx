import React, { useState, useRef } from 'react';
import DateInput from '../../../components/Elements/DateInput'
import Button from '../../../components/Elements/Button'
import Svg from '../../../components/Elements/Svg'

const ReferAndEarn = () => {

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
        <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Refer and earn</h3>
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
            <Button handleClick={''} text={'Redeem rewards'} className={'px-7 py-3'} />
          </div>
          <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10 hidden sm:block' />
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
          <h3 className="text-xl bg-gradient-r inline-block text-transparent bg-clip-text">How does it work</h3>
          <div className="xl:w-[36.25rem] lg:w-[32rem] space-y-4">
            <div className="flex items-center justify-center gap-5">
              <div className="flex-1 flex items-center justify-end">
                <Svg.CopyCode className={'sm:w-fit w-14'} />
              </div>
              <div className="flex-[2] flex items-center justify-center">
                <Svg.ArcRound className={'w-full xs:block hidden'} />
                <Svg.SmallArcRound className={'w-full xs:!hidden block '} />
              </div>
              <div className="flex-1 flex items-center justify-start">
                <Svg.PasteIcon className={'sm:w-fit w-14'} />
              </div>
            </div>
            <div className="flex items-start justify-between sm:gap-20 xs:gap-14 gap-10 sm:text-left text-justify text-[#686868] text-sm xs:text-base">
              <p className="flex-1">Copy the referral code and share it with your friend.</p>
              <p className="flex-1">Ask your friend to register on App using the referral code.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferAndEarn