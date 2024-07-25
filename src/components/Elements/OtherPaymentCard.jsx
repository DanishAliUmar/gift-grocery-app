import React from 'react'
import Svg from './Svg'

const OtherPaymentCard = (props) => {
    return (
        <label htmlFor={props.id} className={`flex items-center shadow-md rounded-lg  sm:gap-3 gap-2 sm:px-4 px-2 py-6 bg-[#fff] w-full`}>
            <input type="radio" name={props.name} id={props.id} className='cursor-pointer px-4 w-5 h-5 bg-red-600' />
            <img src={props.img} alt="" className='object-contain min-w-14 h-6' />
            <p className="">{props.text}</p>
        </label>
    )
}

export default OtherPaymentCard