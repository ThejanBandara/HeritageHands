import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className='px-4 mt-12 flex flex-col'>
      <h1 className='text-lg md:text-2xl font-bold'>Gallery</h1>
      <div className='w-full h-auto m-2 self-center border-2 border-black rounded-lg shadow-md overflow-hidden'>
        <Image src={'/course2.webp'} width={1920} height={1080} alt="banner" className='w-full ' />
      </div>
      <Carousel>

        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className='basis-[30%]'>
              <div className=' aspect-square size-20 overflow-hidden bg-white border-2 border-black'>1</div>
            </CarouselItem>
          ))}

        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Gallery