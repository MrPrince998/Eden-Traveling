import React from 'react'
import facebook from '../assets/images/ic_baseline-facebook.png'
import intagram from '../assets/images/mdi_instagram.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/mdi_youtube.png'
import { Link } from 'react-router-dom'
import edenLogo from '../assets/images/Vector.png'

const Footer = () => {
  return (
    <footer className='bg-[rgba(7,61,55,1)] py-[30px] px-5 w-full lg:px-24 md:bg-[rgba(245,245,245,1)]'>
        <div className='md:flex md:justify-between md:items-start md:pt-[70px] md:pb-[94px] md:gap-x-4'>
            <div className='text-center'>
                <p className='font-medium text-lg text-[rgba(23,195,178,1);]'><span className='md:text-black'>NEED ANY HELP?</span><br /><br />
                <span className='text-white md:text-[#666666]'>Call 24/7 for any help</span><br />
                <span className='font-medium text-2xl'>+00 123 456 789</span><br /><br />
                <span className='text-white md:text-[#666666]'>Mail to our support team</span><br />
                <span className='font-medium text-2xl'>support@domain.com</span><br /><br />
                <span className='text-white md:text-[#666666]'>Follow us on</span>
                </p>
                <div className='flex justify-center gap-x-5 mt-2'>
                    <img src={facebook} alt="facebook" />
                    <img src={intagram} alt="intagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                </div>
            </div>
            <div className='grid grid-cols-2 justify-center gap-5 mt-[30px] mb-15 md:grid-cols-4'>
                <div className='text-white md:text-[#666666]'>
                    <h1 className='text-lg text-[rgba(23,195,178,1)] font-medium md:text-black'>COMPANY</h1>
                    <Link to={'/'}>About us</Link><br />
                    <Link to={'/'}>Testimonials</Link><br />
                    <Link to={'/'}>Rewards</Link><br />
                    <Link to={'/'}>Work with us</Link><br />
                    <Link to={'/'}>Meet the Team</Link><br />
                    <Link to={'/'}>Blog</Link>
                </div>
                <div className='text-white md:text-[#666666]'>
                    <h1 className='text-lg text-[rgba(23,195,178,1)] font-medium md:text-black'>SERVICES</h1>
                    <Link to={'/'}>Community Program</Link><br />
                    <Link to={'/'}>Investor Relations</Link><br />
                    <Link to={'/'}>Rewward Program</Link><br />
                    <Link to={'/'}>Point Plus</Link><br />
                    <Link to={'/'}>Partners</Link><br />
                    <Link to={'/'}>List My Hostel</Link>
                </div>
                <div className='text-white md:text-[#666666]'>
                    <h1 className='text-lg text-[rgba(23,195,178,1)] font-medium md:text-black'>SUPPORT</h1>
                    <Link to={'/'}>Account</Link><br />
                    <Link to={'/'}>Faq</Link><br />
                    <Link to={'/'}>Legal</Link><br />
                    <Link to={'/'}>Contact</Link><br />
                    <Link to={'/'}>Affiliate Program</Link><br />
                    <Link to={'/'}>Privacy Policy</Link>
                </div>
                <div className='text-white md:text-[#666666]'>
                    <h1 className='text-lg text-[rgba(23,195,178,1)] font-medium md:text-black'>TOP CITIES</h1>
                    <Link to={'/'}>Rome</Link><br />
                    <Link to={'/'}>Madrid</Link><br />
                    <Link to={'/'}>New York</Link><br />
                    <Link to={'/'}>Hong Kong</Link><br />
                    <Link to={'/'}>Paris</Link><br />
                    <Link to={'/'}>Tokyo</Link>
                </div>
            </div>
        </div>
        <div className='flex justify-between md:border-t-1 border-[rgba(221,221,221,1)] md:pt-[30px]'>
            <p className='letter-blue hidden md:block w-full'>Copyright © 2023 Kunturi Design</p>
            <div className='flex justify-center w-full items-center h-[21px] md:h-[37px] md:justify-end'>
                <img src={edenLogo} alt="EdenTravel" className="w-[21px] aspect-square md:w-[38px] transition-all duration-500 ease-in-out"/>
                <h1 className='text-[#17C3B2] font-sans font-medium text-[20px] md:text-[37px] md:font-bold'>Eden<span className='text-white md:text-black'>Travel</span></h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
