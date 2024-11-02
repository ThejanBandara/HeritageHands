'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

const Hero = () => {

    const plugin = React.useRef(
        Autoplay({delay: 5000, stopOnInteraction: false})
    )

  return (
    <section className='flex flex-col items-center justify-center'>
        <Carousel
        plugins={[plugin.current]}
         className='w-full h-[90vh] p-2  bg-gray-100'>
            <CarouselContent className=''>
                <CarouselItem className='w-full h-full p-2 self-center' key={1}>
                    <div className='w-full h-[85vh] flex items-center justify-center '>
                        item 1
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={2}>
                    <div className='w-full h-[85vh] flex items-center justify-center'>
                        item 2
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={3}>
                    <div className='w-full h-[85vh] flex items-center justify-center border-1'>
                        item 3
                    </div>
                </CarouselItem>

                <CarouselItem className='w-full h-full p-2' key={4}>
                    <div className='w-full h-[85vh] flex items-center justify-center'>
                        item 4
                    </div>
                </CarouselItem>

            </CarouselContent>            
        </Carousel>
    </section>
  )
}

export default Hero