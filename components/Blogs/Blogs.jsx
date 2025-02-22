import React from 'react'
import Blogs1 from '../../assets/Blogs1.webp'
import Blogs2 from '../../assets/Blogs2.jpg'
import Blogs3 from '../../assets/Blogs3.webp'
import Blogs4 from '../../assets/Blogs4.webp'
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from "framer-motion";

const BlogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adispisicing elit.",
        desc: "Lorem ipsum dolor sit amet consectetur adispisicing elit. Recusandae iusto minima ad ut id eoos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adispisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adispisicing elit. Recusandae iusto minima ad ut id eoos accusantium aut, aperiam quis incidunt!",
      link: "#",
      img: Blogs2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adispisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adispisicing elit. Recusandae iusto minima ad ut id eoos accusantium aut, aperiam quis incidunt!",
      link: "#",
      img: Blogs3,
    },
    {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adispisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adispisicing elit. Recusandae iusto minima ad ut id eoos accusantium aut, aperiam quis incidunt!",
    link: "#",
    img: Blogs4,
    },

]

const Blogs = () => {
  return (
    <>
      <section className='bg-gray-50'>
        <div className="container py-14">
          <UpdateFollower
            mouseOptions={{
            backgroundColor: "white",
            zIndex: 9999,
            followSpeed: 0.5,
            rotate: -720,
            mixBlendMode: "difference",
            scale: 10,
            }}>
            <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
          </UpdateFollower>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {BlogsData.map((data) => {
                return (
                  <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                    <img src={data.img} alt="" />
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1> 
                        <p className='line-clamp-2'>{data.desc}</p>
                    </div>
                  </div>
                );
             })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
