import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import ProductCard from '../ProductCard'
import Link from 'next/link'


const ProductsSection = () => {
    return (
        <section className='mt-6 md:mt-8 px-4'>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg md:text-2xl font-bold'>Recommended For You</h1>
                    <Link href={'/store'} className='text-sm md:text-base'>See More</Link>
                </div>

                <div className='mt-2'>
                    <Carousel>
                        <CarouselContent>

                            {Array.from({ length: 10 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                >
                                    <ProductCard />
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div className='mt-12'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg md:text-2xl font-bold'>New Arrivals</h1>
                    <Link href={'/store'} className='text-sm md:text-base'>See More</Link>
                </div>
                <div className='mt-2'>
                    <Carousel>
                        <CarouselContent>
                            
                        {Array.from({ length: 10 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                >
                                    <ProductCard />
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection