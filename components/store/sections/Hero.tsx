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
         className='w-full  p-2  bg-gray-100 lg:h-[50vh] lg:w-full aspect-video'>
            <CarouselContent className='w-full h-full'>
                <CarouselItem className='w-full p-2 flex items-center justify-center' key={1}>
                    item 1
                </CarouselItem>
                <CarouselItem className='w-full h-full p-2' key={2}>
                item 2
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={3}>
                item 3
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={4}>
                item 4
                </CarouselItem>

            </CarouselContent>            
        </Carousel>
    </section>
  )
}

export default Hero