import React from 'react'
import { Link } from 'react-router-dom'
import Svg from '../components/Elements/Svg'
import Input from '../components/Elements/Input'
import TextField from '../components/Elements/TextField'
import Button from '../components/Elements/Button'

const Contacts = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-20 py-20 px-10">
      <div className="space-y-2 text-center">
        <h2 className="font-bold md:text-3xl sm:text-2xl text-xl bg-gradient-r inline-block text-transparent bg-clip-text font-[Montserrat] whitespace-nowrap">Learn More Contact Us</h2>
        <p className="text-[#686868]">Thank you for your interest in reaching out to us. We value your  feedback, inquiries, and suggestions. <br /> Please feel free to contact us  using the information provided below:</p>
      </div>
      <div className="flex items-start gap-16 flex-col lg:flex-row w-full">
        <div className="space-y-12 lg:w-fit w-full">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="pb-1 text-sm text-[#686868]">Mail our friendly team for any queries.</p>
            <h4 className="flex items-center gap-2 text-sm font-semibold"><Svg.MailIcon /> sales@mrcorporation@mail.com</h4>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="pb-1 text-sm text-[#686868]">Call our team from Mon to Fri From 9 AM to 6 PM.</p>
            <h4 className="flex items-center gap-2 text-sm font-semibold"><Svg.PhoneIcon /> +1 (672) 588-1590</h4>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Visit Us</h3>
            <p className="pb-1 text-sm text-[#686868]">Chat with us in person at our offices.</p>
            <h4 className="flex items-center gap-2 text-sm font-semibold"><Svg.MapPin /> 290 3rd Ave, Vancouver, BC, Canada </h4>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Socials</h3>
            <p className="pb-1 text-sm text-[#686868]">Follow us on our social media platforms.</p>
            <h4 className="flex items-center gap-2 text-sm font-semibold py-1"><Svg.TwitterX />Twitter</h4>
            <h4 className="flex items-center gap-2 text-sm font-semibold py-1"><Svg.InstaUnfill />Instagram</h4>
            <h4 className="flex items-center gap-2 text-sm font-semibold py-1"><Svg.FaceBookUnfill />Facebook</h4>
          </div>
        </div>
        <div className="bg-white p-12 rounded-[10px] lg:w-[34.375rem] space-y-6 border shadow-lg w-full ">
          <Input title='Full Name' placeholder='Enter Full Name' width='w-full' />
          <Input title='Email Address' placeholder='Enter Email Address' width='w-full' />
          <Input title='Phone Number' placeholder='Enter Phone Number' width='w-full' />
          <TextField title='Message' placeholder='Write Here...' width='w-full' inputStyle={'h-32 resize-none'} />
          <Button text={'Send Message'} className={'px-4 py-3 rounded-lg w-full'} />
        </div>
      </div>
      <section className='lg:px-20 sm:px-10 px-5 xl:py-28 lg:py-20 py-10 text-white'>
        <div className="flex items-center bg-btn-gradient justify-between xl:gap-28 lg:gap-16  gap-10 mdlarge:flex-row flex-col p-8 rounded-3xl">
          <div className="sm:space-y-7 space-y-5">
            <h2 className=" xl:text-2xl sm:text-xl  font-bold">Become A Seller</h2>
            <p className="lg:text-lg text-base">Ready to expand your business reach? Join our platform as a seller today!
              With seamless onboarding and dedicated support, start showcasing your products to a broader audience and boost your sales.</p>
            <button className='px-5 py-3 text-black bg-white sm:text-lg text-sm font-semibold rounded-lg'>Click Here</button>
          </div>
          <img src="../../HandsGifts.png" alt="" className="mdlarge:w-[346px] xl:w-[366px] mdlarge:h-[262px] xl:h-[282px] w-full h-80 object-cover rounded-3xl" />
        </div>
      </section>
    </div>
  )
}

export default Contacts