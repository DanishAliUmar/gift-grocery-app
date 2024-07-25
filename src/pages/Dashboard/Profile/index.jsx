import React from 'react'
import DateInput from '../../../components/Elements/DateInput'
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileSettings from './ProfileSettings';
import BankAccount from './BankAccount';
const Profile = () => {
  const location = useLocation();
    const isBankAccount = location.pathname.includes('/bank-account');
    const Navtgate = useNavigate()
  return (
    <div className="relative overflow-hidden">
      <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
        <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Profile settings</h3>
        <div className="flex items-center sm:gap-4 gap-3">
          <DateInput />
        </div>
      </div>
      <div className="px-5 space-y-5">
        <div className='flex items-center justify-center sm:justify-start relative'>
          <div className={`px-6 py-3 cursor-pointer font-semibold ${isBankAccount ? 'text-gray-600' : 'text-[#F33F41] border-b-2 border-[#F33F41]'}`} onClick={() => Navtgate('/dashboard/profile')}>
          Profile settings
          </div>
          <div className={`px-6 py-3 font-semibold cursor-pointer ${!isBankAccount ? 'text-gray-600' : 'text-[#F33F41] border-b-2 border-[#F33F41]'}`} onClick={() => Navtgate('/dashboard/profile/bank-account')}>
          Bank account
          </div>
          <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10' />
        </div>
        {!isBankAccount ?
          <ProfileSettings />
          : <BankAccount />
        }
      </div>
    </div>
  )
}

export default Profile 