import React, { useEffect, useRef, useState } from 'react'
import client1 from '../assets/images/unsplash_MTZTGvDsHFY (1).png'
import client2 from '../assets/images/unsplash_MTZTGvDsHFY (2).png'
import yellowStar from '../assets/images/Star 11.png'
import whiteStar from '../assets/images/Star 15.png'
import RightArrow from '../assets/images/right arrow btn.png'
import Quote from '../assets/images/quote.png'

const Testimonial = () => {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 2);
    const [currentClient, setCurrentClient ] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
        const sliderRef = useRef(null);
        
        const handleTransitionEnd = () => {
            if (currentClient === totalSlides) {
                setIsTransitioning(false);  
                setCurrentClient(0);         
            }
        };
    const client = [
        {
            image: client1,
            description: '“Sarah, a local resident, possesses a profound connection to this region. Having once served as a host, she intimately comprehends the significance of having someone dedicated to managing every intricate detail, ensuring a seamless experience for all.”',
            rating: 5,
            name: 'Isabe Rose',
            level: 'Manager',
            qu: Quote
        },
        {
            image: client2,
            description: '“Liam, born and raised in this locale, has an innate connection to the area. With a background as a host himself, he fully appreciates the necessity of having someone who can attend to all the small but essential aspects, making every moment memorable.”',
            rating: 4,
            name: 'Oliver Mitchell',
            level: 'Landscape Architect',
            qu: Quote
        },
        {
            image: client1,
            description: '“Sarah, a local resident, possesses a profound connection to this region. Having once served as a host, she intimately comprehends the significance of having someone dedicated to managing every intricate detail, ensuring a seamless experience for all.”',
            rating: 5,
            name: 'Isabe Rose',
            level: 'Manager',
            qu: Quote
        },
        {
            image: client2,
            description: '“Liam, born and raised in this locale, has an innate connection to the area. With a background as a host himself, he fully appreciates the necessity of having someone who can attend to all the small but essential aspects, making every moment memorable.”',
            rating: 4,
            name: 'Oliver Mitchell',
            level: 'Landscape Architect',
            qu: Quote
        },
        {
            image: client1,
            description: '“Sarah, a local resident, possesses a profound connection to this region. Having once served as a host, she intimately comprehends the significance of having someone dedicated to managing every intricate detail, ensuring a seamless experience for all.”',
            rating: 5,
            name: 'Isabe Rose',
            level: 'Manager',
            qu: Quote
        },
        {
            image: client2,
            description: '“Liam, born and raised in this locale, has an innate connection to the area. With a background as a host himself, he fully appreciates the necessity of having someone who can attend to all the small but essential aspects, making every moment memorable.”',
            rating: 4,
            name: 'Oliver Mitchell',
            level: 'Landscape Architect',
            qu: Quote
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentClient((prev) => {
                return (prev + slidesPerView) % client.length;
            });
        }, slidesPerView === 1 ? 3000 : 6000);
    
        return () => clearInterval(interval);
    }, [slidesPerView, client.length]);
    

        useEffect(()=>{
            const handleResize = () => {
                const mobile = window.innerWidth < 768;
                setSlidesPerView(mobile ? 1 : 2);
                setCurrentClient(0);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        },[])

    
    const totalSlides = client.length;

    const goToSlide = (index) => {
        setCurrentClient(index);
    };
    
  return (
    <section className='py-[30] px-5 lg:px-24 md:pt-[87px] md:pb-[154px]'>
        <h1 className='letter-gray font-playfair font-semibold text-4xl'>Happy Client Stories</h1>
        <div className='relative'>
            <div className="absolute top-1/2 lg:left-[-70px] z-10">
                <img src={RightArrow} alt="arrow" onClick={() => goToSlide(currentClient === 0 ? client.length - 2 : currentClient -2 )} className='hidden transform rotate-y-180 rounded-full shadow-md lg:block'/>
                <img src={RightArrow} alt="arrow" onClick={() => goToSlide(currentClient === 0 ? client.length - 1 : currentClient -1 )} className='lg:hidden transform rotate-y-180 rounded-full shadow-md'/>
            </div>
            <div className='relative overflow-hidden w-full'>
                <div className="w-full flex transition-transform duration-500 ease-in-out md:justify-between py-[50px] " style={{
                    transform: `translateX(-${(currentClient * 100) / slidesPerView}%)`,
                    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                    ref={sliderRef}>
                    {
                        client.map((item, i) =>{
                            return (
                            <div className="w-full flex flex-col items-center text-center relative" style={{flex: `0 0 ${100 / slidesPerView}%`}} key={i}>
                                <img src={item.image} alt='client' className="w-[124px] h-auto text-white flex flex-col justify-end items-center border-4 border-[rgba(23,195,178,1)] shadow-md rounded-full"/>
                                <div className='py-5 px-12'>
                                    <div className='absolute top-32 left-[40%] md:left-12'>
                                        <img src={item.qu} alt="quote" />
                                    </div>
                                    <p className='letter-gray'>{item.description}</p>
                                    <div className='flex my-5 gap-x-2 justify-center items-center'>
                                        {
                                            Array.from({length: 5}, (_, i)=> {
                                                const isFull = i < Math.floor(item.rating);
                                                const isHalf = item.rating - i === 0.5;
                                                
                                                return (
                                                    <img key={i} src={isFull || isHalf ? yellowStar : whiteStar} alt='rating' className='w-6 h-6' />
                                                );
                                            })
                                        }
                                        <p className='font-bold text-xl text-[rgba(14,61,77,1)]'>{item.rating}/5</p>
                                    </div>
                                    <h3 className='font-bold text-lg text-[#333333] line-height-3'>{item.name}</h3>
                                    <p className='text-lg text-[#AAAAAA]'>{item.level}</p>
                                </div>
                            </div>
                        )})
                    }
                </div>
                <div className='mt-[-60px] mb-5'>
                    <div className='flex gap-x-1 relative justify-center '>
                        {client.map((_, index) => (
                            <div
                            key={index} onClick={() => setCurrentClient(index )}
                            className={`w-3 aspect-square rounded-full transition-colors duration-300 ${
                                currentClient === index ? 'bg-[rgba(23,195,178,1)]' : 'bg-gray-300'
                            }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 right-0 lg:right-[-70px] z-10">
                <img src={RightArrow} alt="arrow" onClick={() => goToSlide((currentClient + 2) % client.length)} className="hidden p-2 rounded-full shadow-md lg:block"/>
                <img src={RightArrow} alt="arrow" onClick={() => goToSlide((currentClient + 1) % client.length)} className="lg:hidden p-2 rounded-full shadow-md"/>
                </div>
        </div>
    </section>
  )
}

export default Testimonial
