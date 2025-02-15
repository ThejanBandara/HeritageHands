'use client'

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Badge } from '../ui/badge'
import CartItem from './CartItem'
import { Button } from '../ui/button'
import { useCart } from '@/context/cartContext'
import { cartItem } from '@/types/Cart'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
const CartSheet = () => {

  const { state, clearCart } = useCart();
  const router = useRouter();

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
              <CartItem key={item.id} item={item as cartItem} />
            ))
          }
        </div>
        <SheetFooter className=''>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex flex-row justify-between items-center'>
              <p>Total</p>
              <p>Rs. {state.cartTotal}.00</p>
            </div>
            <div className='flex items-center gap-2'>
              <Button className='w-5/6' onClick={() => {
                if(state.cartItems.length === 0){
                  toast('add some items to cart before checkout')
                }
                else{
                  toast.info('proceeding to checkout')
                  router.push('/checkout')
                }
              }}>Proceed to Checkout</Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className='w-1/6 aspect-square' variant={"destructive"}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will remove all items from your cart.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => { clearCart() }} >Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>

                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Clear cart</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet