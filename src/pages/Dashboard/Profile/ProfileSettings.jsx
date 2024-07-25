import React, { useState } from 'react'
import Svg from '../../../components/Elements/Svg'
import Input from '../../../components/Elements/Input';
import Select from '../../../components/Elements/Select';
import Button from '../../../components/Elements/Button';
import { useNavigate } from 'react-router-dom';

const ProfileSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image
  const occupationOptions = [
    { value: 'accountant', label: 'Accountant' },
    { value: 'engineer', label: 'Engineer' },
    { value: 'software_developer', label: 'Software Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'manager', label: 'Manager' },
    { value: 'entrepreneur', label: 'Entrepreneur' },
    // Add more occupations as needed
  ];

  const provinceOptions = [
    { value: 'alberta', label: 'Alberta' },
    { value: 'british_columbia', label: 'British Columbia' },
    { value: 'manitoba', label: 'Manitoba' },
    { value: 'new_brunswick', label: 'New Brunswick' },
    { value: 'newfoundland_and_labrador', label: 'Newfoundland and Labrador' },
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
    PhoneNo: '',
    password: '',
    fullName: '',
    email: '',
    occupation: '',
    province: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const newErrors = {};

    if (!formData.PhoneNo.trim()) {
      newErrors.PhoneNo = 'Phone No is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // If no errors, proceed with form submission
    console.log('Form submitted:', formData);
    // Navigate to dashboard page
    navigate('/dashboard/stats');
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



  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => setSelectedImage(e.target.result); // Update state with image URL
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <form  onSubmit={handleSubmit} className='sm:w-96 xl:w-[25rem] mdlarge:w-full space-y-5 pb-20'>
      <div className="w-32 h-32 rounded-full border relative">
        {selectedImage ? ( // Check if selected image exists
          <img src={selectedImage} alt="Profile Picture" className="w-full h-full rounded-full object-cover" />
        ) : ( // Display default image if no selection
          <img src="https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg" alt="Default Profile Picture" className="w-full h-full rounded-full object-cover" />
        )}

        <label htmlFor='ChangeImgInput' className="absolute bottom-0 right-0 w-9 h-9 bg-btn-gradient rounded-full flex items-center justify-center border-4 border-white">
          <Svg.EditIcon className="w-[14px] h-[14px]" />
          <input
            id='ChangeImgInput'
            // className='opacity-0'
            type="file"
            accept="image/*"
            hidden // Hide the input element
            onChange={handleImageChange}
          />
        </label>
      </div>

      <Input
        width={'w-full'}
        titleStyle={'text-left'}
        title={'Full name'}
        placeholder={'Type here'}
        value={formData.fullName}
        onChange={handleChange}
        name="fullName"
        errorMessage={errors.fullName}
      />
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'Phone no'}
        placeholder={'Type here'}
        value={formData.PhoneNo}
        onChange={handleChange}
        name="PhoneNo"
        type={'number'}
        errorMessage={errors.PhoneNo}
      />
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'Email'}
        type={'email'}
        placeholder={'Type here'}
        value={formData.email}
        onChange={handleChange}
        name="email"
        errorMessage={errors.email}
      />
      <div className="flex items-center justify-between gap-5 flex-col sm:flex-row">
        <Select
          options={occupationOptions}
          titleStyle={'text-left'}
          title={'Occupation'}
          value={formData.occupation}
          onChange={handleChange}
          name="occupation"
          errorMessage={errors.occupation} />
        <Select
          options={provinceOptions}
          titleStyle={'text-left'}
          title={'Province'}
          value={formData.province}
          onChange={handleChange}
          name="province"
          errorMessage={errors.province} />
      </div>
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        type={'Password'}
        title={'Password'}
        placeholder={'Type here'}
        value={formData.password}
        onChange={handleChange}
        name="password"
        errorMessage={errors.password}
      />
      <div className=" sm:w-fit w-full flex items-center justify-center pt-5">
        <Button type='submit' text={'Update'} className={'p-3 px-16 sm:!w-fit !w-8/12 sm:m-0 m-auto'} />
      </div>
    </form>
  )
}

export default ProfileSettings