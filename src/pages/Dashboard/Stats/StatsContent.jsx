import React, { useState } from 'react'
import Select from '../../../components/Elements/Select'
import Input from '../../../components/Elements/Input';
import Svg from '../../../components/Elements/Svg';
import Button from '../../../components/Elements/Button';
import { useNavigate } from 'react-router-dom';
import DateInput from '../../../components/Elements/DateInput';

const StatsContent = ({setPopupType, popupType, isPopupOpen, setIsPopupOpen}) => {
    const Navigate = useNavigate();
    const provinceOptions = [
        { value: 'alberta', label: 'Alberta' },
        { value: 'british_columbia', label: 'British Columbia' },
        { value: 'manitoba', label: 'Manitoba' },
        { value: 'new_brunswick', label: 'New Brunswick' },
        // { value: 'newfoundland_and_labrador', label: 'Newfoundland and Labrador' },
        { value: 'nova_scotia', label: 'Nova Scotia' },
        { value: 'ontario', label: 'Ontario' },
        { value: 'prince_edward_island', label: 'Prince Edward Island' },
        { value: 'quebec', label: 'Quebec' },
        { value: 'saskatchewan', label: 'Saskatchewan' },
        { value: 'northwest_territories', label: 'Northwest Territories' },
        { value: 'nunavut', label: 'Nunavut' },
        { value: 'yukon', label: 'Yukon' }
        // Add more provinces as needed
    ];

    const StatsItems = [
        { type: `claim`, icon: '../../winner_trofi.png', textColor: '#F84145', text: 'Claim now' },
        { type: 'winner', icon: '../../winner_trofi.png', textColor: '#DEDEDE', text: 'WINNER' },
        { type: 'text', textColor: '#3B3B3B', text: 'Better luck next time' },
        { type: 'cart' },
        { type: 'claim', icon: '../../winner_trofi.png', textColor: '#F84145', text: 'Claim now' },
        { type: 'winner', icon: '../../winner_trofi.png', textColor: '#DEDEDE', text: 'WINNER' },
        { type: 'text', textColor: '#3B3B3B', text: 'Better luck next time' },
        { type: 'cart' },
        { type: 'claim', icon: '../../winner_trofi.png', textColor: '#F84145', text: 'Claim now' },
        { type: 'winner', icon: '../../winner_trofi.png', textColor: '#DEDEDE', text: 'WINNER' },
        { type: 'text', textColor: '#3B3B3B', text: 'Better luck next time' },
        { type: 'cart' },
        { type: 'claim', icon: '../../winner_trofi.png', textColor: '#F84145', text: 'Claim now' },
        { type: 'winner', icon: '../../winner_trofi.png', textColor: '#DEDEDE', text: 'WINNER' },
        { type: 'text', textColor: '#3B3B3B', text: 'Better luck next time' },
    ];

    
    
    

    const handlePopupClick = (type) => {
        if (type == 'claim' || type == 'cart') {
            setIsPopupOpen(true);
            setPopupType(type);
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setPopupType('');
    };

    const handleClaim = () => {
        setIsPopupOpen(true);
        setPopupType('claimed');
        Navigate('/dashboard/stats/claim-form')
    };

    const handleCouponScratch = () => {
        setPopupType('coupon');
    };
    return (
        <div className="relative">
            <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
                <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Stats</h3>
                <div className="flex items-center sm:gap-4 gap-3">
                    <Select
                        selectParent={'!px-1 sm:!px-4'}
                        selectStyle={'sm:!w-full !py-1 sm:!py-3 !w-[120px]'}
                        options={provinceOptions}
                        titleStyle={'text-left'}
                        name="province" />
                        <DateInput/>
                    {/* <Input inputStyle={'!px-1 sm:!px-4 !py-[3px] sm:!py-3 sm:!w-full !w-[120px]'} type="date" /> */}
                </div>
            </div>
            <div className="p-5 flex items-center sm:gap-4 gap-2">
                <div className="border flex-1 xl:flex-none sm:rounded-xl rounded-lg border-[#DEDEDE] sm:px-4 px-2 py-1 flex items-center sm:gap-5 gap-2">
                    <h6 className="font-bold sm:text-base text-xs">BC</h6>
                    <div className="xl:w-[18.75rem] flex-1 relative rounded-[30px] h-2 bg-[#D6D4D4]">
                        <div className="absolute top-0 left-0 rounded-[30px] bg-gradient-r  w-11/12 h-full"></div>
                    </div>
                    <h6 className="text-[#212121] sm:text-base text-xs"><span className="font-bold">15</span> <span className="">Slots</span></h6>
                </div>
                <div className="border sm:rounded-xl rounded-lg border-[#DEDEDE] sm:px-4 px-2 py-1 flex items-center gap-5">
                    <h6 className="space-x-1 text-[#212121] sm:text-base text-xs"> <span className="">Total price:</span><span className="font-bold">$75</span></h6>
                </div>
            </div>
            <div className="grid place-items-center xl:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-6 p-6 pb-16">
                {StatsItems.map((item, index) => (
                    <div key={index} className={`flex items-center text-center justify-center shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] flex-col cursor-pointer hover:scale-105 transition-all lg:w-[7.5rem] sm:w-24 sm:h-24 w-20 h-20 lg:h-[7.5rem] bg-white border-[${item.textColor || '#F84145'}] border rounded-full`} onClick={() => handlePopupClick(item.type)}>
                        {item.icon ? (
                            <img src={item.icon} alt="" className="lg:w-fit lg:h-fit sm:w-14 sm:h-14 w-10 h-10 object-contain" />
                        ) : null}

                        {item.type == 'cart' ? (
                            <Svg.Cart className={'sm:w-9 w-8 lg:w-fit lg:h-fit sm:h-10 h-9'} />
                        ) : null}
                        <h6 className="lg:text-sm sm:text-xs font-bold text-[0.625rem]" style={{ color: item.textColor }}>{item.text}</h6>
                    </div>
                ))}

                {isPopupOpen && <div className="popup absolute transition-all top-0 z-40 left-0 w-full h-full bg-[#00000098] flex items-center justify-center flex-col gap-9">
                    {popupType == 'cart' &&
                        <div className="rounded-full p-10 sm:w-80 sm:h-80 w-72 h-72 z-10 bg-white flex items-center justify-center flex-col sm:gap-4">
                            <h3 className="sm:text-lg font-semibold text-gray-600">Scratch Coupon!</h3>
                            <hr className="h-1 w-[80%]" />
                            <div className="flex items-center justify-center">
                                <div className="flex items-center relative justify-center">
                                    <Svg.ScratchBg className={'sm:w-fit w-4/5'} />
                                    <div className=" bg-white absolute rounded-md flex items-center text-center  font-medium p-3 justify-center text-gray-600 w-32 h-12 cursor-pointer" onClick={handleCouponScratch}>Scratch Here</div>
                                </div>
                            </div>
                            <p className="text-center sm:text-base text-sm text-gray-600">
                                Scratch it to get your <br />
                                coupon number
                            </p>
                        </div>
                    }


                    {popupType == 'coupon' &&
                        <div className="rounded-full sm:w-80 sm:h-80 w-72 h-72 z-10 relative flex items-center justify-center flex-col gap-4">
                            <img src="../../couponCode.png" alt="" className='w-full h-full' />
                            <div className="absolute text-center flex items-center justify-center flex-col gap-3">
                                <h4 className="text-base font-semibold ">
                                    Congratulations!
                                </h4>
                                <h3 className="text-[#F84145] text-2xl font-bold leading-[0.7]">ADC782</h3>
                                <div className="p-3 bg-white rounded-xl w-fit flex items-center shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] justify-center">
                                    <img src="../../qrcode.png" alt="" className="sm:w-16 sm:h-16 w-14 h-14 " />
                                </div>
                                <div className="text-gray-600 flex items-center justify-center text-[0.625rem] font-medium gap-3">
                                    <h5 className="w-16">
                                        Sr. Number:
                                    </h5>
                                    <div className="px-3 border-b-2 ">XXXX-XXXX</div>
                                </div>
                                <div className="text-gray-600 flex items-center gap-3 justify-center text-[0.625rem] font-medium w-full">
                                    <h5 className="w-16 text-left">
                                        Validity:
                                    </h5>
                                    <div className="px-3 border-b-2 flex-1">7 Days</div>
                                </div>
                            </div>
                        </div>}


                    {popupType == 'claim' &&
                        <div className="rounded-full sm:w-80 sm:h-80 w-60 h-60 z-10 relative flex items-center justify-center flex-col gap-4">
                            <img src="../../couponCode.png" alt="" className='w-full h-full' />
                            <div className="absolute text-center flex items-center justify-center flex-col gap-3">
                                <h4 className="sm:text-base text-sm font-semibold text-[#F84145] ">
                                    Congratulations!
                                </h4>
                                <img src="../../winner_gift.png" alt="" className="sm:w-24 w-[4.375rem] h-20 sm:h-28 " />
                                <h5 className="sm:text-sm text-xs font-medium text-center">
                                    You have won gift coupon <br />
                                    for one year grocery
                                </h5>
                            </div>
                        </div>}

                    {popupType == 'claimed' &&
                        <div className="sm:px-16 px-4 p-16 text-center relative bg-white rounded-xl space-y-4 sm:w-fit w-11/12">
                            <div className="gap-4 flex items-center justify-center flex-col">
                                <Svg.CircleTick />
                                <h3 className="text-2xl font-semibold">
                                    Claim form sent <br />
                                    successfully
                                </h3>
                            </div>
                            <p className="text-lg">
                                You have Successfully added <br className='hidden sm:block'/> $1200 into your wallet
                            </p>
                            {/* <div className="absolute right-5 top-0 cursor-pointer" onClick={handleClosePopup}>
                                <Svg.CrossIcon className={'w-4 h-4'} fill={'#F84145'} />
                            </div> */}
                        </div>
                    }
                    {popupType == 'claim' &&
                        <Button handleClick={handleClaim} text={'Claim now'} className={'sm:px-14 px-12 py-3 sm:py-4'} />
                    }

                    {
                        <div className="absolute right-10 top-10 cursor-pointer" onClick={handleClosePopup}>
                            <Svg.CrossIcon />
                        </div>
                    }

                </div>}
            </div>
        </div>
    )
}

export default StatsContent