import React, { useState } from 'react'
import Svg from './Svg'

const DocumentUpload = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    // Function to handle image file selection
    const handleDocmentChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
    };

  return (
    <div className={`space-y-2 ${props?.parentClass ? props?.parentClass : ''}`}>
    {props.title ? <p className={`font-medium ${props?.titleStyle ? props?.titleStyle : ''}`}>{props?.title}</p> : ''}
      <div className={`flex items-center relative justify-between  border rounded-lg  px-4 py-3 bg-[#F5F6F8] border-[#DEDEDE] w-full transition-all ${props.errorMessage && "!border-l-[0.375rem] !border-[#eb3b3b]"}`}>
        <input id={props.id} name={props?.name ? props?.name : ''} onChange={handleDocmentChange} required={props.required} type='file' className={`flex-1 bg-transparent opacity-0 w-full absolute focus:outline-none ${props.inputStyle}`}/>
        <lable htmlFor={props.id} className="flex-1">{selectedImage ? selectedImage.name : "Upload"}</lable>
        <span className='outline-none border-none cursor-pointer' >
          <Svg.UploadDocument className={`w-5`} /> 
        </span>
      </div>
    {props.errorMessage && (
      <p className="text-red-500 text-sm">{props.errorMessage}</p>
    )}
  </div>
  )
}

export default DocumentUpload