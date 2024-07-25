import React, { useState } from 'react'
import DateInput from '../../../components/Elements/DateInput'
import Button from '../../../components/Elements/Button'
import Svg from '../../../components/Elements/Svg'
const ActivateAccount = ({ setIsActivateAccount }) => {
    const [otp, setOtp] = useState('');
    const [activatePopUp, setActivatePopUp] = useState(false);
    const [verifySuccessful, setVerifySuccessful] = useState(false);

    const handleChange = (event, index) => {
        const newOtp = event.target.value;
        setOtp(otp.slice(0, index) + newOtp + otp.slice(index + 1));

        // Focus on the next input field if there's one and a number is entered
        if (newOtp.length === 1 && index < 3) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handlePaste = (event, index) => {
        // Prevent pasting more than one character in each field
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text').slice(0, 1);
        handleChange({ target: { value: pastedText } }, index);
    };

    const handleAcivate = () => {
        setActivatePopUp(true)
    }
    const handleClosePopup = () => {
        if (verifySuccessful == true) {
            setIsActivateAccount(true)
        }
        setActivatePopUp(false)
        setVerifySuccessful(false)
        setOtp('')
    }


    return (
        <div className="relative overflow-hidden">
            <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
                <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Affiliate</h3>
                <div className="flex items-center sm:gap-4 gap-3">
                    <DateInput />
                </div>
            </div>
            <div className="px-5 space-y-5 text-center sm:text-left">
                <div className='flex items-center justify-center sm:justify-start relative'>
                    <div className={`sm:py-3 pt-3 flex items-center justify-between sm:flex-row flex-col gap-3 w-full `}>
                        <span className='text-xl font-medium text-[#686868] sm:leading-8'>Activate the <br className='hidden sm:block' /> affiliate account</span>
                        <Button text={'Activate now'} handleClick={handleAcivate} className={'px-10 py-3'} />
                    </div>
                    <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10 hidden sm:block' />
                </div>
                <div className="sm:space-y-10 space-y-5">
                    <h3 className="text-xl bg-gradient-r inline-block text-transparent bg-clip-text">How does it work</h3>
                    <div className="capitalize text-left sm:text-base  text-sm sm:space-y-8 space-y-6 pb-3 sm:border-b sm:border-dashed w-fit">
                        <div className="flex items-center gap-3">
                            <div className="sm:w-5 sm:h-5 w-4 h-4 sm:min-h-5 sm:min-w-5 min-h-4 min-w-4 rounded-full bg-[#E73D3F]"></div>
                            <p className="#2C2C2C">Refer your friends to earn $2 for each successful login(users limit 100).</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="sm:w-5 sm:h-5 w-4 h-4 sm:min-h-5 sm:min-w-5 min-h-4 min-w-4 rounded-full bg-[#E73D3F]"></div>
                            <p className="#2C2C2C"> After 100 users you will earn $0.10 per referral.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="sm:w-5 sm:h-5 w-4 h-4 sm:min-h-5 sm:min-w-5 min-h-4 min-w-4 rounded-full bg-[#E73D3F]"></div>
                            <p className="#2C2C2C">You can earn 1% if your referral advertise with us.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="sm:w-5 sm:h-5 w-4 h-4 sm:min-h-5 sm:min-w-5 min-h-4 min-w-4 rounded-full bg-[#E73D3F]"></div>
                            <p className="#2C2C2C">no invite limit per day</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="sm:w-5 sm:h-5 w-4 h-4 sm:min-h-5 sm:min-w-5 min-h-4 min-w-4 rounded-full bg-[#E73D3F]"></div>
                            <p className="#2C2C2C">easy withdrawals of reward money</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-10 w-full py-5">
                    <h3 className="text-xl bg-gradient-r inline-block text-transparent bg-clip-text">Visual representation </h3>
                    <img src="../../affiliate_hero_img.png" className='mdlarge:w-[85%] w-full object-contain pt-3' alt="" />
                </div>
            </div>
            {activatePopUp &&
                <div className="absolute p-40 lg:px-20 sm:px-10 px-2 top-0 left-0 w-full h-full bg-[#0008] flex justify-center">
                    {!verifySuccessful ?
                        <div className="sm:w-[28.125rem] px-2 py-5 w-[21.875rem] text-center relative bg-white h-fit rounded-xl sm:space-y-12 space-y-5">
                            <h3 className="text-xl font-semibold text-gray-900">Verify</h3>
                            <div className="gap-6 flex items-center justify-center flex-col">
                                <p className="">
                                    Enter the code sent on email or mobile number
                                </p>
                                <p className="text-[#747474] font-light">
                                    I didn’t receive the code! <span className='font-medium text-[#F33F41] cursor-pointer'>Resend</span>
                                </p>
                                <div className="flex space-x-4">
                                    {[0, 1, 2, 3].map((index) => (
                                        <input
                                            key={index}
                                            id={`otp-input-${index}`}
                                            type="tel"
                                            inputMode="numeric"
                                            maxLength={1}
                                            className={`w-14 h-14 border border-gray-300 rounded-lg font-medium text-[#F33F41] text-2xl text-center focus:outline-none `}
                                            value={otp[index] || ''}
                                            onChange={(e) => handleChange(e, index)}
                                            onPaste={(e) => handlePaste(e, index)}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-950 font-semibold">5:00</p>

                            </div>
                            <Button text={'Verify'} handleClick={() => { setVerifySuccessful(true) }} className={'px-[4.5625rem] py-[0.875rem]'} />
                        </div>
                        :
                        <div className="px-5  py-9 w-[21.875rem] text-center relative bg-white h-fit rounded-xl space-y-12">
                            <h3 className="text-xl font-semibold text-gray-900">Verification Successful</h3>
                            <p className="text-gray-600">
                                You have Successfully Activated your affiliate account .
                            </p>
                        </div>}
                    <div className="absolute right-10 top-10 cursor-pointer" onClick={handleClosePopup}>
                        <Svg.CrossIcon />
                    </div>
                </div>}
        </div>
    )
}

export default ActivateAccount