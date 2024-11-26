'use client'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import Image from 'next/image'
import CartSheet from './CartSheet'
import { useAuth } from '@/context/UserAuthContext'
import { useRouter } from 'next/navigation'

const Navbar = () => {

  const { user, loading } = useAuth()
  const router = useRouter()

  // sm:bg-red-300 md:bg-green-300 lg:bg-blue-300 xl:bg-yellow-300 2xl:bg-pink-300
  return (
    <nav className='w-full fixed top-0 flex flex-col gap-2 px-6 py-2 shadow-sm z-10 bg-white '>
      <div className="flex flex-row items-center justify-between mt-2">
        <Link href={'/'}>
          <Image src={'/logo.png'} height={70} width={70} alt="logo" priority={true} />
        </Link>

        <Input type='search' placeholder='Seach any Item' className='hidden md:flex w-4/12' />



        {
          loading ? (
            <div> </div>
          ) : (
            user ? (
              <div className='flex flex-row gap-3'>
                <CartSheet />

                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar >
                      <AvatarImage src={user.photoURL || ''} />
                      <AvatarFallback>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className='flex flex-col gap-2 mr-3' autoFocus={false} >
                    <p>hi! {user.displayName}</p>
                    <Button variant={"outline"} onClick={() => { console.log(user) }}>Profile</Button>
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
            ) : (
              <div className='flex flex-row gap-3'>
                <Button variant={"outline"} onClick={() => { router.push('/login') }}>Log in</Button>
                <Button onClick={() => { router.push('/register') }}>Sign up</Button>
              </div>
            )
          )
        }


      </div>

      <div className='md:hidden'>
        <Input type='text' placeholder='Seach any Item' />
      </div>


    </nav>
  )
}

export default Navbar