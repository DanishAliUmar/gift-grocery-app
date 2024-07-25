import React, { useEffect, useState } from 'react'
import Svg from '../components/Elements/Svg';
import Button from '../components/Elements/Button';

const GetCoupon = () => {
    const [slots, setSlots] = useState(0)
    const [province, setProvince] = useState(''); // State for selected province
    const [items, setItems] = useState([]); // State for list of slot-province combinations


    const handleChangeSlots = (event) => {
        setSlots(parseInt(event.target.value)); // Update slots with parsed integer value
    };

    const handleChangeProvince = (event) => {
        setProvince(event.target.value); // Update province with selected value
    };

    const handleClickAdd = () => {
        if (slots > 0 && province) {
            setItems([...items, { slot: slots, province }]); // Add new item to list
            setSlots(0); // Reset slots to 0
            setProvince(''); // Reset province
        } else {
            alert('Please enter a valid number of slots and select a province.');
        }
    };

    const handleRemoveItem = (index) => {
        const newItems = [...items]; // Create a copy of the list
        newItems.splice(index, 1); // Remove the item at the specified index
        setItems(newItems); // Update the list state
    };



    /////////////// Timer ////////////////

    const [hours, setHours] = useState(8);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            } else if (hours > 0) {
                setMinutes(59);
                setSeconds(59);
                setHours(hours - 1);
            } else {
                // Timer reaches zero, reset to 8 hours
                setHours(8);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000); // Update timer every second

        return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
    }, [seconds, minutes, hours]); // Dependency array ensures the effect runs only when state variables change

    const timerDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;



    return (
        <div className='flex items-center justify-center min-h-[80vh] w-full bg-white'>
            <div className="flex items-stretch gap-2 xs:p-5 p-3 flex-col lg:flex-row w-full">
                <div className="rounded-[1.875rem] xs:p-5 p-3 bg-[#8e080870] flex-1">
                    <div className="rounded-[0.9375rem] p-7 border h-full border-[#ffffff6c]">
                        <div className="space-y-8">
                            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                                <div className="space-y-[0.625rem] flex-1 ">
                                    <label htmlFor="" className='text-white font-semibold'>
                                        Slots
                                    </label>
                                    <div className="w-full bg-white rounded-lg py-3 px-4">
                                        <input type="number" min={0} placeholder='0' className='required__spin__btn w-full bg-transparent' name="" id=""
                                            value={slots} // Set input value from slots state
                                            onChange={handleChangeSlots} />
                                    </div>
                                </div>
                                <div className="space-y-[0.625rem] flex-1 ">
                                    <label htmlFor="" className='text-white font-semibold'>
                                        Province
                                    </label>
                                    <div className="w-full bg-white rounded-lg py-3 px-4">
                                        <select name="" id="" className='bg-transparent w-full focus:outline-none'
                                            value={province} // Set select value from province state
                                            onChange={handleChangeProvince}>
                                            <option>Select</option>
                                            <option value="alberta">Alberta</option>
                                            <option value="british_columbia">British Columbia</option>
                                            <option value="manitoba">Manitoba</option>
                                            <option value="new_brunswick">New Brunswick</option>
                                            <option value="nova_scotia">Nova Scotia</option>
                                            <option value="ontario">Ontario</option>
                                            <option value="prince_edward_island">Prince Edward Island</option>
                                            <option value="quebec">Quebec</option>
                                            <option value="saskatchewan">Saskatchewan</option>
                                            <option value="northwest_territories">Northwest Territories</option>
                                            <option value="nunavut">Nunavut</option>
                                            <option value="yukon">Yukon</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-[0.625rem] flex-1 ">
                                    <p htmlFor="" className='text-white font-semibold'>
                                        total cost($10*sum)
                                    </p>
                                    <div className="w-full bg-white rounded-lg py-3 font-medium px-4 flex items-center justify-between">
                                        <p className="">10 * {slots}</p>
                                        <p className="">{10 * slots}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start justify-between xl:flex-row flex-col gap-5">
                                <div className="flex items-center sm:gap-8 gap-4 gap-y-4 flex-wrap flex-1">
                                    {items.map((item, index) => (
                                        <>
                                            <div key={index} className="flex items-center sm:gap-8 gap-4 relative py-2 px-5 rounded-lg border-white border text-white">
                                                <h5 className="text-xl font-semibold">{item.province.slice(0, 2).toUpperCase()}</h5>
                                                <p className="text-lg">{item.slot}</p>
                                                <div className="flex items-center w-5 h-5 justify-center bg-white rounded-full absolute -right-2 -top-2 " onClick={() => handleRemoveItem(index)}>
                                                    <Svg.CrossIcon className={'w-2 h-2 fill-[#F33F41] stroke-[#F33F41]'} fill={'#F33F41'} />
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                    
                                </div>
                                <div className="flex items-center justify-between sm:gap-10 gap-4 flex-col sm:flex-row xl:w-fit w-full">
                                    <button className='px-14 py-3 bg-white text-[#F33F41] text-lg font-semibold rounded-xl xs:w-fit w-full' onClick={handleClickAdd}>Add Slots</button>
                                    <div className="flex items-center sm:justify-start justify-between sm:w-fit w-full gap-10 text-white">
                                        <span className="text-lg">Total amount:</span><span className="text-xl font-semibold">$300</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button text={'Confirm slots'} className={'px-10 py-4 rounded-xl xs:w-fit w-full'} />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <button className="rounded-[10px] px-[10px] py-[2px] font-semibold border-white border text-white">Scratch Coupon</button>
                                    <button className="rounded-[10px] px-[10px] py-[2px] font-semibold border-white border text-white">See all</button>
                                </div>
                                <div className="flex items-center gap-8 flex-wrap">
                                    <div className="flex items-center justify-center bg-white rounded-full sm:w-[7.5rem] w-20 h-20 sm:h-[7.5rem] border-2 border-[#F33F41]">
                                        <Svg.Cart className={'sm:w-[3.125rem] sm:h-14 w-9 h-10'} />
                                    </div>
                                    <div className="flex items-center justify-center bg-white rounded-full sm:w-[7.5rem] w-20 h-20 sm:h-[7.5rem] border-2 border-[#F33F41]">
                                        <Svg.Cart className={'sm:w-[3.125rem] sm:h-14 w-7 h-8'} />
                                    </div>
                                    <div className="flex items-center justify-center bg-white rounded-full sm:w-[7.5rem] w-20 h-20 sm:h-[7.5rem] border-2 border-[#F33F41]">
                                        <Svg.Cart className={'sm:w-[3.125rem] sm:h-14 w-7 h-8'} />
                                    </div>
                                    <div className="flex items-center justify-center bg-white rounded-full sm:w-[7.5rem] w-20 h-20 sm:h-[7.5rem] border-2 border-[#F33F41]">
                                        <Svg.Cart className={'sm:w-[3.125rem] sm:h-14 w-7 h-8'} />
                                    </div>
                                    <div className="flex items-center justify-center bg-white rounded-full sm:w-[7.5rem] w-20 h-20 sm:h-[7.5rem] border-2 border-[#F33F41]">
                                        <Svg.Cart className={'sm:w-[3.125rem] sm:h-14 w-7 h-8'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-[1.875rem] xs:p-5 p-3 bg-[#8e080870] min-w-64 relative">
                    <div className="absolute left-0 top-0 -translate-y-[70%] lg:-translate-y-0 px-4 lg:px-0 lg:-translate-x-[70%] lg:py-5 w-full lg:w-fit flex items-center justify-between lg:flex-col lg:h-full overflow-y-hidden">
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                        <div className="w-5 h-5 bg-[#93070731] rounded-full"></div>
                    </div>
                    <div className="rounded-[0.9375rem] p-7 border border-[#ffffff6c] h-full flex items-center justify-center lg:flex-col md:flex-row flex-col gap-7">
                        <img src="../../WinnerTrophy.svg" className='w-32 h-28' alt="" />
                        <div className="space-y-4">
                            <h3 className="text-center font-bold text-[1.375rem] text-white">Remaining Time</h3>
                            <div className="flex items-center justify-center text-white text-center gap-4">
                                <div className="p-[0.625rem] px-3 border-white border-2 rounded-lg">
                                    <h4 className="text-3xl font-black">{hours}</h4>
                                    <h6 className="text-sm">Hours</h6>
                                </div>
                                <div className="p-[0.625rem] px-3 border-white border-2 rounded-lg">
                                    <h4 className="text-3xl font-black">{minutes}</h4>
                                    <h6 className="text-sm">Minutes</h6>
                                </div>
                                <div className="p-[0.625rem] px-3 border-white border-2 rounded-lg">
                                    <h4 className="text-3xl font-black">{seconds}</h4>
                                    <h6 className="text-sm">Seconds</h6>
                                </div>
                            </div>
                        </div>
                        <img src="../../gift__icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetCoupon