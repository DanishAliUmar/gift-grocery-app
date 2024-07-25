import React, { useState } from 'react'
import Svg from './Svg'

const TextField = (props) => {
    return (
        <div className={`space-y-2 ${props?.parentClass ? props?.parentClass : ''}`}>
            {props.title ? <p className={`font-medium ${props?.titleStyle ? props?.titleStyle : ''}`}>{props?.title}</p> : ''}
            <textarea name={props?.name ? props?.name : ''} onChange={props.onChange} required={props.required} type={props?.type ? props?.type : 'text'} className={`bg-[#F5F6F8] border-[#DEDEDE] border px-4 py-3 rounded-lg focus:outline-none transition-all w-fit ${props.errorMessage && "!border-l-[0.375rem] !border-[#eb3b3b]"} ${props.inputStyle} ${props?.width}`} placeholder={props?.placeholder ? props?.placeholder : ''}></textarea>
            {props.errorMessage && (
                <p className="text-red-500 text-sm">{props.errorMessage}</p>
            )}
        </div>
    )
}

export default TextField