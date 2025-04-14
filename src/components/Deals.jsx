import React from 'react'
import image1 from '../assets/images/Rectangle 5765.png'
import image2 from '../assets/images/Rectangle 5763.png'
import image3 from '../assets/images/Rectangle 5764.png'
import image4 from '../assets/images/Rectangle 5766.png'
import image5 from '../assets/images/Rectangle 5767.png'
const Deals = () => {
    const deals=[
        {
            title:'Holidays Suites Navona - ITALY',
            image:image1,
            price: '149,00'
        },
        {
            title:'Kantua hotel - THAILAND',
            image:image2,
            price: '99,00'
        },
        {
            title:'NH Madrid Zurbano - MADRID',
            image:image3,
            price: '89,00'
        },
        {
            title:'Royal Plaza Hotel - HONG KONG',
            image:image4,
            price: '89,00'
        },
        {
            title:'Le Meridien - ABU DHABI',
            image:image5,
            price: '109,00'
        },
    ]
  return (
    <div className='py-9 px-5 lg:px-24 md:bg-[rgba(245,245,245,1)] md: pb-[130px]'>
        <div>
            <h3 className='letter-blue font-medium text-lg mb-[10px]'>BEST OFFERS</h3>
            <h1 className='letter-gray font-playfair text-4xl font-semibold mb-[50px]'>Top Deals and Discounts</h1>
        </div>
        <div className='grid gap-y-[30px] md:grid-cols-3 md:gap-x-6'>
            {
                deals.map((item,i)=> {
                    return (
                        <div key={i} style={{backgroundImage:`url(${item.image})`}} className={`relative min-w-[350px] md:min-w-[250px] min-h-[350px]  h-full bg-cover bg-no-repeat rounded-lg border-b-110 border-[rgba(0,0,0,0.7)] ${i === 0 ? 'md:col-span-2 bg-center' : ''}`}>
                            <div className='absolute left-4 top-65'>
                                <h2 className='letter-blue font-bold text-[20px]'>{item.title}</h2>
                                <div className='flex gap-x-1'>
                                    <h1 className='text-white font-black text-4xl'>&euro;{item.price}</h1>
                                    <p className='letter-blue font-bold text-sm self-end'>Price starts from</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Deals
