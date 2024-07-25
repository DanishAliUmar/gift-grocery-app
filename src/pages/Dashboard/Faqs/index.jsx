import React, { useState } from 'react'
import Svg from '../../../components/Elements/Svg';

const Faqs = () => {
  // Define your FAQ items as an array of objects
  const faqsData = [
    {
      question: 'What is the cost of a coupon?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How do I purchase a coupon?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How often are winners chosen?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'What can I win by participating in the draw?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How is the winner chosen?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How do I redeem my prize?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'Are the coupons transferable or refundable?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'Is there an age restriction for participating?',
      answer: 'The cost of a coupon can vary widely depending on the type of coupon, the product or service it applies to, and the business or retailer offering it. In general, the cost of a coupon is either a percentage discount applied to the total purchase price or a fixed amount deducted from the total.',
    },
    {
      question: 'How long is each coupon valid for entry?',
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
        <h2 className="sm:font-bold text-xl font-semibold sm:text-3xl ">FAQ’s</h2>
      </div>
      <div className="sm:p-7 p-3 space-y-5">
        <h3 className="sm:text-2xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Frequently asked questions</h3>
        <div className="faqs divide-y space-y-5">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-item border !border-b rounded-md text-sm p-4 ${activeIndex === index ? 'space-y-5' : 'space-y-0' }`}>
              <div className="faq-question flex items-center justify-between gap-1 w-full cursor-pointer" onClick={() => toggleActiveIndex(index)}>
                <h4 className="">{faq.question}</h4>
                <span className={`transition-all ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <span><Svg.CshevronBottom/></span>
                </span>
              </div>

              
                <div className={`faq-answer transition-all ${activeIndex === index ? 'h-fit' : 'h-0 overflow-hidden' }`}>
                  <p>{faq.answer}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs