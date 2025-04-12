import React from 'react'
import { AdventureActivity } from './AdventureActivity'
// import camping from '../assets/images/Group (1).png'
// import trekking from '../assets/images/tenda.png'
// import campFire from '../assets/images/Group 1000001808.png'
// import exploring from '../assets/images/Group 1000001809.png'
const Adventure = () => {
  return (
    <section className='p-5 bg-[rgba(23,195,178,1)] lg:px-24'>
        <p className='font-medium text-xl'>TOUR TYPES</p>
        <h2 className='font-semibold font-playfair text-[40px] text-white my-[10px]'>Adventure & Activity</h2>
        <p className='mb-[30px]'>Explore thrilling destinations that will get your heart racing. From rugged mountains to dense jungles, embark on unforgettable journeys that will test your limits and create lasting memories. Dive into the unknown, conquer nature's challenges, and write your own epic tale of adventure.</p>
        <div className='md:flex md:flex-row md:justify-between md:items-left md:flex-wrap md:gap-5 md:w-full'>
            {
                AdventureActivity.map((items) => (
                <div key={items.id} className='py-5 px-[60px] flex flex-col items-center justify-center md:w-80 md:justify-self-start'>
                    <img src={items.image} alt={items.title} className='w-[85px] aspect-auto'/>
                    <h3 className='my-[11px] text-white font-bold text-3xl font-playfair'>{items.title}</h3>
                    <p className='font-normal text-lg text-center'>{items.description}</p>
                </div>
                ))
            }
        </div>
    </section>
  )
}

export default Adventure
