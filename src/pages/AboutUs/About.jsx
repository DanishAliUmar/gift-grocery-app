import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Elements/Button'
import Svg from '../../components/Elements/Svg'
import Zaika from '../../components/Zaika'

const About = () => {
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
    <div className="">
      <header className='flex items-center bg-white justify-between xl:gap-28 lg:gap-16 mdlarge:gap-10 sm:gap-20 gap-10 lg:px-28 sm:px-10 px-5  xl:py-28 lg:py-20 py-10 mdlarge:flex-row flex-col'>
        <div className="sm:space-y-8 space-y-6">
          <h1 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-xl  font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Learn More About Us</h1>
          <p className="text-[#686868] lg:text-base text-sm"><span className="text-[#E85348]">MR Corporation</span> is a premier grocery delivery website operating in Canada. We provide a convenient platform for users to buy coupons and stand a chance to win a year of free grocery delivery. Additionally, users receive a gift coupon every 24 hours</p>
          <div className="space-x-4">
            <Button text={'Get Coupon'} className={'px-4 py-3 rounded-lg'} />
            <button className='px-5 py-3 text-[#333333] sm:text-lg text-sm font-semibold rounded-lg border-[#969696] border'>Watch Video</button>
          </div>
        </div>
        <img src="../../AboutUs_hero_img.png" alt="" className="xl:w-[480px] xl:h-[440px] mdlarge:size-96 w-full h-80 object-cover rounded-3xl" />
      </header>
      <div className="xl:px-32 sm:px-16 px-8 sm:py-3 py-1 bg-[#F6F6F6] my-2 whitespace-nowrap flex items-center justify-center">
        <marquee>
          <div className="flex items-center justify-start gap-20  w-full">
            <h3 className="sm:text-xl text-sm font-medium text-[#45A843]">Jack Smith just bought  2 coupons(AB)</h3>
            <span className=""><Svg.Star className='sm:scale-100 scale-75' /></span>
            <h3 className="sm:text-xl text-sm font-medium text-[#45A843]">Lara Ben just bought 3 coupons(CC)</h3><span className=""><Svg.Star className='' /></span>
            <h3 className="sm:text-xl text-sm font-medium text-[#45A843]">Parkar jet just bought 3 coupons(CC)</h3>
          </div>
        </marquee>
      </div>
      <section className="flex items-start justify-between lg:px-28 sm:px-10 px-5  xl:py-28 lg:py-20 py-10 mdlarge:flex-row flex-col gap-20">
        <div className="flex-1 space-y-6">
          <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">
            Our Vision
          </h2>
          <p className="text-[#686868] sm:text-base text-sm">At MR Corporation, we're committed to revolutionizing Canadian grocery delivery with easy access to coupons, exciting prizes, and unmatched customer satisfaction, offering an immersive shopping experience that adds value to your life. Join us in reshaping grocery delivery in Canada!</p>
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="lg:text-3xl sm:text-2xl text-xl font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">
            Our Mission
          </h2>
          <p className="text-[#686868] sm:text-base text-sm">At MR Corporations, we're not just delivering groceries – we're shaping the future of Canadian shopping. Join us as we set new standards in convenience, affordability, and customer rewards.</p>
        </div>
      </section>
      <section className='lg:px-20 sm:px-10 px-5 xl:py-28 lg:py-20 py-10 text-white'>
        <div className="flex items-center bg-btn-gradient justify-between xl:gap-28 lg:gap-16  gap-10 mdlarge:flex-row flex-col p-8 rounded-3xl">
          <div className="sm:space-y-7 space-y-5">
            <h2 className=" xl:text-2xl sm:text-xl  font-bold">Unlock Rewards for You and Your Loved Ones!</h2>
            <p className="lg:text-lg text-base">At MR, we believe that sharing joy should be rewarding. That's why we've introduced our "Earn and Refer" program—an exciting opportunity for you to not only enhance the lives of your friends and family but also earn fantastic rewards for yourself!</p>
            <button className='px-5 py-3 text-black bg-white sm:text-lg text-sm font-semibold rounded-lg'>Click Here</button>
          </div>
          <img src="../../HandsGifts.png" alt="" className="mdlarge:w-[346px] xl:w-[366px] mdlarge:h-[262px] xl:h-[282px] w-full h-80 object-cover rounded-3xl" />
        </div>
      </section>
      <section className='lg:px-20 sm:px-10 px-5 xl:py-28 lg:py-20 py-10'>
        <div className="flex items-start bg-white justify-between xl:gap-28 lg:gap-16  gap-10 mdlarge:flex-row flex-col p-8 rounded-3xl">
          <img src="../../Free_Coupons_img.png" alt="" className="object-cover rounded-3xl mdlarge:w-[400px] xl:w-[500px] mdlarge:h-[340px] xl:h-[400px] w-full" />
          <div className="sm:space-y-7 space-y-5">
            <h2 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-xl font-bold text-[#686868] drop-shadow-md"><span className="text-[#000]">Free Coupons:</span> Simple, Seamless, and Rewarding</h2>
            <p className="lg:text-lg text-base">Love the convenience and savings with MR Corporation? Share the joy with  your friends! Refer them to us and both of you can enjoy the benefits  of our free grocery delivery and digital coupons. It's a win-win for  everyone. Spread the word and let's make grocery shopping easier and  more affordable for all.</p>
            <div className="space-y-4">
              <div className="flex items-center sm:gap-2 gap-1">
                <Svg.CheckCircleIcon className={'sm:scale-100 scale-[0.65]'} />
                <h5 className="sm:font-medium font-semibold sm:text-lg text-base text-[#1E1E1E]">Share the Love</h5>
              </div>
              <div className="flex items-center sm:gap-2 gap-1">
                <Svg.CheckCircleIcon className={'sm:scale-100 scale-[0.65]'} />
                <h5 className="sm:font-medium font-semibold sm:text-lg text-base text-[#1E1E1E]">Earn 10% of the Joy</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center bg-white justify-between xl:gap-28 mdlarge:gap-10 sm:gap-20 gap-10 lg:px-28 sm:px-10 px-5  xl:pb-28 lg:pb-20 pb-10 mdlarge:flex-row flex-col'>
        <div className="sm:space-y-6 space-y-4">
          <h2 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-xl  font-bold bg-black inline-block text-transparent bg-clip-text">Our Presence across Canada </h2>
          <div className="flex items-center gap-10 flex-wrap">
            <div className="space-y-[0.625rem]">
              <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold">10k</h3>
              <p className="text-[#686868]">Join us every week</p>
            </div>
            <div className="space-y-[0.625rem]">
              <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold">100k</h3>
              <p className="text-[#686868]">Coupons Sold</p>
            </div>
            <div className="space-y-[0.625rem]">
              <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold">100+</h3>
              <p className="text-[#686868]">Families benefited</p>
            </div>
          </div>
          <Button text={'Join Now'} className={'px-4 py-3 rounded-lg'} />
        </div>
        <img src="../../canada_dot_map.png" alt="" className=" object-cover rounded-3xl" />
      </section>
      <Zaika />
      <section className='lg:px-28 sm:px-10 px-5 xl:py-28 lg:py-20 py-10 space-y-10'>
        <h3 className="sm:text-3xl text-xl font-bold bg-black inline-block text-transparent bg-clip-text">Frequently asked questions</h3>
        <div className="faqs divide-y space-y-5">
          {faqsData.map((faq, index) => (
            <div key={index} className={`faq-item border !border-b rounded-md text-sm p-4 ${activeIndex === index ? 'space-y-5' : 'space-y-0'}`}>
              <div className="faq-question flex items-center justify-between gap-1 w-full cursor-pointer" onClick={() => toggleActiveIndex(index)}>
                <h4 className="text-lg font-semibold">{faq.question}</h4>
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

export default About