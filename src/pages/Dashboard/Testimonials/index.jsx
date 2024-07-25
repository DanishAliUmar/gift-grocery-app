import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Svg from '../../../components/Elements/Svg';
const Testimonials = () => {
  return (
    <div className="Testimonials__section relative overflow-hidden">
      <div className='flex items-center flex-wrap sm:flex-nowrap justify-between gap-2 px-5 py-6 border-b'>
        <h3 className="sm:font-bold font-semibold sm:text-3xl text-base">Testimonials</h3>
      </div>
      <div className="px-5 text-left pb-5">
        <div className="flex sm:items-center items-start justify-between w-full flex-col sm:flex-row gap-2 pt-8 pb-3">
          <h4 className="sm:text-2xl text-xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">
            <span className='font-light'> What </span> Clients Say <br /> About Us
          </h4>
          <button className='border-b border-[#F33F41] hidden  font-semibold leading-5 text-lg bg-btn-gradient sm:inline-block text-transparent bg-clip-text'>View All</button>
        </div>


        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },

            1280: {
              slidesPerView: 2,
              spaceBetween: 0,
            },

            1536: {
              slidesPerView: 3,
              spaceBetween: 0,
            }
          }}
          className="mySwiper"
        >
          <SwiperSlide className='!w-full xl:!w-1/2 2xl:!w-1/3 px-2'>
            <div className="p-6 rounded-2xl text-gray-800 shadow-lg space-y-5">
              <p className="text-sm text-gray-950">“Empowering families, building communities - our vision at M R Corporation is to create a positive and lasting impact on the lives of individuals and communities. We strive to be a beacon of hope, providing essential support like free grocery gift cards in” </p>
              <div className="flex items-center gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-12 h-12 rounded-full object-cover border-2 border-[#F33F41]" />
                <div className="">
                  <h4 className="font-medium">Jack Smith</h4>
                  <p className="text-sm">Winner</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='!w-full xl:!w-1/2 2xl:!w-1/3 px-2'>
            <div className="p-6 rounded-2xl text-gray-800 shadow-lg space-y-5">
              <p className="text-sm">“Empowering families, building communities - our vision at M R Corporation is to create a positive and lasting impact on the lives of individuals and communities. We strive to be a beacon of hope, providing essential support like free grocery gift cards in” </p>
              <div className="flex items-center gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-12 h-12 rounded-full object-cover border-2 border-[#F33F41]" />
                <div className="">
                  <h4 className="font-medium">Jack Smith</h4>
                  <p className="text-sm">Winner</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='!w-full xl:!w-1/2 2xl:!w-1/3 px-2'>
            <div className="p-6 rounded-2xl text-gray-800 shadow-lg space-y-5">
              <p className="text-sm">“Empowering families, building communities - our vision at M R Corporation is to create a positive and lasting impact on the lives of individuals and communities. We strive to be a beacon of hope, providing essential support like free grocery gift cards in” </p>
              <div className="flex items-center gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-12 h-12 rounded-full object-cover border-2 border-[#F33F41]" />
                <div className="">
                  <h4 className="font-medium">Jack Smith</h4>
                  <p className="text-sm">Winner</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='!w-full xl:!w-1/2 2xl:!w-1/3 px-2'>
            <div className="p-6 rounded-2xl text-gray-800 shadow-lg space-y-5">
              <p className="text-sm">“Empowering families, building communities - our vision at M R Corporation is to create a positive and lasting impact on the lives of individuals and communities. We strive to be a beacon of hope, providing essential support like free grocery gift cards in” </p>
              <div className="flex items-center gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-12 h-12 rounded-full object-cover border-2 border-[#F33F41]" />
                <div className="">
                  <h4 className="font-medium">Jack Smith</h4>
                  <p className="text-sm">Winner</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>


        <div className="py-3 my-5 border-dashed border-b-2">
          <p className="text-[#686868] font-light">At M R Corporation, we are not just a business; we are a community-driven organization committed to making a meaningful impact in the lives of families across Canada. Established with a vision to contribute to the well-being of our communities, our company stands as a beacon of generosity and support, offering free grocery delivery and free digital grocery coupons to ensure accessibility and affordability for all.</p>
        </div>

        <div className="">
          <div className="flex sm:items-center items-start sm:pb-3 pb-6 justify-between w-full flex-col sm:flex-row gap-2 py-3">
            <h4 className="sm:text-2xl xs:text-xl text-lg font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">
              Photos <span className='font-light'>& Videos </span>
            </h4>
            <button className='border-b border-[#F33F41] font-semibold leading-5 text-lg bg-btn-gradient inline-block text-transparent bg-clip-text'>All photos & Videos</button>
          </div>
          <video className='w-full lg:h-[450px] h-fit' controls>
            <source src="../../Fruits__vedio.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
          </video>
          <div className="py-5 space-y-1 border-b border-[#1E1E1E]">
            <h3 className="text-lg text-[#1E1E1E] roboto-regular">Great experience with MR</h3>
            <div className="flex sm:items-center items-start gap-y-2 justify-between w-full flex-col sm:flex-row">
              <div className="text-[#949494] text-sm space-x-1">
                <span className="roboto-bold">156,987 views</span><span>.</span><span className="roboto-bold">Nov 25, 2022</span>
              </div>
              <div className="xs:flex grid grid-cols-3 items-center gap-4 text-[#1E1E1E] text-sm">
                <div className="flex items-center gap-2">
                  <Svg.LikeIcon />
                  <span className="roboto-bold">2.7 K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Svg.DisLikeIcon />
                  <span className="roboto-bold">2.7 K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Svg.ShareIcon />
                  <span className="roboto-bold">SHARE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Svg.SaveInListIcon />
                  <span className="roboto-bold">SAVE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Svg.MoreMenuIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 space-y-6">
            <div className="flex items-center gap-8 text-[#1E1E1E]">
              <span className="roboto-regular">28  Comments</span>
              <div className="flex items-center gap-2">
                <Svg.SortIcon />
                <span className="uppercase text-sm roboto-bold">Sort by</span>
              </div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="img" className="w-10 h-10 rounded-full object-cover" />
              <input type="text" placeholder='Add a public comment...' className='flex-1 border-b border-[#1E1E1E] p-1' />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="text-[#1E1E1E] ">
                  <h4 className="text-sm roboto-bold">Jack Smith <span className='text-[#949494] roboto-regular text-xs'> 8 hours ago</span></h4>
                  <p className="text-sm roboto-regular">Winner</p>
                  <div className="flex items-center gap-1">
                      <div className="flex items-center gap-2 p-1">
                        <Svg.LikeIcon className={'w-4'}/> <span className='text-[#949494] roboto-regular text-sm'>7</span>
                      </div>
                      <div className="flex items-center gap-2 p-1">
                        <Svg.DisLikeIcon className={'w-4'}/> <span className='text-[#949494] roboto-regular text-sm'>7</span>
                      </div>
                      <p className="text-xs roboto-regular text-[#E84A4A] uppercase px-3 tracking-widest">reply</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" className="w-10 h-10 rounded-full object-cover" />
                <div className="text-[#1E1E1E] ">
                  <h4 className="text-sm roboto-bold">Jack Smith <span className='text-[#949494] roboto-regular text-xs'> 8 hours ago</span></h4>
                  <p className="text-sm roboto-regular">Winner</p>
                  <div className="flex items-center gap-1">
                      <div className="flex items-center gap-2 p-1">
                        <Svg.LikeIcon className={'w-4'}/> <span className='text-[#949494] roboto-regular text-sm'>7</span>
                      </div>
                      <div className="flex items-center gap-2 p-1">
                        <Svg.DisLikeIcon className={'w-4'}/> <span className='text-[#949494] roboto-regular text-sm'>7</span>
                      </div>
                      <p className="text-xs roboto-regular text-[#E84A4A] uppercase px-3 tracking-widest">reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials 