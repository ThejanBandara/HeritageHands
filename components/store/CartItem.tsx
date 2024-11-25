'use client'

import loadSingleProduct from '@/app/api/loadSingleProduct'
import { cartItem } from '@/types/Cart'
import { Product } from '@/types/Product'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'
import { useCart } from '@/context/cartContext'

interface cartprops {
    item: cartItem
}
const CartItem: React.FC<cartprops> = (cartitem) => {
    const [product, setProduct] = useState<Product | undefined>(undefined);

    const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

    useEffect(() => {
        const fetchproduct = async () => {
            try {
                const fetchedProduct: Product | undefined = await loadSingleProduct(cartitem.item.productID)
                setProduct(fetchedProduct);
            }
            catch {
                console.log('Error fetching data : cartItem')
            }
        }

        fetchproduct();

    }, [cartitem.item.productID])

    if (product) {
        return (
            <div className='h-fit border-[1px] border-gray-200 rounded-lg mr-1 flex items-center gap-2'>
                <Image src={product?.imageURL[0] || ''} width={60} height={75} alt='product' className='rounded-lg' />
                <div className='flex -flex-row items-center justify-between w-full px-1'>
                    <div>
                        <h1 className='font-medium'>{product?.productName}</h1>
                        <div>

                        </div>
                    </div>
                    <div className='px-1 py-1 flex flex-col items-center justify-evenly gap-1'>
                        <button className='size-6 bg-gray-200 rounded flex items-center justify-center' onClick={() => { increaseQuantity(cartitem.item.productID) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                        <p className='text-sm py-1'>{cartitem.item.quantity}</p>
                        {
                            cartitem.item.quantity == 1 ? (
                                <button className='size-6 rounded flex items-center justify-center bg-red-500 text-white' onClick={() => { removeFromCart(cartitem.item.productID) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            ) :
                                (
                                    <button className='size-6 bg-gray-200 rounded flex items-center justify-center' onClick={() => { decreaseQuantity(cartitem.item.productID) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                        </svg>
                                    </button>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <Skeleton className='h-32 border-[1px] border-gray-200 rounded-lg mr-1 flex items-center gap-2' />
        )
    }
}

export default CartItem



