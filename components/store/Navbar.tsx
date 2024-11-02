import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

const Navbar = () => {

  return (
    <nav className='w-full fixed top-0 flex flex-col gap-2 px-6 py-2 shadow-sm z-10 bg-white'>
      <div className="flex flex-row items-center justify-between mt-2">
        <Link href={'/'}>
          <h1 className="font-serif">HH</h1>
        </Link>

        <Input type='text' placeholder='Seach any Item' className='hidden md:flex w-4/12' />

        <div className='flex flex-row gap-3'>

          <Sheet>
            <SheetTrigger asChild>
              <div className='relative'>
                <Badge variant={"destructive"} className='absolute -top-3 -right-3 scale-90'>0</Badge>
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
                <SheetDescription>you have 0 items in your cart</SheetDescription>
              </SheetHeader>

              <SheetFooter className=''>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex flex-row justify-between items-center'>
                    <p>Total</p>
                    <p>$0.00</p>
                  </div>
                  <Button>Proceed to Checkout</Button>
                </div>

              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar >
                <AvatarImage src="https://github.com/thejanbandara.png" />
                <AvatarFallback>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col gap-2 mr-3' autoFocus={false} >
              <Button variant={"outline"}>Profile</Button>
              <Button variant={"outline"}>Settings</Button>
              <Button variant={"destructive"}>Logout</Button>
            </PopoverContent>
          </Popover>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </div>
      </div>

      <div className='md:hidden'>
        <Input type='text' placeholder='Seach any Item'/>
      </div>

      
    </nav>
  )
}

export default Navbar