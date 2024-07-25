import React, { useState } from 'react'
import Select from '../../../components/Elements/Select'
import Input from '../../../components/Elements/Input'
import Button from '../../../components/Elements/Button';
import GiftWalletDetail from './GiftWalletDetail';
import WalletDetail from './WalletDetail';
import { useLocation, useNavigate } from 'react-router-dom';
import DateInput from '../../../components/Elements/DateInput';

const Wallet = () => {
    const location = useLocation();
    const isGiftWalletDetail = location.pathname.includes('/gift-wallet');
    const Navtgate = useNavigate()
    return (
        <div className="relative overflow-hidden">
            <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
                <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Wallet</h3>
                <div className="flex items-center sm:gap-4 gap-3">
                    <DateInput />
                    {/* <Input inputStyle={'!px-1 sm:!px-4 !py-[3px] sm:!py-3 sm:!w-full !w-[120px]'} type="date" /> */}
                </div>
            </div>
            <div className="px-5 space-y-5">
                <div className='flex items-center justify-center sm:justify-start relative'>
                    <div className={`px-6 py-3 cursor-pointer font-semibold ${isGiftWalletDetail ? 'text-gray-600' : 'text-[#F33F41] border-b-2 border-[#F33F41]'}`} onClick={() => Navtgate('/dashboard/wallet')}>
                        Wallet
                    </div>
                    <div className={`px-6 py-3 font-semibold cursor-pointer ${!isGiftWalletDetail ? 'text-gray-600' : 'text-[#F33F41] border-b-2 border-[#F33F41]'}`} onClick={() => Navtgate('/dashboard/wallet/gift-wallet')}>
                        Gift wallet
                    </div>
                    <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10' />
                </div>
                {isGiftWalletDetail ?
                    <GiftWalletDetail />
                    : <WalletDetail />
                }
            </div>
        </div>
    )
}

export default Wallet