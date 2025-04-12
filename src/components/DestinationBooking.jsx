import React from 'react'

const DestinationBooking = () => {
  return (
    <section className='bg-[#025951] text-white pt-10 pb-15 px-5 md:bg-black/30 md:absolute'>
      <h2 className='mb-5 font-bold text-2xl font-playfair text-center md:text-[40px]'>Plan your travel now</h2>
      <div>
        <form className='mx-5 min-w-[310px] md:flex flex-wrap justify-between items-center md:gap-5 md:mx-auto'>
            <div className='mb-4'>
                <label className='font-sans block'>Search Destination*</label>
                <input type="text" placeholder='Enter Destination' className='bg-white rounded-lg py-1 px-3 placeholder-[#999999] min-w-[310px] w-full text-black'/>
            </div>
            <div className='mb-4'>
                <label className='font-sans block'>Pax Number*</label>
                <input type='text' placeholder='No. of People' className='bg-white rounded-lg py-1 px-3 placeholder-[#999999] min-w-[310px] w-full'/>
            </div>
            <div className='mb-4'>
                <label className='font-sans block'>Checkin Date*</label>
                <input type='date' placeholder='MM/DD/YYYY' className='bg-white rounded-lg py-1 px-3 placeholder-[#999999] text-[#999999] min-w-[310px] w-full'/>
            </div>
            <div className='mb-4'>
                <label className='font-sans block'>Checkout Date*</label>
                <input type='date' placeholder='MM/DD/YYYY' className='bg-white rounded-lg py-1 px-3 placeholder-[#999999] text-[#999999] min-w-[310px] w-full'/>
            </div>
            <button className='px-6 bg-[#17C3B2] w-full h-[50px] rounded-full'>Search</button>
            
        </form>
      </div>
    </section>
  )
}

export default DestinationBooking
