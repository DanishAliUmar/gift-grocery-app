import React, { useState } from 'react'
import Input from '../../components/Elements/Input'
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../../components/Elements/Button'
import Svg from '../../components/Elements/Svg';

const Login = () => {
    const [isBusiness, setIsBusiness] = useState(false)
    // State variables for form data and errors
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize navigate

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }
        // If there are errors, set them and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // If no errors, proceed with form submission
        console.log('Form submitted:', formData);
        // Navigate to home page
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
        <div className='flex items-stretch'>
            <div className="flex-1 hidden mdlarge:flex items-center p-2 flex-col gap-5 justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(./auth_bg.png)' }}>
                <h1 className="font-bold text-4xl text-white">
                    Log in
                </h1>
                <img src="../../auth_img.png" alt="" className="" />
            </div>
            <div className="flex-1 min-h-screen sm:text-left text-center">
                <form className="xl:p-24 sn:p-16 p-6 space-y-6" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold">Login to your account</h2>
                    <div className="text-gray-700 space-y-4">
                        <h5 className="text-lg font-semibold text-[#3B3B3B]">Choose your account type</h5>
                        <div className="flex items-stretch sm:justify-start justify-center sm:gap-10 gap-4">
                            <div className={`px-2 cursor-pointer py-3 flex rounded-lg items-center justify-center flex-col gap-2 min-w-28 ${!isBusiness ? ' bg-gradient-r  text-white' : ' border border-gray-950'}`} onClick={() => setIsBusiness(false)}>
                                <Svg.Profile fill={`${!isBusiness ? '#fff' : '#000 '}`} />
                                <p className="">Individual</p>
                            </div>
                            <div className={`px-2 cursor-pointer py-3 flex rounded-lg items-center justify-center flex-col gap-2  min-w-28 ${!isBusiness ? 'border border-gray-950' : 'bg-gradient-r  text-white'}`} onClick={() => setIsBusiness(true)}>
                                <Svg.BusinessHouse fill={`${!isBusiness ? '#000' : '#fff'}`} />
                                <p className="">Business</p>
                            </div>
                        </div>
                        {!isBusiness ?
                            <>
                                <Input
                                    // required={true}
                                    width={'w-full'}
                                    titleStyle={'text-left'}
                                    title={'Email id or Mobile no'}
                                    placeholder={'Type here'}
                                    value={formData.email}
                                    onChange={handleChange}
                                    name="email"
                                    errorMessage={errors.email}
                                />
                                <Input
                                    // required={true}
                                    titleStyle={'text-left'}
                                    width={'w-full'}
                                    type={'password'}
                                    title={'Password'}
                                    placeholder={'Type here'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    name="password"
                                    errorMessage={errors.password}
                                />
                            </>
                            :
                            <>
                                <Input
                                    // required={true}
                                    width={'w-full'}
                                    titleStyle={'text-left'}
                                    title={'Business id'}
                                    placeholder={'Type here'}
                                    value={formData.email}
                                    onChange={handleChange}
                                    name="email"
                                    errorMessage={errors.email}
                                />
                                <Input
                                    // required={true}
                                    titleStyle={'text-left'}
                                    width={'w-full'}
                                    type={'password'}
                                    title={'Password'}
                                    placeholder={'Type here'}
                                    onChange={() => handleChange}
                                    name="password"
                                    value={formData.password}
                                    errorMessage={errors.password}
                                />
                            </>

                        }
                        <div className="!text-right">
                            <p className="text-[#F33F41] w-full font-medium">Forgot password?</p>
                        </div>
                        <div className="space-y-6">
                            <Button type='submit' text={'Login'} className={'p-3 px-16 sm:!w-fit !w-full'} />
                            <div className="space-y-4">
                                <label htmlFor="loginBtn"><p className=" text-lg"><span className="font-medium">Login</span> with</p></label>
                                <button id='loginBtn' className='rounded-full sm:w-fit w-full p-3 px-10 text-white sm:text-lg text-sm font-semibold border border-[#176BEF]'><img src="../../google_logo.png" alt="" className="m-auto" /></button>
                            </div>
                        </div>
                    </div>
                    <h5 className="">Don’t have an account? <Link to={'/signup'}> <span className="font-bold text-[#F33F41] px-1 cursor-pointer">Sign up</span></Link></h5>
                </form>
            </div>

        </div>
    )
}

export default Login