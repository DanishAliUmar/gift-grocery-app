import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Button from './Elements/Button';
import Svg from './Elements/Svg';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation();
    const [openTopMenu, setopenTopMenu] = useState(false)
    return (
        <div className="relative pb-3">
            <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8'>
                <NavLink to="/">
                    <img src='../../nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                </NavLink>
                <div className="lg:flex items-center gap-5 hidden ">
                    <NavLink to="/">
                        <p className={`text-[rgba(104, 104, 104, 1)] text-xl group flex items-center justify-center flex-col cursor-pointer ${location.pathname === '/' ? 'text-[#EE0003] font-semibold' : ''}`}><span className='group-hover:text-[#EE0003]'>Home</span>
                            <span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/' ? 'opacity-100' : ''}`}></span>
                        </p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className="text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/about' ? 'text-[#EE0003] font-semibold' : ''}`}>About</span> <span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/about' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/results">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/results' ? 'text-[#EE0003] font-semibold' : ''}`}>Results</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/results' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/partners">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/partners' ? 'text-[#EE0003] font-semibold' : ''}`}>Partners</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/partners' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/contacts">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/contacts' ? 'text-[#EE0003] font-semibold' : ''}`}>Contacts</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/contacts' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                </div>
                <div className="lg:flex items-center gap-5 hidden">
                    <Svg.Language className='cursor-pointer' />
                    <Svg.Wallet className='cursor-pointer' />

                    {location.pathname.includes('/dashboard') ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREDjXSwEXU79Fsy0tmAffRPHhwz3fNHSelQ&usqp=CAU" alt="" className="w-10 h-10 object-cover rounded-full" />
                    ) : (
                        <NavLink to="/login">
                            <Button text={'Login'} className={' px-8 py-2 !font-medium !text-base'} />
                        </NavLink>
                    )}
                    <img src="../..//nav_img.png" alt="img" className='cursor-pointer' />
                </div>
                <img src="../../hambar.svg" className='lg:hidden block cursor-pointer' alt="hambar" onClick={() => {
                    setopenTopMenu(!openTopMenu)
                }} />
            </div>
            <div className={`absolute w-full bg-white z-[9999] ${openTopMenu ? 'top-0' : '-top-[1000px]'}`}>
                <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8 pb-5 border-b'>
                    <NavLink to="/">
                        <img src='../../nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                    </NavLink>

                    <img src="../../cross.svg" className='cursor-pointer' alt="cross" onClick={() => setopenTopMenu(!openTopMenu)} />
                </div>
                <div className="flex items-center justify-center flex-col gap-8 p-8">
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/">
                        <span className='text-[#EE0003] cursor-pointer font-semibold text-xl'>Home</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/about">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>About</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/results">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Results</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/partners">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Partners</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/contacts">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Contacts</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Language</span>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/login">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Login</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Coupons</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar