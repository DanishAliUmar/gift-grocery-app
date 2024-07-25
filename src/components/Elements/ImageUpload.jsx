import React, { useState } from 'react';
import Svg from './Svg';

function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => setSelectedImage(e.target.result);
            reader.readAsDataURL(event.target.files[0]);
        } else {
            setSelectedImage(null);
        }
    };

    return (
        <div className="space-y-[0.625rem]">
            <h3 className="font-medium text-left">Upload Store Logo</h3>
            <div className="flex flex-col items-center justify-center w-full h-36 rounded-lg border bg-[#f5f6f8] border-[#e0e0e0]">
                {selectedImage ? (
                    <img src={selectedImage} alt="Selected Image" className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <label htmlFor="image-upload" className="flex  items-center justify-center cursor-pointer">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-14 w-14 text-gray-400"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v7m0 0v2m0-4h-3m3 0h4" />
                        </svg> */}
                        <Svg.PlusIcon className={'w-6 h-6'}/>
                    </label>
                )}
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />
            </div>
        </div>
    );
}

export default ImageUpload;
