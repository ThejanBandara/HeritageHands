'use client'
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'

gsap.registerPlugin(useGSAP);
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const container = useRef<HTMLElement>(null);
  const t1 = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useGSAP(() => {
    gsap.set([".nav-1", ".nav-2", ".nav-3", ".nav-4"], { y: "-10rem" })
    gsap.set(".close-btn", { x: "-10rem" })
    t1.current = gsap.timeline({ paused: true })
      .to(".nav-overlay", { y: "120vh", duration: 1.2, ease: "power4.inOut" })
      .to([".nav-1", ".nav-2", ".nav-3", ".nav-4"], { y: 0, duration: .7, stagger: 0.1, delay: -1, ease: "power4.inOut" })
      .to(".close-btn", { x: 0, duration: .7, ease: "circ" })
  }, { scope: container })

  useEffect(() => {
    if (menuOpen) {
      t1.current.play();
    } else {
      t1.current.reverse();
    }
  }, [menuOpen])


  return (
    <nav className='w-full fixed top-0 flex flex-row items-center justify-between px-6 py-2 shadow-sm h-[10vh] z-10 bg-white' ref={container}>
      <Link href={'/'}>
        <h1>HH</h1>
      </Link>

      <Input type='text' placeholder='Seach any Item' className='hidden md:flex w-4/12' />

      <div className='flex flex-row gap-5'>

        <Sheet>
          <SheetTrigger asChild>
            <div className='relative'>
              <Badge variant={"destructive"} className='absolute -top-3 -right-3'>0</Badge>
              <Button variant={"outline"}>
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
          <PopoverContent className='flex flex-col gap-2 w-[15vw] mr-3' autoFocus={false} >
            <Button variant={"outline"}>Profile</Button>
            <Button variant={"outline"}>Settings</Button>
            <Button variant={"destructive"}>Logout</Button>
          </PopoverContent>
        </Popover>

        <button onClick={() => toggleMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
      <div className="absolute bg-gray-200 left-0 w-full h-[100vh]  flex flex-col items-end justify-end px-8 py-8 -top-[120vh] nav-overlay z-30">
        <div className="flex flex-col gap-8">
          <div className="w-full overflow-hidden p-2">
            <a href="" className="flex items-center justify-end gap-2 text-5xl lg:text-6xl text-black w-full nav-1" >
              <h1 className="font-serif text-nowrap">Home</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
          </div>

          <div className="w-full overflow-hidden p-2">
            <a href="" className="flex items-center justify-end gap-2  text-5xl lg:text-6xl text-black nav-2">
              <h1 className="font-serif text-nowrap">About me</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </a>
          </div>

          <div className="w-full overflow-hidden p-2">
            <a href="" className="flex items-center justify-end  gap-2  text-5xl lg:text-6xl text-black nav-3">
              <h1 className="font-serif text-nowrap">Projects</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </a>
          </div>

          <div className="w-full overflow-hidden p-2">
            <a href="" className="flex items-center justify-end gap-2  text-5xl lg:text-6xl text-black nav-4">
              <h1 className="font-serif text-nowrap">Contact me</h1>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            </a>
          </div>
        </div>

        <button onClick={() => toggleMenu()} className="size-12 overflow-hidden absolute top-0 left-0 mx-8 my-4 flex items-center justify-center text-black close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar