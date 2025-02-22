import React, {act} from 'react';
import shoe1 from "../../assets/shoe1.jpeg";
import shoe2 from "../../assets/shoe2.jpeg";
import shoe3 from "../../assets/shoe3.jpeg";
import {FaWhatsapp} from "react-icons/fa";
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },
        },
    };
};

const shoeData = [
    {
       id: 1,
       image: shoe1,
       title: "Sports Shoe" ,
       subtitle: "Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.",
       price: "$199",
       modal: "Black Gold",
       bgColor: "#ffab00",
    },
    {
        id: 2,
        image: shoe2,
        title: "Sports Shoe",
        subtitle: "Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.",
        price: "$199",
        modal: "Black Blue",
        bgColor: "#0d47a1",
     },
     {
        id: 3,
        image: shoe3,
        title: "Sports Shoe",
        subtitle: "Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.Lorem ipsum dolor sir amet consectetur adipisicing elit. Ipsam, sapiente.",
        price: "$199",
        modal: "White Red",
        bgColor: "#b71c1c",
     },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState (shoeData[0]);

  const handleActiveData = (data) => { setActiveData(data); };

  return (
  <>
    <section className='bg-black text-white font-varela'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
            {/*shoe info*/}
            <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className="space-y-5 text-center md:text-left">

                    {/*title*/}
                    <AnimatePresence mode="wait">
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
                                key ={activeData.id} 
                                variants={fadeUp(0.2)} 
                                initial="hidden" 
                                animate="show"
                                exit="exit"
                                className='text-3xl lg:text-6xl font-bold font-varela'>{activeData.title}</motion.h1>
                        </UpdateFollower>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                            <motion.p
                                key ={activeData.id} 
                                variants={fadeUp(0.3)} 
                                initial="hidden" 
                                animate="show"
                                exit="exit" 
                                className="text-sm leading-loose text-white/80">{activeData.subtitle}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <UpdateFollower>
                            <motion.button 
                                key ={activeData.id} 
                                variants={fadeUp(0.3)} 
                                initial="hidden" 
                                animate="show"
                                exit="exit"
                                style={{ backgroundColor: activeData.bgColor }}className='px-4 py-2 inline-block font-normal rounded-sm'>Buy and wear</motion.button>
                        </UpdateFollower>
                    </AnimatePresence>
                    
               
                    {/*list seperator*/}
                    <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        <div className="w-20 h-[1px] bg-white"></div>
                        <p className='uppercase text-sm'>Top Shoes for you</p>
                        <div className="w-20 h-[1px] bg-white"></div>
                    </div>


                    {/* list switcher*/}
                    <div className='grid grid-cols-3 gap-10'>{shoeData.map((item)=> {
                        return (
                            <UpdateFollower>
                            <div key={item.id} onClick= {() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                                <div>
                                    <img src={item.image} alt="" className='w-[200px]'/>
                                </div>
                                <div className='space-y-2'>
                                    <p className='text-base font-bold'>{item.price}</p>
                                    <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                </div>
                            </div>
                            </UpdateFollower>
                            );
                        })}
                    </div>
                </div>
            </div>
            

            {/* hero image */}
            <div className='flex flex-col justify-end items-center'>
                <AnimatePresence mode='wait'>
                    <motion.img 
                        key ={activeData.id} 
                        initial={{ opacity: 0, scale: 0.9, y: 100 }} 
                        animate= {{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                        exit={{
                            opacity: 0,
                            scale: 0.9,
                            y: 100,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px]'/>
                </AnimatePresence>
            </div>       
                    
            {/* wtsp icon*/}
            <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                <a href="">
                    <FaWhatsapp/>
                </a>
            </div>           
        </div>  
    </section>
    </>
    
    );
};

export default Hero;
