import React from 'react'
import disney from '../assets/disney.png'
import marvel from '../assets/marvel.png'
import nationalG from '../assets/nationalG.png'
import pixar from '../assets/pixar.png'
import starwar from '../assets/starwar.png'

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'

const ProductionHouse = () => {
    const list = [
        {
            id:1,
            image:disney,
            video:disneyV,
        },
        {
            id:2,
            image:pixar,
            video:pixarV,
        },
        {
            id:3,
            image:marvel,
            video:marvelV,
        },
        {
            id:4,
            image:starwar,
            video:starwarV,
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV,
        },
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {list.map((item,index)=>(
            <div key={index} className='md:h-[155px] border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out
            cursor-pointer shadow-xl shadow-gray-800'>
                <img src={item.image} className='w-full z-[1]'/>
                <video src={item.video} autoPlay loop playsInline muted className='relative top-[-155px] rounded-md z-0 opacity-0 hover:opacity-50'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse