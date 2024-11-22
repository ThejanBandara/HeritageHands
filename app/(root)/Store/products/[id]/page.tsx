import loadSingleProduct from '@/app/api/loadSingleProduct'
import ReviewBlock from '@/components/store/Review'
import ReviewSummary from '@/components/store/ReviewSummary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Product } from '@/types/Product'
import Image from 'next/image'
import React from 'react'

const DetailsPage = async({params} : {params: Promise<{id: string}>}) => {

    const product : Product | undefined = await loadSingleProduct((await params).id);

    const calculateDiscount = () => {
        const price = product?.productPrice || 0; 
        const discount = product?.discountedPrice || 0;

        const discountPercentage =
          ((price - discount) / price) * 100;
        return Math.trunc(discountPercentage);
      };

    return (
        <div className='pt-12 px-2 bg-white'>
            <div className='flex flex-col gap-1 pb-2'>
                <p className='font-bold text-xl text-wrap max-w-[95vw]'>{product?.productName}</p>
                <div className='flex flex-row items-center pt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className='text-sm text-gray-500 pl-1'><span>50</span> Reviews</p>
                </div>
            </div>

            <Image src={product?.imageURL[0] || '/logo.png'} width={400} height={400} alt='product image' className='bg-black' />
            <Carousel>
                <CarouselContent>
                    <CarouselItem className='basis-[30%] flex items-center justify-center aspect-square border-2 border-gray-300 rounded-md ml-2'>1</CarouselItem>
                    <CarouselItem className='basis-[30%] flex items-center justify-center aspect-square border-2 border-gray-300 rounded-md ml-2'>2</CarouselItem>
                    <CarouselItem className='basis-[30%] flex items-center justify-center aspect-square border-2 border-gray-300 rounded-md ml-2'>3</CarouselItem>
                    <CarouselItem className='basis-[30%] flex items-center justify-center aspect-square border-2 border-gray-300 rounded-md ml-2'>4</CarouselItem>
                </CarouselContent>
            </Carousel>

            <div className='pt-4'>
                <div >
                    <div className={`flex-row ${product?.isDiscounted ? 'flex' : 'hidden'}`}>
                        <p className='text-sm text-gray-500 line-through'><span>Rs.</span>{product?.productPrice}.00</p>
                        <Badge className='text-sm scale-75'>{calculateDiscount()}% off</Badge>
                    </div>
                    <p className='font-bold text-3xl'><span>Rs.</span>{product?.isDiscounted ? product?.discountedPrice : product?.productPrice}.00</p>
                </div>

                <div className='w-full flex flex-row items-center justify-evenly gap-2 pt-4'>
                    <Button className='w-1/2' variant={"default"}>Buy Now</Button>
                    <Button className='w-1/2 border-black' variant={"outline"}>Add to Cart</Button>
                </div>

                <div className='pt-3 flex flex-col gap-2 '>
                    <div className={`items-center gap-2 ${product?.productDeliveryOption === 'S'? 'flex' : 'hidden' }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <p>Standard Delivery</p>
                    </div>

                    <div className={` items-center gap-2 text-green-700 ${product?.productDeliveryOption === 'F'? 'flex' : 'hidden'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        <p>Free Delivery</p>
                    </div>

                    <div className={`flex items-center gap-2 text-orange-700 ${product?.isProductMadeInSL? 'flex' : 'hidden'}`}>
                        <Image src={'/sri-lanka.svg'} width={24} height={24} alt={'sri-lanka'} className='size-6' />
                        <p>Made in Sri Lanka</p>
                    </div>
                </div>
            </div>
            <div className='pt-4'>
                <Tabs defaultValue='reviews' className='w-[95vw]'>
                    <TabsList className=''>
                        <TabsTrigger value='description'>Description</TabsTrigger>
                        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value='description'>
                        <p className='text-justify mt-2 mb-4'>{product?.productDescription}</p>

                        <p className='pb-2'><span>Product Category :</span> {product?.productCategory}</p>

                    </TabsContent>
                    <TabsContent value='reviews'>
                        <ReviewSummary/>
                        <ReviewBlock/>                       
                        <ReviewBlock/>                       
                        <ReviewBlock/>                       
                        <ReviewBlock/>                       
                        <ReviewBlock/>                       

                        <Pagination className='mt-2'>
                            <PaginationContent >
                                <PaginationItem>
                                    <PaginationPrevious/>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink >1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink>4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext/>
                                </PaginationItem>

                            </PaginationContent>
                        </Pagination>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}

export default DetailsPage