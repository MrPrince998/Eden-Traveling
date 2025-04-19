import React from 'react'
import NavBar from './NavBar'
import heroImage from '../assets/images/hero image background.png'

const HeroSection = () => {
  return (
    <main className='relative'>
      <div className="bg-cover bg-left h-[463px] lg:min-h-[730px] lg:100% lg:max-h-[942px] w-full transition-all duration-300 ease-in-out" style={{ backgroundImage: `url(${heroImage})`}}>
        <NavBar textColor="text-white"/>
        <div className='lg:absolute text-white text-center px-2 flex flex-col items-center mx-auto lg:px-[100px] sm:w-150 lg:w-190 lg:top-50 lg:right-14 md:my-12'>
          <h1 className='transition-all duration-500 ease-in-out text-4xl w-80 md:w-full sm:text-5xl font-bold font-playfair my-4'>Welcome  to the World of Extraordinary Travel</h1>
          <p className='text-xl my-2 md:w-150'>If you're in search of exciting  adventures, unforgettable experiences, and breathtaking places to explore, you've come to the right place!</p>
        </div>
      </div>
      <section className='bg-[#025951] text-white pt-[43px] pb-15 px-5 lg:bg-[rgba(0,0,0,0.7)] lg:w-full lg:px-2 md:gap-2 lg:backdrop-blur-sm lg:absolute lg:top-120'>
        <h2 className='mb-5 font-bold text-2xl font-playfair text-center md:text-[40px]'>Plan your travel now</h2>
        <div>
          <form className='flex flex-col gap-4 mx-5 lg:grid lg:grid-cols-5 lg:gap-5 lg:items-end lg:justify-between md:mx-auto'>
            <div className='lg:justify-self-center'>
              <label className='font-sans block'>Search Destination*</label>
              <input
                type="text"
                placeholder='Enter Destination'
                className='bg-white rounded-lg py-1 px-3 text-black placeholder-gray w-full lg:w-[200px] h-[50px]'
              />
            </div>
            <div className='lg:justify-self-center'>
              <label className='font-sans block'>Pax Number*</label>
              <input
                type='text'
                placeholder='No. of People'
                className='bg-white rounded-lg py-1 px-3 text-black placeholder-gray w-full lg:w-[200px] h-[50px]'
              />
            </div>
            <div className='lg:justify-self-center'>
              <label className='font-sans block'>Checkin Date*</label>
              <input
                type='date'
                placeholder='MM/DD/YYYY'
                className='bg-white rounded-lg py-1 px-3 text-black placeholder-gray w-full lg:w-[200px] h-[50px]'
              />
            </div>
            <div className='lg:justify-self-center'>
              <label className='font-sans block'>Checkout Date*</label>
              <input
                type='date'
                placeholder='MM/DD/YYYY'
                className='bg-white rounded-lg py-1 px-3 text-black placeholder-gray w-full lg:w-[200px] h-[50px]'
              />
            </div>
              <button className='px-6 bg-[#17C3B2] w-full lg:w-50 h-[50px] rounded-full font-semibold lg:justify-self-center'>
                Search
              </button>
          </form>
        </div>
    </section>
    </main>
  )
}

export default HeroSection



