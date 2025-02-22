import React from 'react'
import Shoe4 from '../../assets/shoe4.jpeg'
import {motion} from 'framer-motion';
import {fadeUp} from "../Services/Services";
import { UpdateFollower } from 'react-mouse-follower';

const Banner = () => {
  return (
    <> 
        <section className='bg-[#e0e0e0]'>
            <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                {/* image */ }
                <div>
                    <motion.img 
                    initial={{ opacity: 0, x: -100, rotate: -180}}
                    animate={{ opacity: 1, x: 0, rotate: 0}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
                    src={Shoe4} alt="" className='w-[300px] md:w-[400px]'/>
                </div>
                {/* info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                         <UpdateFollower 
                            mouseOptions={{
                            backgroundColor: "white",
                            zIndex: 9999,
                            followSpeed: 0.5,
                            rotate: -720,
                            mixBlendMode: "difference",
                            scale: 10,
                            }}>
                            <motion.h1 
                            variants={fadeUp(0.4)}
                            initial="hidden"
                            whileInView="show"
                            className='text-3xl lg:text-4xl font-semibold font-poppins' >
                            The Latest Shoe With The Latest Model.</motion.h1>
                        </UpdateFollower>
                        <motion.p
                        variants={fadeUp(0.7)}
                        initial="hidden"
                        whileInView="show"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Recusandae isuto minima ad ut id eos accusantium aut, aperiam quis incidunt!
                        </motion.p>
                        <motion.button
                        variants={fadeUp(1.0)}
                        initial="hidden"
                        whileInView="show"
                        className='border-2 border-[#f57c00] text-[#f57c00] px-6 py-2 rounded-md hover:bg-[#f57c00] hover:text-white'>Shop now</motion.button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner
