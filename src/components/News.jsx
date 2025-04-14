import React from 'react'
import japaneseTemple from '../assets/images/Rectangle 5755 (6).png';
import arrow from '../assets/images/Arrow 1.svg';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/Rectangle 5755 (2).png'
import image2 from '../assets/images/Rectangle 5755 (3).png'
import image3 from '../assets/images/Rectangle 5755 (4).png'
import image4 from '../assets/images/Rectangle 5755 (5).png'

const News = () => {
    const newsData = [
        {
            image: image1,
            description: 'Exploring the Enigmatic Wonders of Southeast Asia: A Journey of Discovery Through Ancient Temples and Lush Jungles',
            date: '19 SET 2023'
        },
        {
            image: image2,
            description: "Epic Adventures: From Machu Picchu to the Amazon Rainforest - Exploring the Heart of South America's Natural Beauty",
            date: '10 MAY 2023',
        },
        {
            image: image3,
            description: "Chasing Sunsets: A Journey through Europe's Most Romantic Cities - Unveiling the Allure of Historic Charm",
            date: '20 JUL 2023',
        },
        {
            image: image4,
            description: "Off the Beaten Path: Uncovering Hidden Gems in South America - From Remote Villages to Pristine Wilderness",
            date: '15 JUN 2023',
        },
    ]

  return (
    <section className='py-[30px] px-5 bg-[#EDEDED] md:bg-white lg:px-24'>
        <div>
            <h3 className='letter-blue font-medium text-lg mb-[10px] md:text-[20px]'>EXPLORING</h3>
            <h1 className='font-playfair font-semibold text-4xl letter-gray mb-5 md:text-[50px]'>News and Blog</h1>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-x-5'>
            <div className='mb-[50px]'>
                <img src={japaneseTemple} alt="japnese temple" className='w-full max-w-[750px] min-w-[350px] h-auto md:max-h-[370px] md:object-cover rounded-2xl'/>
                <h3 className='letter-blue font-bold text-lg'>ASIA</h3>
                <h2 className='letter-gray font-bold text-2xl my-[10px]'>Unveiling the Enchanting Beauty of Kyoto</h2>
                <p className='text-black text-lg'>Join us on a virtual journey to one of Japan's most captivating cities – <b>Kyoto</b>. In our latest blog post, we'll immerse you in the mesmerizing world of ancient temples, tranquil gardens, and the timeless traditions that define this cultural gem.</p>
                <Link to={'/'} className='letter-blue font-medium text-lg flex gap-x-2 items-center my-4 cursor-pointer'>Read full article <img src={arrow} /></Link>
            </div>
            <div>
                {
                    newsData.map((item,i)=> {
                        return (
                            <div key={i} className='flex gap-x-2 mb-[30px] items-center'>
                                <img src={item.image} alt="image" className='w-26 h-26 rounded-lg'/>  
                                <div>
                                    <p className='letter-gray font-medium'>{item.description}</p>
                                    <p className='letter-blue font-bold text-sm'>{item.date}</p>
                                </div>  
                            </div>
                        )
                    })
                }
                <Link to={'/'} className='letter-blue font-medium text-lg flex gap-x-2 items-center cursor-pointer'>See full article <img src={arrow} /></Link>
            </div>
        </div>
    </section>
  )}
export default News
