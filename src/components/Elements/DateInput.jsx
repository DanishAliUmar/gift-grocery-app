import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Svg from './Svg'

const DateInput = ({ name, onChange, value }) => {

    const [toggleDateRange, setToggleDateRange] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date());

    const formattedCurrentDate = new Date().toDateString();
    const formattedSelectedDate = selectedDate.toDateString();

    // handle change function
    const handleDateChange = (value) => {
        setSelectedDate(value)

        let updatedDate = moment(value).format('YYYY-MM-DD')

        let event = {
            target: {
                name: name,
                value: updatedDate
            }
        }
        onChange && onChange(event)
        setToggleDateRange(false)
    }

    useEffect(() => {
        if (value) {
            setSelectedDate(new Date(value))
        }
    }, [value])

    return (
        // <div className={`bg-[#F5F6F8] border-[#DEDEDE] border !px-1 sm:!px-4 !py-[3px] sm:!py-3  rounded-lg ${props?.parentClass ? props?.parentClass : ''}`}>
        //     <input id='date_input' name={props?.name ? props?.name : ''} onChange={props.onChange} required={props.required} type='date' className='hidden'/>
        //     <label htmlFor="date_input"  className="flex items-center justify-between cursor-pointer sm:w-32 w-fit gap-4">
        //         <p className="">Today</p>
        //         <Svg.Calender/>
        //     </label>
        // </div>














        // ================


        <>
            <div className='relative h-fit'>
                <p onClick={() => {
                    setToggleDateRange(!toggleDateRange)
                }} className='cursor-pointer flex items-center bg-[#F5F6F8] border-[#DEDEDE] border !px-2 lg:!px-4 !py-[3px] sm:!py-3  rounded-lg gap-3'>
                    <p className='lg:font-medium lg:text-base text-sm px-1'>
                        {formattedSelectedDate === formattedCurrentDate ? "Today" : moment(selectedDate).format("DD MMMM YYYY")}
                    </p>
                     <Svg.Calender className={'lg:w-6 lg:h-6 w-4 h-4'}/>
                </p>
                {
                    toggleDateRange && <>
                        <div className='fixed inset-0 z-1' onClick={() => { setToggleDateRange(false) }}></div>
                        <div className='absolute top-full pt-2 3xl:-right-44 right-0 z-[2]'>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                name={name}
                                value={selectedDate}
                                inline
                            />
                        </div>
                    </>
                }
            </div>
        </>



    )
}

export default DateInput



















// import React, { useState, useEffect } from 'react';
// import moment from 'moment';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import Svgs from 'Assets/Svgs';

// function DateComponent({ name, onChange, value }) {
//     const [toggleDateRange, setToggleDateRange] = useState(false)
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const formattedCurrentDate = new Date().toDateString();
//     const formattedSelectedDate = selectedDate.toDateString();

//     // handle change function
//     const handleDateChange = (value) => {
//         setSelectedDate(value)

//         let updatedDate = moment(value).format('YYYY-MM-DD')

//         let event = {
//             target: {
//                 name: name,
//                 value: updatedDate
//             }
//         }
//         onChange && onChange(event)
//         setToggleDateRange(false)
//     }

//     useEffect(() => {
//         if (value) {
//             setSelectedDate(new Date(value))
//         }
//     }, [value])

//     return (
//         <>
//             <div className='relative h-fit'>
//                 <p onClick={() => {
//                     setToggleDateRange(!toggleDateRange)
//                 }} className='cursor-pointer flex items-center px-4 py-[0.80rem] rounded-lg border border-Grey'>
//                     <Svgs.CalendarIcon />
//                     <p className='text-mainColor font-medium px-3'>
//                         {${formattedSelectedDate === formattedCurrentDate ? "Today" : moment(selectedDate).format("DD MMMM YYYY")}}
//                     </p>
//                     <Svgs.FilterButtonDropdownIcon />
//                 </p>
//                 {
//                     toggleDateRange && <>
//                         <div className='fixed inset-0 z-1' onClick={() => { setToggleDateRange(false) }}></div>
//                         <div className='absolute top-full pt-2 3xl:-right-44 right-0 z-[2]'>
//                             <DatePicker
//                                 selected={selectedDate}
//                                 onChange={handleDateChange}
//                                 name={name}
//                                 value={selectedDate}
//                                 inline
//                             />
//                         </div>
//                     </>
//                 }
//             </div>
//         </>

//     );
// }

// export default DateComponent;