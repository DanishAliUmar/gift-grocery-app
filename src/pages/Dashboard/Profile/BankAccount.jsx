import React, { useState } from 'react'
import Svg from '../../../components/Elements/Svg'
import Input from '../../../components/Elements/Input';
import Select from '../../../components/Elements/Select';
import Button from '../../../components/Elements/Button';
import { useNavigate } from 'react-router-dom';
const BankAccount = () => {

  const [formData, setFormData] = useState({
    ConfirmAccountNumber: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    nameOnAccount: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const newErrors = {};

    if (!formData.ConfirmAccountNumber.trim()) {
      newErrors.ConfirmAccountNumber = 'Confirm account number is required';
    }
    if (!formData.bankName.trim()) {
      newErrors.bankName = 'bankName is required';
    }
    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Full Name is required';
    }
    if (!formData.ifscCode.trim()) {
      newErrors.ifscCode = 'IFSC Code is required';
    }
    if (!formData.nameOnAccount.trim()) {
      newErrors.nameOnAccount = 'Name on Account is required';
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



  return (
    <form onSubmit={handleSubmit} className='sm:w-96 xl:w-[25rem] mdlarge:w-full space-y-5 pb-20'>
      <Input
        width={'w-full'}
        titleStyle={'text-left'}
        title={'Account number'}
        placeholder={'Type here'}
        value={formData.accountNumber}
        onChange={handleChange}
        name="accountNumber"
        errorMessage={errors.accountNumber}
      />
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'Confirm account number'}
        placeholder={'Type here'}
        value={formData.ConfirmAccountNumber}
        onChange={handleChange}
        name="ConfirmAccountNumber"
        type={'number'}
        errorMessage={errors.ConfirmAccountNumber}
      />
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'IFSC Code'}
        placeholder={'Type here'}
        value={formData.ifscCode}
        onChange={handleChange}
        name="ifscCode"
        errorMessage={errors.ifscCode}
      />

      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'bankName'}
        placeholder={'Type here'}
        value={formData.bankName}
        onChange={handleChange}
        name="bankName"
        errorMessage={errors.bankName}
      />
      <Input
        titleStyle={'text-left'}
        width={'w-full'}
        title={'Name on Account'}
        placeholder={'Type here'}
        value={formData.nameOnAccount}
        onChange={handleChange}
        name="nameOnAccount"
        errorMessage={errors.nameOnAccount}
      />
      <div className=" sm:w-fit w-full flex items-center justify-center pt-5">
        <Button type='submit' text={'Update'} className={'p-3 px-16 sm:!w-fit !w-8/12 sm:m-0 m-auto'} />
      </div>
    </form>
  )
}

export default BankAccount