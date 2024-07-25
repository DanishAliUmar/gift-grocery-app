import React, { useState } from 'react'
import Button from '../../../components/Elements/Button'
import Svg from '../../../components/Elements/Svg'
import Input from '../../../components/Elements/Input'
import PaymentCardInput from '../../../components/Elements/PaymentCardInput'
import OtherPaymentCard from '../../../components/Elements/OtherPaymentCard'

const WalletDetail = () => {
    const [addMoneyPopup, setAddMoneyPopup] = useState(false)
    const [paymentAdded, setPaymentAdded] = useState(false)
    const handleAddMoneyPopup = () => {
        setAddMoneyPopup(true)
    }
    const handleAddMoney = () => {
        // setAddMoneyPopup(false)
        setPaymentAdded(true)
    }
    const closeAddMoneyPopup = () => {
        setAddMoneyPopup(false)
        setPaymentAdded(false)
    }

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-2">
                <div className="sm:space-y-3 text-[#4E4C4C] text-center sm:text-left">
                    <h4 className="text-lg">
                        Total balance
                    </h4>
                    <h2 className="font-bold text-3xl ">$1200.00</h2>
                </div>
                <Button handleClick={handleAddMoneyPopup} text={'Add Money'} className={'px-12 lg:py-4 py-3'} />
            </div>
            <div className="sm:space-y-5 space-y-3 pb-8">
                <h3 className="sm:text-xl text-[#4E4C4C]">Recent transactions</h3>
                <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                    <div className="flex items-center sm:gap-4 gap-3">
                        <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                            <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                        </div>
                        <div className="space-y-[2px]">
                            <h4 className="font-semibold text-black sm:text-base text-sm">Bought 2 Coupon</h4>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                        </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold">-$25.00</h3>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                    <div className="flex items-center sm:gap-4 gap-3">
                        <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                            <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                        </div>
                        <div className="space-y-[2px]">
                            <h4 className="font-semibold text-black sm:text-base text-sm">Bought 2 Coupon</h4>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                        </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold">-$25.00</h3>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                    <div className="flex items-center sm:gap-4 gap-3">
                        <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                            <h4 className="sm:text-xl font-semibold text-white">JS</h4>
                        </div>
                        <div className="space-y-[2px]">
                            <h4 className="font-semibold text-black sm:text-base text-sm">Bought 2 Coupon</h4>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Jan 04, 12:14 AM</p>
                            <p className="font-medium sm:text-sm text-xs text-[#4E4C4C]">Transaction id: 8273</p>
                        </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold">-$25.00</h3>
                </div>
                <div className="flex items-center justify-center gap-3 pt-3">
                    <Svg.CircleLeftArrow />
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                        <p className="border-b border-[#F33F41] leading-4 font-semibold bg-gradient-b inline-block text-transparent bg-clip-text">1</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                        <p className="leading-4 font-semibold text-[#BCBCBC]">2</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                        <p className="leading-4 font-semibold text-[#BCBCBC]">3</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                        <p className="leading-4 font-semibold text-[#BCBCBC]">...</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center cursor-pointer">
                        <p className="leading-4 font-semibold text-[#BCBCBC]">22</p>
                    </div>
                    <Svg.CircleRightArrow />

                </div>
            </div>
            {addMoneyPopup &&
                <div className="absolute w-full h-full bg-[#0000009a] -top-5 left-0 flex items-center justify-center">
                    {!paymentAdded ?
                        <form onSubmit={handleAddMoney} className="sm:p-9 p-3 py-9 sm:min-w-[400px] sm:w-fit w-11/12 text-center relative bg-white rounded-xl space-y-4">
                            <div className="gap-5 flex items-center justify-center flex-col">
                                <h3 className="text-2xl font-semibold pb-8">
                                    Add Money
                                </h3>
                                <Input placeholder={'$'} type='number' title={'Enter amount'} titleStyle={'text-left'} inputStyle={'w-full'} parentClass={'w-full'} />
                                <PaymentCardInput id='bankCard01' name={'payment_method'} checked={true} value={'xxxx xxxx xxxx 2100'} titleStyle={'text-left'} title={'Saved Cards'} placeholder='xxxx xxxx xxxx 2100' />
                                <button className='w-full flex items-center justify-center gap-2 border border-[#F84145] text-[#F33F41] p-3 rounded-lg'>
                                    <Svg.CirclePlus />
                                    <p className="">Add new Card</p>
                                </button>
                            </div>
                            <div className="text-left space-y-5 pt-3">
                                <p className="font-medium">Other payment options</p>
                                <OtherPaymentCard readOnly={true} name={'payment_method'} id='Strip_pay' img={'../../stripe.svg'} text={'Pay with Stripe'} />
                            </div>
                            <div className="pt-9">
                                <Button handleClick={handleAddMoney} text={'Add Money'} className={'px-12 py-3'} />
                            </div>
                            <div className="absolute right-5 top-0 cursor-pointer" onClick={() => setAddMoneyPopup(false)}>
                                <Svg.CrossIcon className={'w-4 h-4'} fill={'#F84145'} />
                            </div>
                        </form>
                        :
                        <>

                            <div className="p-16 px-4 sm:px-16 text-center relative bg-white rounded-xl space-y-4 sm:w-fit w-11/12">
                                <div className="gap-4 flex items-center justify-center flex-col">
                                    <Svg.CircleTick />
                                    <h3 className="text-2xl font-semibold">
                                        $1200 <br />
                                        Added successfully
                                    </h3>
                                </div>
                                <p className="text-lg">
                                    You have Successfully added $1200  <br className='hidden sm:block'/> into your wallet
                                </p>
                            </div>
                            <div className="absolute right-10 top-10 cursor-pointer" onClick={closeAddMoneyPopup}>
                                <Svg.CrossIcon />
                            </div>
                        </>
                    }
                </div>}
        </div>
    )
}

export default WalletDetail