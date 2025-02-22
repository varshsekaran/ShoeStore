import React from 'react';
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6"
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import Cards from "../../assets/credit-cards.webp";
import {motion} from "framer-motion"

function Footer() {
  return (
    <>
        <footer className='bg-black pt-12 pb-8 text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* logo */}
                    {/* details */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100}}
                        whileInView={{ opacity: 1, y:0}}
                        transition={{
                            delay: 0.2,
                            duration: 0.6,
                        }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold uppercase'>Wear</h1>
                        <p className='text-sm max-w-[300px]'>
                        Lorem ipsum dolor sit amet consectetur adispisicing elit. Recusandae iusto minima ad ut id eoos accusantium aut, aperiam quis incidunt!
                        </p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <FaPhone /> +1 (123) 456-7890
                            </p>
                            <p className='flex items-center gap-2 mt-2'>
                                {" "}
                                <FaMapLocation /> Chennai, India
                            </p>
                        </div>
                    </motion.div>
                    {/* footer link*/}
                    <motion.div 
                        initial={{ opacity: 0, y: 100}}
                        whileInView={{ opacity: 1, y:0}}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}
                        className='space-y-6'>
                        <h1 className='text-3xl font-bold'>Quick Links</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div>
                                <ul className='space-y-2'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    {/* social link*/}
                    <motion.div
                        initial={{ opacity: 0, y: 100}}
                        whileInView={{ opacity: 1, y:0}}
                        transition={{
                            delay: 0.5,
                            duration: 0.6,
                        }}
                        className='sapce-x-6'>
                        <h1 className='text-3xl font-bold'>Follow us</h1>
                        <div className='flex items-center gap-3'>
                            <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                            <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                            <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                            <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                        </div>
                        <div className='space-y-2'>
                            <p>Payment Methods</p>
                            <img src={Cards} alt="" className='w-[80%]' />
                        </div>
                    </motion.div>
                </div>
                {/* copyright */}
                <p className='text-white text-center mt-8 border-t-2 pt-8'
                    >@ 2025. All Rights Reserved || Website Creating</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
