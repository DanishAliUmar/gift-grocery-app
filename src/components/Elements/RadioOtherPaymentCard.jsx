import React from 'react'

    return (
        <div className={`space-y-2 ${props?.parentClass ? props?.parentClass : ''} w-full`}>
            {props.title ? <p className={`font-medium ${props?.titleStyle ? props?.titleStyle : ''}`}>{props?.title}</p> : ''}
            <div className={`flex items-center justify-between  border rounded-lg  gap-4 px-4 py-3 bg-[#F5F6F8] border-[#DEDEDE] w-full`}>
                <input type="radio" checked={props.checked ? true : false} className='px-4 w-5 h-5 bg-red-600' />
                <Svg.PaymentCard />
                <input name={props?.name ? props?.name : ''} value={props.value ? props.value : ''} onChange={props.onChange} required={props.required} maxLength={20} className={`flex-1 bg-transparent focus:outline-none ${props.inputStyle}`} placeholder={props?.placeholder ? props?.placeholder : ''} />
            </div>
            {props.errorMessage && (
                <p className="text-red-500 text-sm">{props.errorMessage}</p>
            )}
        </div>
    )

export default RadioOtherPaymentCard