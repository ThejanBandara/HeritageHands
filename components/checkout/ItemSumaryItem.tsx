'use client'
import loadSingleProduct from '@/app/api/loadSingleProduct'
import { cartItem } from '@/types/Cart'
import { Product } from '@/types/Product'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface summaryProp {
    item: cartItem
}
const ItemSumaryItem: React.FC<summaryProp> = (item) => {

    const [Product, setProduct] = useState<Product | undefined>(undefined);
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const loadProduct = async () => {
            try {
                const loadedProduct = await loadSingleProduct(item.item.productID)
                setProduct(loadedProduct)
                setLoading(false)
            }
            catch {
                console.log('Error fetching product : Checkout Item Summary')
            }
        }

        loadProduct();
    }, [])

    if (Loading) {
        return (
            <div className='w-full bg-gray-50 rounded-lg flex items-center justify-center'>
                loading...
            </div>
    )
    }
    else {
        return (
            <div className='w-full flex items-center justify-between bg-gray-50 rounded-lg px-2 border-[1px] border-gray-300'>
                <div className='flex gap-2 items-center w-5/12'>
                <Image src={Product?.imageURL[0] || ''} width={80} height={40} alt='product Image' className='rounded-lg' />
                <div className=''>
                    <p className='text-sm text-gray-500'>{Product?.productCategory}</p>
                    <p className='font-medium'>{Product?.productName}</p>
                </div>
                </div>

                <div className='flex gap-2 bg-gray-200 px-2 py-2 rounded-lg w-2/12 items-center justify-center'>
                    <p>{item.item.quantity}</p>
                    <p>x</p>
                    <p>Rs. {item.item.price}.00</p>
                </div>

                <p className='font-medium'>Rs. {item.item.total}.00</p>
            </div>
        )
    }
}

export default ItemSumaryItem