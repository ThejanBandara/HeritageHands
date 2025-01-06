'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import ProductCard from '../ProductCard'
import Link from 'next/link'
import loadProducts from '@/app/api/loadProducts'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
import { Skeleton } from '@/components/ui/skeleton'


const ProductsSection = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                const productsData = await loadProducts();
                setProducts(productsData || []);

            } catch (error) {
                console.error('Error loading products:', error);
            } finally {
                setIsLoading(false);
                console.log(isLoading)
            }
        }

        fetchProducts();
    }, [])



    return (
        <section className='mt-6 md:mt-8 px-4'>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-lg md:text-2xl font-bold'>Recommended For You</h1>
                    <Link href={'/Store'} className='text-sm md:text-base'>See More</Link>
                </div>

                <div className='mt-2'>
                    <Carousel>
                        <CarouselContent>
                            {
                                isLoading ? (
                                    Array.from({ length: 10}).map( (_,index) => (
                                        <CarouselItem key={index} className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'>
                                            <Skeleton className='w-full reounded-lg h-[50vh]'/>
                                        </CarouselItem>
                                    ))
                                ) : (
                                    products?.map((product) => (
                                        <CarouselItem
                                            key={product.productID}
                                            className='basis-[50%] sm:basis-[40%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                        >
                                            <ProductCard productID={product.productID} CreatedAt={product.CreatedAt} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice} imageURL={product.imageURL} isDiscounted={product.isDiscounted} discountedPrice={product.discountedPrice} isProductOnSaleSection={product.isProductOnSaleSection} productDescription={product.productDescription} productDeliveryOption={product.productDeliveryOption} isProductMadeInSL={product.isProductMadeInSL} isProductOnFeaturedSection={product.isProductOnFeaturedSection} isProductInStock={product.isProductInStock} />

                                        </CarouselItem>
                                    ))
                                )
                            }
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

                        {
                                isLoading ? (
                                    Array.from({ length: 10}).map( (_,index) => (
                                        <CarouselItem key={index} className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'>
                                            <Skeleton className='w-full reounded-lg h-[50vh]'/>
                                        </CarouselItem>
                                    ))
                                ) : (
                                    products?.map((product) => (
                                        <CarouselItem
                                            key={product.productID}
                                            className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                        >
                                            <ProductCard productID={product.productID} CreatedAt={product.CreatedAt} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice} imageURL={product.imageURL} isDiscounted={product.isDiscounted} discountedPrice={product.discountedPrice} isProductOnSaleSection={product.isProductOnSaleSection} productDescription={product.productDescription} productDeliveryOption={product.productDeliveryOption} isProductMadeInSL={product.isProductMadeInSL} isProductOnFeaturedSection={product.isProductOnFeaturedSection} isProductInStock={product.isProductInStock} />

                                        </CarouselItem>
                                    ))
                                )
                            }

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
