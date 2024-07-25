import React, { useState } from 'react'
import Svg from '../../../components/Elements/Svg';
import Button from '../../../components/Elements/Button'
const HelpSupport = () => {
  // Define your FAQ items as an array of objects
  const faqsData = [
    {
      question: 'How does the app work?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How do I place an order?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'Can I customize my order?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: "What do I do if there's an issue with my order?",
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How is the winner chosen?',
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
    <div className="relative overflow-hidden">
      <div className='sm:p-5 p-3 border-b'>
        <h2 className="sm:font-bold text-xl font-semibold sm:text-3xl ">Help & Support</h2>
      </div>
      <div className='flex items-center justify-center sm:justify-start relative sm:px-7 px-3'>
        <div className="flex items-start justify-between w-full flex-col xs:flex-row gap-y-7 gap-2 pt-8 pb-3">
          <div className="xs:space-y-5 space-y-3 text-[#4E4C4C] text-left">
            <h4 className="sm:text-2xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">
              Customer Support
            </h4>
            <div className="flex items-center gap-3">
              <Svg.Sms />
              <p className="text-[#F33F41]">help@mrcorporation.com</p>
            </div>
            <p className="text-[#2F80ED] border-b border-[#2F80ED] leading-4 w-fit ">Privacy  policy</p>
          </div>
          <Button text={'Chat with us'} className={'lg:px-10 px-6 lg:py-3 py-2'} />
        </div>
        <hr className='border-dashed border-b h-[1px] absolute bottom-0 w-full -z-10' />
      </div>
      <div className="sm:p-7 p-3 space-y-5">
        <h3 className="sm:text-2xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Frequently asked questions</h3>
        <div className="faqs divide-y space-y-5">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-item border !border-b rounded-md text-sm p-4 ${activeIndex === index ? 'space-y-5' : 'space-y-0'}`}>
              <div className="faq-question flex items-center justify-between gap-1 w-full cursor-pointer" onClick={() => toggleActiveIndex(index)}>
                <h4 className="">{faq.question}</h4>
                <span className={`transition-all ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <span><Svg.CshevronBottom /></span>
                </span>
              </div>


              <div className={`faq-answer transition-all ${activeIndex === index ? 'h-fit' : 'h-0 overflow-hidden'}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HelpSupport