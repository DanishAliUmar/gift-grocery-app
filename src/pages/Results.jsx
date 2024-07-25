import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button'
import Select from '../components/Elements/Select'
import Zaika from '../components/Zaika';
import Svg from '../components/Elements/Svg';



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


const Results = () => {

  // Define your FAQ items as an array of objects
  const faqsData = [
    {
      question: 'How do I sign up as a seller on the app?',
      answer: 'To become a seller, simply download our app, navigate to the seller registration section, and follow the easy step-by-step process to create your account.',
    },
    {
      question: 'What are the requirements for becoming a seller?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How long does it take to get approved as a seller?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'What support do you offer for new sellers?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
  ];


  // Define state to track which FAQ item is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="overflow-x-hidden">
      <header className='flex items-center bg-white justify-between xl:gap-28 lg:gap-16 mdlarge:gap-10 sm:gap-20 gap-10 lg:px-28 sm:px-10 px-5  xl:py-28 lg:py-20 py-10 mdlarge:flex-row flex-col'>
        <div className="sm:space-y-8 space-y-6">
          <h1 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-xl  font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Experience the Thrill of Winning: Explore Our Results</h1>
          <p className="text-[#686868] lg:text-base text-sm">Step into the Realm of Victory: Witness the Manifestation of Dedication,  Innovation, and Success in Our Comprehensive Compilation of Winning  Results - Your Gateway to Inspired Excellence and Unprecedented  Achievement.</p>
          <div className="space-x-4">
            <Button text={'View Winners'} className={'px-4 py-3 rounded-lg'} />
          </div>
        </div>
        <img src="../../results_hero_img.png" alt="" className="xl:w-[480px] xl:h-[440px] mdlarge:size-96 w-full h-80 object-cover rounded-3xl" />
      </header>
      <div className='flex items-center bg-[#F2F2F2] justify-between gap-10 xl:gap-20 lg:px-28 sm:px-7 px-5  xl:py-28 lg:py-20 py-10 mdlarge:flex-row flex-col-reverse'>
        <div className="">
          <div className="xl:w-[26rem] sm:w-[23rem] w-[20rem] sm:h-[27rem] h-[25rem] xl:h-[30rem] relative">
            <div className="absolute top-0 left-0 xl:w-[23rem] sm:w-[20rem] w-[18rem] h-[20rem] sm:h-[22rem] xl:h-[27rem]">
              <div className="z-20 flex items-center gap-3 absolute -right-10  w-fit px-4 py-2 rounded-xl bg-white border-[#0003] sm:text-xl text-sm top-[25%] shadow-2xl"><span className="">Richard</span>🎉 </div>
              <div className="flex items-center text-center justify-end flex-col text-sm gap-1 sm:scale-100 scale-75 absolute lg:-left-10 w-28 h-40 rounded-xl  z-20  p-2 bg-[#f9f9f9] bottom-0" style={{ clipPath: 'polygon(0 14%, 100% 0%, 100% 100%, 0 100%)' }} >
                <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-10 h-10 rounded-full object-cover drop-shadow-2xl" />
                <h6 className="text-[#3B3B3B] text-xs">Fresh fruit</h6>
                <hr className="w-1/4 border-b-[#F33F41] border-b-2" />
                <h4 className="font-bold text-sm">$55.00</h4>
                <p className="text-[#949494] text-[10px]">Free Shopping</p>
              </div>
              <img src="../../result_page_polygon.png" alt="" className="w-full h-[110%] absolute top-0" />
              <img src="../../users/user04.png" alt="" className="w-full h-full  object-contain z-10 absolute rounded-b-full" />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Jack Smith just WON one year grocery today. </h4>
          <h2 className="mb-4 !leading-[1.3] xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Dreams come true and Winners Emerge Daily!"</h2>
          <p className="pb-10 text-[#686868] lg:text-base text-sm">"🎉 Jack Smith Shines! 🌟 Secures a Year's Supply of Groceries with DailyDeals. Dive into the joy of winning as we unravel Jack's story and reveal the daily impact of DailyDeals on their life!</p>
          <div className="space-x-4">
            <Button text={'Check All Results'} className={'px-4 py-2 rounded-lg'} />
            <button className='px-5 py-2 text-[#333333] sm:text-lg text-sm font-semibold rounded-lg border-[#969696] border'>View Video</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col xl:flex-row gap-20 lg:pl-28 lg:pr-10 sm:px-7 px-5  xl:py-28 lg:py-20 py-10 relative">
        <div className="text-nowrap w-full xl:w-fit">
          <h2 className="text-[#1E1E1E] lg:text-4xl sm:text-3xl text-2xl font-bold">
            Previous Winners
          </h2>
          <div className="flex items-center gap-4 py-4">
            <Select options={provinceOptions} defultSelectedText={'Province'} width={'!w-[100px]'} selectParent={'!w-[135px]'} parentClass={'!w-fit'} backgroundColor={'!bg-white'} />
            <Select options={provinceOptions} defultSelectedText={'Monthly'} width={'!w-[100px]'} selectParent={'!w-[135px]'} parentClass={'!w-fit'} backgroundColor={'!bg-white'} />
          </div>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-3 gap-20 py-4 min-w-[25rem] ">
              <h4 className="text-lg font-bold">winners</h4>
              <h4 className="text-lg font-bold">Date</h4>
              <h4 className="text-lg font-bold">Province</h4>
            </div>
            <div className="divide-y min-w-[25rem] ">
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
              <div className="grid grid-cols-3 gap-20 py-[0.625rem] text-[#686868]">
                <h4 className="">Paul Fisher</h4>
                <h4 className="">15 Mar 2024</h4>
                <h4 className="">Las Vegas</h4>
              </div>
            </div>
          </div>
        </div>
        <img src="../../result__winners.png" alt="img" className="" />
        <img src="../../Vector.png" alt="" className="absolute -top-[20%] -right-[10%] z-10" />
      </div>
      <Zaika />
      <section className='lg:px-28 sm:px-10 px-5 xl:py-28 lg:py-20 py-10 space-y-10'>
        <h3 className="sm:text-3xl text-xl font-bold bg-black inline-block text-transparent bg-clip-text">Frequently asked questions</h3>
        <div className="faqs divide-y space-y-5">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-item border !border-b rounded-md text-sm p-4 ${activeIndex === index ? 'space-y-5' : 'space-y-0'}`}>
              <div className="faq-question flex items-center justify-between gap-1 w-full cursor-pointer" onClick={() => toggleActiveIndex(index)}>
                <h4 className="sm:text-lg text-sm font-semibold">{faq.question}</h4>
                <span className={`transition-all ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <span><Svg.CshevronBottom /></span>
                </span>
              </div>
              <div className={`faq-answer transition-all ${activeIndex === index ? 'h-fit' : 'h-0 overflow-hidden'}`}>
                <p className='text-[#686868]'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Results