'use client'
import loadProducts from '@/app/api/loadProducts'
import ProductCard from '@/components/store/ProductCard'
import { Skeleton } from '@/components/ui/skeleton'
import { Product } from '@/types/Product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const StorePage = () => {

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
    <div className='w-full mt-12'>
      <div className='py-2 flex items-center gap-2'>
        <Link href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className='text-xl md:text-2xl font-bold'>Store</h1>
      </div>
      <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 grid-rows-auto gap-2'>
        {
          isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className='w-full reounded-lg h-[50vh]' />
            ))
          ) : (
            products?.map((product) => (
              <ProductCard key={product.productID} productID={product.productID} CreatedAt={product.CreatedAt} productName={product.productName} productCategory={product.productCategory} productPrice={product.productPrice} imageURL={product.imageURL} isDiscounted={product.isDiscounted} discountedPrice={product.discountedPrice} isProductOnSaleSection={product.isProductOnSaleSection} productDescription={product.productDescription} productDeliveryOption={product.productDeliveryOption} isProductMadeInSL={product.isProductMadeInSL} isProductOnFeaturedSection={product.isProductOnFeaturedSection} isProductInStock={product.isProductInStock} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default StorePage