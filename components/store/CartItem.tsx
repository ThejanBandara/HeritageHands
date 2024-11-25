'use client'

import loadSingleProduct from '@/app/api/loadSingleProduct'
import { cartItem } from '@/types/Cart'
import { Product } from '@/types/Product'
import Image from 'next/image'
import React from 'react'

interface cartprops {
    item : cartItem
}
const CartItem: React.FC<cartprops>  = async (cartitem) => {


    return (
        <div className='h-fit border-[1px] border-gray-200 rounded-lg mr-1 flex items-center gap-2'>
            <Image src={'/product.jpg'} width={60} height={75} alt='product' className='rounded-lg' />
            <div className='flex -flex-row items-center justify-between w-full px-1'>
                <div>
                    <h1 className='font-medium'>{}</h1>
                    <div>

                    </div>
                </div>
                <div className='px-1 py-1 flex flex-col items-center justify-evenly gap-1'>
                    <button className='size-6 bg-gray-200 rounded flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                    <p className='text-sm py-1'>1</p>
                    <button className='size-6 bg-gray-200 rounded flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem