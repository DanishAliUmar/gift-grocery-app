import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Elements/Button'
import Svg from '../components/Elements/Svg'

const Partners = () => {
  return (
    <div className="">
      <header className='flex items-center bg-white justify-between xl:gap-28 lg:gap-16 mdlarge:gap-10 sm:gap-20 gap-10 lg:px-28 sm:px-10 px-5  xl:py-28 lg:py-20 py-10 mdlarge:flex-row flex-col'>
        <div className="sm:space-y-8 space-y-6">
          <h1 className=" xl:text-4xl lg:text-3xl sm:text-2xl text-xl  font-bold bg-btn-gradient inline-block text-transparent bg-clip-text">Charting New Horizons Together: Introducing Our Dynamic Partner Network</h1>
          <p className="text-[#686868] lg:text-base text-sm">Partnerships are the cornerstone  of our success, driving innovation, growth, and mutual prosperity.  Whether you're a fellow industry leader, a startup with big dreams, or an established business looking to expand horizons, we invite you to  join us on this exciting journey. Together, we can achieve greatness,  unlock new opportunities, and create lasting value for our customers and  communities.</p>
          <div className="">
            <Link to={'/login'}>
              <Button text={'Become A partner'} className={'px-4 py-3 rounded-lg'} />
            </Link>
          </div>
        </div>
        <img src="../../Hero__img__Partnership.png" alt="" className="xl:size-[480px] sm:size-96 size-80 object-cover" />
      </header>
      <section className='py-14 bg-[#FCF1F0] lg:px-28 sm:px-10 px-5 space-y-12'>
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#1E1E1E] font-bold">Benefits of Partnership?</h2>
        <div className="grid xl:grid-cols-3 mdlarge:grid-cols-2 grid-cols-1 gap-5">
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.ReachIcon />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Maximize Your Reach </h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Discover our promotional opportunities tailored to elevate your brand's  visibility and drive growth. Stand out with sponsored content, featured  listings, and exclusive partnership packages. Let's amplify your impact  together!"</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.DataAnalyticsIcon />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Uncover insights: Data Analytics </h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Gain invaluable insights into customer behavior and market trends. Turn data into action for smarter  strategies and accelerated growth, we offer a comprehensive suite of analytics solutions to help you stay ahead of the competition.</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.MarketingIcon />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Power Up Your Marketing </h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Team up with us to amplify your marketing impact. Through shared resources and strategic partnerships, we'll reach new heights together. Together, let's maximize our reach, enhance brand visibility, and drive mutual growth.</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.CompetitiveAdvantageIcon />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Competitive Advantage</h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Partner with us and unlock new opportunities for success. Staying ahead of the competition is  crucial for business success. With our innovative advertising solutions,  you can gain a competitive advantage that sets you apart from the  crowd.</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.CostEffectiveAdvertisingIcon />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Cost-Effective Advertising</h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Maximize marketing budget with our cost-effective advertising  solutions. Our strategies ensure every dollar spent  delivers maximum results. From targeted campaigns to  optimized tracking, you achieve your goals without  breaking the bank.</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
          <div className="space-y-8 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <div className="space-y-4">
              <Svg.BrandAuthority />
              <div className="space-y-1">
                <h4 className="text-[#1E1E1E] font-semibold xs:text-lg">Establish Your Brand Authority </h4>
                <p className="font-normal text-[#686868] xs:text-base text-sm">Our branding solutions help build trust, credibility and recognition within your industry. We empower you to position your brand as a leader in the minds of your audience. Partner with us to stand out from and drive lasting customer loyalty."</p>
              </div>
            </div>
            <Button text={'Learn More'} className={'px-4 py-2 rounded-lg'} />
          </div>
        </div>
      </section>
      <section className="bg-white py-14 lg:px-28 sm:px-10 px-5 space-y-20">
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#1E1E1E] font-bold">Our Partners</h2>
        <marquee>
          <div className="flex items-center justify-between lg:gap-10 sm:gap-10 gap-5">
            <img src="../../Partners_imgs/Partners2.png" alt="" className="lg:w-36 md:w-32 w-20" />
            <img src="../../Partners_imgs/Partners3.png" alt="" className="lg:w-36 md:w-32 w-20" />
            <img src="../../Partners_imgs/Partners4.png" alt="" className="lg:w-36 md:w-32 w-20" />
            <img src="../../Partners_imgs/Partners5.png" alt="" className="lg:w-36 md:w-32 w-20" />
            <img src="../../Partners_imgs/Partners1.png" alt="" className="lg:w-36 md:w-32 w-20" />
          </div>
        </marquee>
      </section>
      <section className='py-14 bg-[#FCF1F0] lg:px-28 sm:px-10 px-5 space-y-12'>
        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-[#1E1E1E] font-bold">Our Satisfied sellers</h2>
        <div className="grid xl:grid-cols-3 mdlarge:grid-cols-2 grid-cols-1 gap-5">
          <div className="space-y-4 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQN9WyFGv6HTifQovtoS4xlBvZ2crLWM5o6TIH0yJIQ&s" alt="" className='w-12 h-12 object-cover rounded-full border-[#D9D9D9] border' />
            <div className="space-y-1">
              <h4 className="text-black font-semibold xs:text-lg">Joshua </h4>
              <h5 className="text-[#FB6D72]">Marketing Manager of Manik Grocery Store</h5>
              <p className="font-normal text-black xs:text-base text-sm">Becoming a seller on this platform was a game-changer for our business! The streamlined process and robust support have truly accelerated our growth.</p>
            </div>
          </div>
          <div className="space-y-4 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZoTbNbnGBEQKvaCHtxkLsqN-RzCLkvlABmqR1ylTEw&s" alt="" className='w-12 h-12 object-cover rounded-full border-[#D9D9D9] border' />
            <div className="space-y-1">
              <h4 className="text-black font-semibold xs:text-lg">Emery </h4>
              <h5 className="text-[#FB6D72]">Business Manager of Hopmart</h5>
              <p className="font-normal text-black xs:text-base text-sm">As a new seller, I was amazed by the ease of onboarding and the array of promotional tools available. It's been a rewarding journey with tangible results.</p>
            </div>
          </div>
          <div className="space-y-4 rounded-[5px] bg-white border-[#F2F2F2] border py-8 px-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQN9WyFGv6HTifQovtoS4xlBvZ2crLWM5o6TIH0yJIQ&s" alt="" className='w-12 h-12 object-cover rounded-full border-[#D9D9D9] border' />
            <div className="space-y-1">
              <h4 className="text-black font-semibold xs:text-lg">Aryan </h4>
              <h5 className="text-[#FB6D72]">Senior Manager of Amrit Sweets</h5>
              <p className="font-normal text-black xs:text-base text-sm">Transitioning to a seller on this platform was seamless. The promotional tools provided have significantly enhanced our visibility, leading to increased sales and brand recognition.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners