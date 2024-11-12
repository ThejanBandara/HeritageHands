'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import '../auth.css'
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const router = useRouter()
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            router.push("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
  return (
    <div className='w-full h-screen flex'>
        <div className="h-full max-h-screen w-3/12 overflow-hidden hidden md:block lg:w-9/12 auth-bg">
        </div>
        <div className='h-full w-full md:w-9/12 lg:w-3/12 bg-black bg-opacity-20 flex flex-col items-center justify-center py-16'>
            <Image src={'/logolong.png'} width={220} height={100} alt='logo' className='pb-6'/>
                <h1 className='w-5/6 text-2xl font-bold py-4'>Welcome Back</h1>

                <form className='w-5/6 px-4 flex flex-col gap-2' action={ () => (onLogin())}>
                    <div>
                        <Label>Email</Label>
                        <Input type='email' placeholder='someone@example.com' onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>

                    <div>
                        <Label>Password</Label>
                        <Input type='password' placeholder='********' onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>

                    <Button className='w-full mt-4'>Log in</Button>
                </form>

                <p className='text-sm text-gray-900 py-1'>or login using</p>

                <form className='w-5/6 px-4'>
                    <Button className='w-full'>
                        <Image src={'/google.png'} width={20} height={20} alt='google '/>
                        Google
                    </Button>
                </form>

                <p className='text-sm text-gray-900 py-2 pt-6'>Don&apos;t have an account? <Link href={'/register'}><span className='font-semibold underline'>Sign up</span></Link></p>
            </div>
        </div>
  )
}

export default LoginPage