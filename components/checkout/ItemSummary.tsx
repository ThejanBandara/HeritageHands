'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useCart } from '@/context/cartContext'
import ItemSumaryItem from './ItemSumaryItem'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useCheckout } from '@/context/CheckoutContext'

const ItemSummary = () => {
    const { state } = useCart();
    const router = useRouter();
    const {nextStep} = useCheckout();

    return (
        <Card className='w-10/12 h-5/6 bg-white border-[1px] border-gray-400 '>
            <CardHeader>
                <CardTitle>Item Summary</CardTitle>
                <CardDescription>these are the items in your cart. take a look before preceeding</CardDescription>
            </CardHeader>
            <CardContent className='h-4/6 max-h-4/6 overflow-y-scroll flex flex-col gap-2'>
                {
                    state.cartItems.map((item) => (
                        <ItemSumaryItem key={item.id} item={item} />
                    ))
                }
            </CardContent>
            <CardFooter className='w-full flex items-end justify-between gap-2'>
                <div>
                    <h1 className='font-medium text-xl'>Total Rs. {state.cartTotal}.00</h1>
                </div>
                <div className='flex gap-2 items-center h-full'>
                    <Button variant={"outline"} onClick={() => {router.push('/')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        Go back
                    </Button>
                    <Button onClick={() => nextStep()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Confirm
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ItemSummary