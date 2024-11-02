import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import ProductCard from '../ProductCard'
import Link from 'next/link'


const ProductsSection = () => {
    return (
        <section className='mt-12 px-4'>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg font-bold'>Recommend For You</h1>
                    <Link href={'/store'} className='text-sm'>See More</Link>
                </div>

                <div className='mt-2'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div className='mt-12'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg font-bold'>New Arrivals</h1>
                    <Link href={'/store'} className='text-sm'>See More</Link>
                </div>
                <div className='mt-2'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                            <CarouselItem className=' basis-[55%]'>
                                <ProductCard />
                            </CarouselItem>

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection