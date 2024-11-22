'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import ProductCard from '../ProductCard'
import Link from 'next/link'
import loadProducts from '@/app/api/loadProducts'
import { useEffect, useState } from 'react'
import { Product } from '@/types/Product'
// const products = [
//     {
//         productID: 1,
//         CreatedAt: "",
//         productName: "Fire Mask (Gini Raksha)",
//         productCategory: "Masks",
//         productPrice: 12500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9818.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 0,
//         isProductOnSaleSection: false,
//         productDescription: "The Fire Mask (“Gini Raksha”) is used in Sri Lankan festivals and cultural dances and also used as a home decoration while protecting from weird hazards which is a cultural belief among Sri Lankans. This wooden mask is painted in vibrant colors, with bulging eyes and protruding tongues.",
//         productDeliveryOption: "S",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: true
//     },

//     {
//         productID: 2,
//         CreatedAt: "",
//         productName: "Eagle Mask (Gurulu Raksha)",
//         productCategory: "Masks",
//         productPrice: 14500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9819.jpg"
//         ],
//         isDiscounted: true,
//         discountedPrice: 12500,
//         isProductOnSaleSection: true,
//         productDescription: "The “Gurulu Raksha” is the portrait of a mythical solar bird devouring a snake. The snake that is located above the bird face is called Naga. “Gurulu” is decorated with the enemy snakes. The Sri Lankan mask (Gurulu Raksha) gives beauty, power and fame. These masks can be hung in homes as well as in other important places.",
//         productDeliveryOption: "F",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: true
//     },

//     {
//         productID: 3,
//         CreatedAt: "",
//         productName: "Peacock Mask green (Mayura Raksha)",
//         productCategory: "Masks",
//         productPrice: 8500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9819.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 0,
//         isProductOnSaleSection: false,
//         productDescription: "“Mayura Raksha” Mask is a wood carving known for bringing peace, wealth and prosperity to house, business or property while warding off evil spirits. The masks represent three beautifully feathered peacocks on the sides and top of the mask. Contrary to its name, these masks are often used in ancient forms of dancing.",
//         productDeliveryOption: "F",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: true
//     },

//     {
//         productID: 4,
//         CreatedAt: "",
//         productName: "Peacock Mask blue (Mayura Raksha)",
//         productCategory: "Masks",
//         productPrice: 8500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9825.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 0,
//         isProductOnSaleSection: false,
//         productDescription: "“Mayura Raksha” Mask is a wood carving known for bringing peace, wealth and prosperity to house, business or property while warding off evil spirits. The masks represent three beautifully feathered peacocks on the sides and top of the mask. Contrary to its name, these masks are often used in ancient forms of dancing.",
//         productDeliveryOption: "F",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: true
//     },

//     {
//         productID: 5,
//         CreatedAt: "",
//         productName: "Cobra Mask (Naga Raksha)",
//         productCategory: "Masks",
//         productPrice: 10000,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9823.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 0,
//         isProductOnSaleSection: false,
//         productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
//         productDeliveryOption: "S",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: false
//     },

//     {
//         productID: 6,
//         CreatedAt: "",
//         productName: "Cobra Mask (Naga Raksha)",
//         productCategory: "Masks",
//         productPrice: 10500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9816.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 8500,
//         isProductOnSaleSection: false,
//         productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
//         productDeliveryOption: "S",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: true,
//         isProductInStock: true
//     },

//     {
//         productID: 7,
//         CreatedAt: "",
//         productName: "Cobra Mask Monochrome (Naga Raksha)",
//         productCategory: "Masks",
//         productPrice: 8500,
//         imageURL: [
//             "https://lakshilpa.com/wp-content/uploads/2021/10/IMG_9821.jpg"
//         ],
//         isDiscounted: false,
//         discountedPrice: 0,
//         isProductOnSaleSection: false,
//         productDescription: "“Naga Raksha” mask as the name suggests is made up of numerous cobra hoods and depicts all the features of a demon having a ferocious face and a wide mouth with a set of sharp flesh eating teeth and a blood thirsty protruding tongue. This wooden mask is known for protection from all sorts of evil spirits.",
//         productDeliveryOption: "F",
//         isProductMadeInSL: true,
//         isProductOnFeaturedSection: false,
//         isProductInStock: false
//     },
// ]


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
            }
        }

        fetchProducts();
    },[])
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
                            {
                                products.map((product) => (
                                    <CarouselItem
                                        key={product.productID}
                                        className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                    >
                                        <ProductCard productID={product.productID} CreatedAt={product.CreatedAt} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice} imageURL={product.imageURL} isDiscounted={product.isDiscounted} discountedPrice={product.discountedPrice} isProductOnSaleSection={product.isProductOnSaleSection} productDescription={product.productDescription} productDeliveryOption={product.productDeliveryOption} isProductMadeInSL={product.isProductMadeInSL} isProductOnFeaturedSection={product.isProductOnFeaturedSection} isProductInStock={product.isProductInStock} />

                                    </CarouselItem>
                                ))
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
                                products.map((product) => (
                                    <CarouselItem
                                        key={product.productID}
                                        className='basis-[65%] md:basis-[30%] lg:basis-[20%] xl:basis-[18%]'
                                    >
                                        <ProductCard productID={product.productID} CreatedAt={product.CreatedAt} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice} imageURL={product.imageURL} isDiscounted={product.isDiscounted} discountedPrice={product.discountedPrice} isProductOnSaleSection={product.isProductOnSaleSection} productDescription={product.productDescription} productDeliveryOption={product.productDeliveryOption} isProductMadeInSL={product.isProductMadeInSL} isProductOnFeaturedSection={product.isProductOnFeaturedSection} isProductInStock={product.isProductInStock} />

                                    </CarouselItem>
                                ))
                            }

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection
