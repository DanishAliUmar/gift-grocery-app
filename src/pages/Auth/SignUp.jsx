import React, { useState } from 'react'
import Input from '../../components/Elements/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Elements/Button'
import Select from '../../components/Elements/Select'
import ImageUpload from '../../components/Elements/ImageUpload'
import DocumentUpload from '../../components/Elements/DocumentUpload'

const SignUp = () => {
  const [isBusiness, setIsBusiness] = useState(false)
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



  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [addStore, setAddStore] = useState(false);
  const [uploadDocument, setUploadDocument] = useState(false);

  const handleOtpChange = (event, index) => {
    const newOtp = event.target.value;
    setOtp(otp.slice(0, index) + newOtp + otp.slice(index + 1));

    // Focus on the next input field if there's one and a number is entered
    if (newOtp.length === 1 && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handlePaste = (event, index) => {
    // Prevent pasting more than one character in each field
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text').slice(0, 1);
    handleOtpChange({ target: { value: pastedText } }, index);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    storeName: '',
    mobile: '',
    occupation: '',
    province: '',
    businessName: '',
    businessId: '',
    businessNo: '',
    businessPassword: '',
    businessOccupation: '',
    businessProvince: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize navigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const newErrors = {};
    if (isBusiness) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      }
      if (!formData.businessPassword.trim()) {
        newErrors.businessPassword = 'Password is required';
      }
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Business Name is required';
      }
      if (!formData.businessId.trim()) {
        newErrors.businessId = 'Business Id is required';
      }
      if (!formData.businessNo.trim()) {
        newErrors.businessNo = 'Business No is required';
      }
      // if (!formData.businessOccupation.trim()) {
      //   newErrors.businessOccupation = 'Business Occupation is required';
      // }
      // if (!formData.businessProvince.trim()) {
      //   newErrors.businessProvince = 'Business Province is required';
      // }
      // if (formData.agree == false) {
      //   newErrors.agree = 'You should must be agree';
      // }
    }

    if (!isBusiness) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      }
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
      }
      if (!formData.storeName.trim()) {
        newErrors.storeName = 'Store Name is required';
      }
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile is required';
      }
      // if (!formData.occupation.trim()) {
      //   newErrors.occupation = 'Occupation is required';
      // }
      // if (!formData.province.trim()) {
      //   newErrors.province = 'Province is required';
      // }
      // if (formData.agree == false) {
      //   newErrors.agree = 'You should must be agree';
      // }
    }
    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // If no errors, proceed with form submission
    console.log('Form submitted:', formData);
    // Navigate to dashboard page
    // navigate('/dashboard/stats');
    setShowOtp(true)
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


  const handleAddStore = (e) => {
    e.preventDefault();
    setUploadDocument(true)
  }

  return (
    <div className='flex items-stretch'>
      <div className="flex-1 hidden mdlarge:flex items-center p-2 flex-col gap-5 justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(./auth_bg.png)' }}>
        <h1 className="font-bold text-4xl text-white">
          Sign Up
        </h1>
        <img src="../../sigin_up_img.png" alt="" className="" />
      </div>
      <div className="flex-1 min-h-screen sm:text-left text-center">
        {!showOtp ? <form className="xl:p-24 sm:p-16 p-6 space-y-6" onSubmit={handleSubmit}>
          <h3 className="font-bold text-2xl mdlarge:hidden block">Sign up</h3>
          <h2 className="text-2xl font-bold">Choose your account type</h2>
          <div className="text-gray-700 space-y-4">
            <div className="flex items-center sm:justify-start justify-center gap-4 lg:pr-40">
              <div className={`cursor-pointer p-2 px-4 flex rounded-lg items-center justify-start gap-3 w-full ${!isBusiness ? 'bg-btn-gradient  text-white' : ' border-[#F33F41] border'}`} onClick={() => setIsBusiness(false)}>
                <input name="account_type" value='Individual' className='scale-150' type="radio" id='Individual_radio' checked={!isBusiness} />
                <label htmlFor="Individual_radio" className='flex-1'>
                  <p className="flex-1">Individual</p>
                </label>
              </div>
              <div className={`p-2 px-4 flex rounded-lg items-center justify-start gap-3 cursor-pointer w-full ${!isBusiness ? ' border-[#F33F41] border' : 'bg-btn-gradient  text-white'}`} onClick={() => setIsBusiness(true)}>
                <input name="account_type" value='Business' className='scale-150' id='Business_radio' type="radio" checked={isBusiness} />
                <label htmlFor="Business_radio" className='flex-1'>
                  <p className="">Business</p>
                </label>
              </div>
            </div>
            {!isBusiness ?
              <>
                <Input
                  width={'w-full'}
                  titleStyle={'text-left'}
                  title={'Store Name'}
                  placeholder={'Type here'}
                  value={formData.storeName}
                  onChange={handleChange}
                  name="storeName"
                  errorMessage={errors.storeName}
                />
                <Input
                  titleStyle={'text-left'}
                  width={'w-full'}
                  title={'Email id'}
                  placeholder={'Type here'}
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  errorMessage={errors.email}
                />
                <Input
                  titleStyle={'text-left'}
                  width={'w-full'}
                  title={'Mobile no'}
                  placeholder={'Type here'}
                  value={formData.mobile}
                  onChange={handleChange}
                  name="mobile"
                  errorMessage={errors.mobile}
                />
                <div className="flex items-center justify-between gap-5">
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
              </> : <>
                <Input
                  width={'w-full'}
                  titleStyle={'text-left'}
                  title={'Business Name'}
                  placeholder={'Type here'}
                  value={formData.businessName}
                  onChange={handleChange}
                  name="businessName"
                  errorMessage={errors.businessName}
                />
                <Input
                  titleStyle={'text-left'}
                  width={'w-full'}
                  title={'Business id'}
                  placeholder={'Type here'}
                  value={formData.businessId}
                  onChange={handleChange}
                  name="businessId"
                  errorMessage={errors.businessId}
                />
                <Input
                  titleStyle={'text-left'}
                  width={'w-full'}
                  title={'Business no'}
                  placeholder={'Type here'}
                  value={formData.businessNo}
                  onChange={handleChange}
                  name="businessNo"
                  errorMessage={errors.businessNo}
                />
                <div className="flex items-center justify-between gap-5">
                  <Select
                    options={occupationOptions}
                    titleStyle={'text-left'}
                    title={'Occupation'}
                    value={formData.businessOccupation}
                    onChange={handleChange}
                    name="businessOccupation"
                    errorMessage={errors.businessOccupation} />
                  <Select
                    options={provinceOptions}
                    titleStyle={'text-left'}
                    title={'Province'}
                    value={formData.businessProvince}
                    onChange={handleChange}
                    name="businessProvince"
                    errorMessage={errors.businessProvince} />
                </div>
                <Input
                  titleStyle={'text-left'}
                  width={'w-full'}
                  type={'password'}
                  title={'Password'}
                  placeholder={'Type here'}
                  value={formData.businessPassword}
                  onChange={handleChange}
                  name="businessPassword"
                  errorMessage={errors.businessPassword}
                />
              </>
            }
            <div className="flex items-center gap-3">
              <input type="checkbox"
                value={formData.agree}
                onChange={handleChange}
                name="agree"
                errorMessage={errors.agree} />
              <p className="text-gray-700 text-left">Yes, I agreee to the <span className="text-blue-600">Terms & conditions</span> and <span className="text-blue-600">Privacy Policy</span> </p>
            </div>
            <div className=" sm:w-fit w-full flex items-center justify-center">
              <Button type='submit' text={'Sign up'} className={'p-3 px-16 sm:!w-fit !w-8/12 sm:m-0 m-auto'} />
            </div>
          </div>
          <h5 className="">Already have an account? <Link to={'/login'}><span className="font-bold text-[#F33F41] px-1">Log in</span></Link></h5>
        </form>
          :
          !addStore ?
            (<div className="mdlarge:py-24 py-16 mdlarge:px-0 px-3  xl:ml-24 mdlarge:ml-16  mdlarge:max-w-[21.875rem] w-full h-[80vh] text-center mdlarge:text-left flex items-center justify-between flex-col">
              <div className="">
                <h3 className="mdlarge:text-5xl sm:text-4xl text-3xl font-bold text-[#E85A46] pb-2">Verification</h3>
                <p className="pb-5 md:text-xl text-[#747474]">
                  Enter the code sent on email or
                  mobile number
                </p>
              </div>
              <div className="pb-12">
                <div className="flex items-stretch flex-col w-fit">
                  <p className="text-gray-950 font-semibold pb-3 text-2xl text-center">05:00</p>
                  <div className="flex space-x-4 mdlarge:pb-11 pb-8 w-fit">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        id={`otp-input-${index}`}
                        type="tel"
                        inputMode="numeric"
                        maxLength={1}
                        className={`w-14 h-14 border border-gray-300 rounded-lg font-medium text-[#F33F41] text-2xl text-center focus:outline-none `}
                        value={otp[index] || ''}
                        onChange={(e) => handleOtpChange(e, index)}
                        onPaste={(e) => handlePaste(e, index)}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[#747474] font-light mdlarge:text-xl">
                  I didn’t receive the code! <span className='font-medium text-[#F33F41] cursor-pointer'>Resend</span>
                </p>
              </div>
              <Button text={'Submit'} handleClick={() => { setAddStore(true) }} className={'mdlarge:px-[4.5625rem] px-24 py-[0.875rem] mdlarge:w-full'} />
            </div>)
            :
            !uploadDocument ?
              (<form className="xl:px-24 sm:px-16 px-6 space-y-6" onSubmit={handleAddStore} >
                <h2 className="text-2xl font-bold">Add New Store</h2>
                <div className="text-gray-700 space-y-4">
                  <>
                    <Input
                      width={'w-full'}
                      titleStyle={'text-left'}
                      title={'Store Name'}
                      placeholder={'Type here'}
                    // value={formData.storeName}
                    // onChange={handleChange}
                    // name="storeName"
                    // errorMessage={errors.storeName}
                    />
                    <Input
                      titleStyle={'text-left'}
                      width={'w-full'}
                      title={'Store Description'}
                      placeholder={'Type here'}
                    // value={formData.storeDescription}
                    // onChange={handleChange}
                    // name="storeDescription"
                    // errorMessage={errors.storeDescription}
                    />
                    <Input
                      titleStyle={'text-left'}
                      width={'w-full'}
                      title={'Business no'}
                      placeholder={'Type here'}
                    // value={formData.businessNo}
                    // onChange={handleChange}
                    // name="businessNo"
                    // errorMessage={errors.businessNo}
                    />
                    <Input
                      titleStyle={'text-left'}
                      width={'w-full'}
                      title={'Contact'}
                      placeholder={'Type here'}
                    // value={formData.contact}
                    // onChange={handleChange}
                    // name="contact"
                    // errorMessage={errors.contact}
                    />
                    <ImageUpload />
                  </>
                  <div className="!mt-10 sm:w-fit w-full flex items-center justify-center">
                    <Button type='submit' text={'Add store'} className={'p-3 px-16 sm:!w-fit !w-8/12 sm:m-0 m-auto'} />
                  </div>
                </div>
              </form>)
              :
              (<form className="xl:px-24 sm:px-16 px-6 sm:space-y-6 space-y-3 pt-5 text-left" >
                <h2 className="xl:text-[2rem] sm:text-3xl text-xl font-semibold bg-text-gradient-b inline-block text-transparent bg-clip-text">Upload Legal Document</h2>
                <div className="text-gray-700 space-y-6">
                  <>
                    <DocumentUpload id={'upload_legal_documents'} titleStyle={'sm:text-base text-sm'} title='Upload Legal Documents' />
                    <DocumentUpload id={'refund_policy'} titleStyle={'sm:text-base text-sm'} title='Refund and Return Policy' />
                    <DocumentUpload id={'dispute_resolution'} titleStyle={'sm:text-base text-sm'} title='Dispute Resolution' />
                    <DocumentUpload id={'business_informatiol'} titleStyle={'sm:text-base text-sm'} title='Business Registration Informatiol' />
                  </>
                  <div className="!mt-10 sm:w-fit w-full flex items-center justify-center">
                    <Button type='submit' text={'Upload'} className={'p-3 px-16 sm:!w-fit !w-8/12 sm:m-0 m-auto'} />
                  </div>
                </div>
              </form>)
        }
      </div>

    </div>
  )
}

export default SignUp