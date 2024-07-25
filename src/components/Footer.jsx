import React from 'react'

const Footer = () => {
  return (
    <div className='lg:px-28 sm:px-16 px-3 lg:py-14 sm:py-8 py-3 bg-[#7C7C7B] xs:text-left text-center'>
      <div className="bg-white rounded-3xl p-8">
        <div className="grid xl:grid-cols-8 lg:grid-cols-5 grid-cols-1 gap-5 border-b border-black pb-8">
          <div className="space-y-8 xl:col-span-3 lg:col-span-2 col-span-1">
            <img src="../../nav_logo.png" alt="" className="w-24 h-16 m-auto xs:m-0" />
            <p className="">Join Mr. Corporation on this exciting journey, where innovation and community converge for a shopping experience like no other.</p>
          </div>
          <div className="space-y-8 lg:col-span-2 col-span-1">
            <h4 className="font-bold text-2xl">
              Sales
            </h4>
            <div className="space-y-2">
              <p className="font-medium">sales@mrcorporation@mail.com</p>
              <p className="">Mon –Fri 9AM – 6PM</p>
            </div>
            <div className="flex items-center gap-3 justify-center xs:justify-start">
              <a href="https://www.tiktok.com/@mrcorp_" target="_blank"><img src="../../tictock.svg" alt="" className='' /></a>
              <a href="https://www.facebook.com/mrcorp.ca" target="_blank"><img src="../../facebook.svg" alt="" className='' /></a>
              <a href="https://www.instagram.com/mrcorp.ca/" target="_blank"><img src="../../insta.svg" alt="" className='' /></a>
              <a href="https://www.youtube.com/@MRCorp" target="_blank"><img src="../../youtube.svg" alt="" className='' /></a>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2 col-span-1 xl:pl-10 whitespace-nowrap">
            <h4 className="font-bold text-2xl">
              Calls
            </h4>
            <div className="space-y-2">
              <p className="xl:text-xl font-semibold underline">+1 (672) 588-1590</p>
              <p className="">Mon –Fri 9AM – 6PM</p>
            </div>
          </div>
          <div className="space-y-8 xl:col-span-1 lg:col-span-3 col-span-1">
            <h4 className="font-bold text-2xl whitespace-nowrap">
              MR Apps
            </h4>
            <div className="flex flex-wrap gap-2 items-cente justify-center xs:justify-start">
              <img src="../../Play store.png" alt="" className='sm:w-36 w-28' />
              <img src="../../IOS.png" alt="" className='sm:w-36 w-28' />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col gap-2 py-3">
          <p className="text-black text-center">
            Copyright © MR Corporation, 2023. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <img src="../../paypal.png" alt="" className="" />
            <img src="../../masterCard.png" alt="" className="" />
            <img src="../../visa.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer