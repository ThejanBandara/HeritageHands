'use client'

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Badge } from '../ui/badge'
import CartItem from './CartItem'
import { Button } from '../ui/button'
import { useCart } from '@/context/cartContext'
import { cartItem } from '@/types/Cart'
const CartSheet = () => {

    const { state , clearCart} = useCart();
  return (
    <Sheet>
    <SheetTrigger asChild>
      <div className='relative'>
        <Badge variant={"destructive"} className='absolute -top-3 -right-3 scale-90'>{state.cartItems.length}</Badge>
        <Button variant={"outline"} className="p-1 aspect-square">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Button>
      </div>
    </SheetTrigger>
    <SheetContent className='flex flex-col justify-between'>
      <SheetHeader>
        <SheetTitle>Cart</SheetTitle>
        <SheetDescription>you have {state.cartItems.length} items in your cart</SheetDescription>
      </SheetHeader>
      <div className='w-full h-full flex flex-col gap-2 overflow-y-scroll'>
        {
            state.cartItems.map((item) => (
                <CartItem key={item.id} item={item as cartItem}/>
            ))
        }
      </div>
      <SheetFooter className=''>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex flex-row justify-between items-center'>
            <p>Total</p>
            <p>Rs. {state.cartTotal}.00</p>
          </div>
          <Button>Proceed to Checkout</Button>
        </div>

      </SheetFooter> 
    </SheetContent>
  </Sheet>
  )
}

export default CartSheet