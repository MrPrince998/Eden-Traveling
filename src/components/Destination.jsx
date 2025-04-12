import React, { useEffect, useRef, useState } from 'react'
import cairo from '../assets/images/Rectangle 5755.png'
import paris from '../assets/images/Rectangle 5756.png'
import rome from '../assets/images/Rectangle 5757.png'
import madria from '../assets/images/Rectangle 5758.png'
import egypt from '../assets/images/egypt_icon_127772 1.png'
import france from '../assets/images/france_icon_127830 1.png'
import italy from '../assets/images/italy_icon_127831 1.png'
import spain from '../assets/images/spain_icon_127825 1.png'
import yellowStar from '../assets/images/Star 11.png'
import whiteStar from '../assets/images/Star 15.png'

const Destination = () => {
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 4);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const sliderRef = useRef(null);
    
    const handleTransitionEnd = () => {
        if (currentSlide === totalSlides) {
            setIsTransitioning(false);  // Temporarily disable transition
            // setCurrentSlide(0);         // Jump back to first "real" slide
        }
    };

    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);
    

    const sliders = [
        {image: cairo, title:'Cairo', flag:egypt, country:'EGYPT', price:'105.00', rating:4},
        {image: paris, title:'Paris', flag:france, country:'FRANCE', price:'95.00', rating:4},
        {image: rome, title:'Rome', flag:italy, country:'ROME', price:'75.00', rating:3},
        {image: madria, title:'Madria', flag:spain, country:'MADRIA', price:'87.00', rating:3},
        {image: cairo, title:'Cairo', flag:egypt, country:'EGYPT', price:'105.00', rating:4},
        {image: paris, title:'Paris', flag:france, country:'FRANCE', price:'95.00', rating:4},
        {image: rome, title:'Rome', flag:italy, country:'ROME', price:'75.00', rating:3},
        {image: madria, title:'Madria', flag:spain, country:'MADRIA', price:'87.00', rating:3},
    ]
    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliders.length)
        },4000);

        return () => clearInterval(interval);
    },[])

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };


    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setSlidesPerView(mobile ? 1 : 4);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const totalSlides = sliders.length;
    const extendedSlides = [...sliders, ...sliders.slice(0, slidesPerView)];
    

  return (
    <section className='py-10 px-5'>
        <div>
            <h3 className='text-[rgba(23,195,178,1)] text-lg font-medium'>WHERE TO GO</h3>
            <h1 className='text-[rgba(51,51,51,1)] text-4xl font-playfair font-semibold my-[10px]'>Popular destinations</h1>
            <p className='text-[rgba(51,51,51,1)] text-lg'>Explore our curated selection of the world's most sought-after travel spots in this diverse list of must-visit places.
            From iconic cities to pristine natural wonders, we've gathered the best destinations to ignite your wanderlust.</p>
        </div>
        <div>
            
        <div className="relative w-full overflow-hidden my-5">
            <div className="absolute top-1/2 left-4 z-10">
                <button onClick={() => goToSlide(currentSlide === 0 ? sliders.length - 1 : currentSlide - 1)} className="bg-white p-2 rounded-full shadow-md">Prev</button>
            </div>
            <div className="flex transition-transform duration-500 ease-in-out md:gap-8 md:justify-between" style={{
    transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
    transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
  }}
  onTransitionEnd={handleTransitionEnd}
  ref={sliderRef}
>
                {extendedSlides.map((item, index) => (
                <div className="w-full flex-shrink-0 " style={{flex: `0 0 ${100 / slidesPerView}%`}} key={index}>
                    <div className="bg-cover bg-left w-full h-[388px] rounded-3xl text-white flex flex-col justify-end items-center py-8" style={{ backgroundImage: `url(${item.image})`}}>
                        <h3 className='text-4xl font-playfair font-bold my-1'>{item.title}</h3>
                        <div className='flex gap-x-2'>
                            <img src={item.flag} alt={item.country} className='w-7 h-7'/>
                            <p className='text-lg font-bold'>{item.country}</p>
                        </div>
                        <p className='font-medium text-lg'>Price starts at <span className='text-[rgba(23,195,178,1)]'>&euro;{item.price}</span></p>
                        <div className='hidden md:visible md:flex md:mt-1'>
                            {
                                Array.from({length: 5}, (_, i)=> {
                                    const isFull = i < Math.floor(item.rating);
                                    const isHalf = item.rating - i === 0.5;

                                    return (
                                        <img key={i} src={isFull || isHalf ? yellowStar : whiteStar} alt='rating' className='w-6 h-6' />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="absolute top-1/2 right-4 z-10">
                <button onClick={() => goToSlide((currentSlide + 1) % sliders.length)} className="bg-white p-2 rounded-full shadow-md">Next</button>
            </div>
        </div>
        <div className='flex gap-x-1 justify-center my-4'>
            {sliders.map((_, index) => (
                <div
                    key={index} onClick={() => setCurrentSlide(index )}
                    className={`w-3 aspect-square rounded-full transition-colors duration-300 ${
                        currentSlide === index ? 'bg-[rgba(23,195,178,1)]' : 'bg-gray-300'
                    }`}
                ></div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Destination