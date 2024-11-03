'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const Hero = () => {

    const plugin = React.useRef(
        Autoplay({delay: 5000, stopOnInteraction: false})
    )

  return (
    <section className='flex flex-col items-center justify-center mt-14'>
        <Carousel
        plugins={[plugin.current]}
         className='w-full  p-2  bg-gray-100'>
            <CarouselContent className=''>
                <CarouselItem className='w-full h-full p-2 self-center' key={1}>
                    <div className='w-full aspect-video flex items-center justify-center overflow-hidden'>
                        <Image src={'/banner1.png'} width={1920} height={1080} alt="banner" className='w-fit'/>
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={2}>
                <div className='w-full aspect-video flex items-center justify-center overflow-hidden'>
                        <Image src={'/banner2.png'} width={1920} height={1080} alt="banner" className='w-fit'/>
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={3}>
                    <div className='w-full aspect-video flex items-center justify-center border-1'>
                        item 3
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={4}>
                    <div className='w-full aspect-video flex items-center justify-center'>
                        item 4
                    </div>
                </CarouselItem>

            </CarouselContent>            
        </Carousel>
    </section>
  )
}

export default Hero