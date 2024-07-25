import React from 'react'
import Svg from '../../../components/Elements/Svg'

const GiftWalletDetail = () => {
    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between flex-col sm:flex-row gap-2">
                <div className="sm:space-y-3 text-[#4E4C4C] text-center sm:text-left">
                    <h4 className="text-lg">
                        Total balance
                    </h4>
                    <h2 className="font-bold text-3xl ">$1200.00</h2>
                </div>
            </div>
            <div className="sm:space-y-5 space-y-3 pb-8">
                <h3 className="sm:text-xl text-[#4E4C4C]">Recent transactions</h3>
                <div className="flex items-center justify-between p-3 border rounded-2xl sm:px-3 px-2 py-3">
                    <div className="flex items-center sm:gap-4 gap-3">
                        <div className="flex items-center justify-center sm:w-14 w-10 sm:h-14 h-10 rounded-full bg-gradient-b">
                            <h4 className="sm:text-xl font-semibold text-white">RS</h4>
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
                            <h4 className="sm:text-xl font-semibold text-white">PS</h4>
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
                            <h4 className="sm:text-xl font-semibold text-white">PK</h4>
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
                        <p className="border-b border-[#F33F41] leading-4 font-semibold bg-gradient-r inline-block text-transparent bg-clip-text">1</p>
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
        </div>
    )
}

export default GiftWalletDetail