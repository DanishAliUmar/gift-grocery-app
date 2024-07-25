import React, { useState } from 'react'
import Select from '../../../components/Elements/Select'
import Input from '../../../components/Elements/Input';
import Svg from '../../../components/Elements/Svg';
import Button from '../../../components/Elements/Button';
import { useNavigate } from 'react-router-dom';

const ClaimGift = ({setPopupType}) => {
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

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        bcId: '',
        address: '',
        mobileNo: '',
    });
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Name is required';
        }
        if (!formData.bcId.trim()) {
            newErrors.bcId = 'BcId is required';
        } if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        } if (!formData.mobileNo.trim()) {
            newErrors.mobileNo = 'Mobile No is required';
        }

        // If there are errors, set them and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setPopupType('claimed')
        Navigate('/dashboard/stats');
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        // Clear error message when input value changes
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
    };



    // Function to handle image file selection
    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(imageFile);
    };

    // Function to handle video file selection
    const handleVideoChange = (event) => {
        const videoFile = event.target.files[0];
        setSelectedVideo(videoFile);
    };

    return (
        <form className="relative pb-5" onSubmit={handleSubmit}>
            <div className='flex items-center justify-between gap-2 px-5 py-6 border-b'>
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold sm:text-lg cursor-pointer" onClick={()=> Navigate('/dashboard/stats')}>Stats </h3> <Svg.CshevronRight className={'w-2 h-[0.875rem]'} />
                    <h4 className="font-semibold sm:text-lg text-[#F33F41] cursor-pointer">Claim</h4>
                </div>
                <div className="flex items-center gap-4">
                    <Select
                        selectParent={'!px-1 sm:!px-4'}
                        selectStyle={'sm:!w-full !py-1 sm:!py-3 !w-[120px]'}
                        options={provinceOptions}
                        titleStyle={'text-left'}
                        name="province" />
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 space-y-6 sm:space-y-0 gap-6 p-6 sm:pb-12 pb-6">
                <Input
                    parentClass={'w-full'}
                    // required={true}
                    width={'w-full'}
                    titleStyle={'text-left'}
                    title={'Full Name'}
                    placeholder={'Type here'}
                    value={formData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    errorMessage={errors.fullName}
                />
                <Input
                    parentClass={'w-full'}
                    // required={true}
                    width={'w-full'}
                    titleStyle={'text-left'}
                    title={'Email id'}
                    placeholder={'Type here'}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    errorMessage={errors.email}
                />
                <Input
                    parentClass={'w-full'}
                    // required={true}
                    width={'w-full'}
                    titleStyle={'text-left'}
                    title={'BC ID'}
                    placeholder={'Type here'}
                    value={formData.bcId}
                    onChange={handleChange}
                    name="bcId"
                    errorMessage={errors.bcId}
                />
                <Input
                    parentClass={'w-full'}
                    // required={true}
                    width={'w-full'}
                    titleStyle={'text-left'}
                    title={'Address'}
                    placeholder={'Type here'}
                    value={formData.address}
                    onChange={handleChange}
                    name="address"
                    errorMessage={errors.address}
                />
                <Input
                    parentClass={'w-full'}
                    // required={true}
                    width={'w-full'}
                    titleStyle={'text-left'}
                    title={'Mobile no'}
                    placeholder={'Type here'}
                    value={formData.mobileNo}
                    onChange={handleChange}
                    name="mobileNo"
                    errorMessage={errors.mobileNo}
                />
                <div className="col-span-2 grid place-items-center sm:grid-cols-2 w-full gap-6">
                    <label htmlFor="img-upload" className="w-full rounded-lg border p-5 text-center flex items-center justify-center flex-col gap-2">
                        <input type="file" id="img-upload"
                            onChange={handleImageChange}
                            className="hidden" />
                        <Svg.Gallery />
                        <p className="text-gray-500 text-sm">{selectedImage ? selectedImage.name : "Upload photo"}</p>
                    </label>
                    <label htmlFor="video-upload" className="w-full rounded-lg border p-5 text-center flex items-center justify-center flex-col gap-2">
                        <input type="file" id="video-upload"
                            onChange={handleVideoChange}
                            className="hidden" />
                        <Svg.VedioPlay />
                        <p className="text-gray-500 text-sm">{selectedVideo ? selectedVideo.name : "Upload Video"}</p>
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Button type='submit' text={'Claim now'} className={'p-3 px-16 rounded-lg m-auto'} />
            </div>
        </form>
    )
}

export default ClaimGift


