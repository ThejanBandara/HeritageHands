'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import '../auth.css'
import { createUserWithEmailAndPassword, getRedirectResult, signInWithCredential, signInWithRedirect, updateProfile } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const RegisterPage = () => {
    const provider = new GoogleAuthProvider();
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        const checkUser = async () => {
            const response = await getRedirectResult(auth);
            console.log(response)
            if (response) {
                router.push('/');
            }
        }
        checkUser();
    }, [])

    const onlogin = () => {
        if (firstName === "" || lastName === "") {
            toast.error('First name and last name are required');
        }
        else if (email === "") {
            toast.error('Email is required');
        }
        else if (password === "") {
            toast.error('Password is required');
        }
        else if (confirmPassword === "") {
            toast.error('Password confirmation is required');
        }
        else if (password.length < 8) {
            toast.error('Password must be at least 8 characters');
        }
        else if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: `${firstName} ${lastName}`
                    })
                    toast.success('Account created successfully');
                    router.push('/')
                })

        }
    }

    return (
        <div className='w-full h-screen flex'>
            <div className="h-full max-h-screen w-3/12 overflow-hidden hidden md:block lg:w-9/12 auth-bg">
            </div>
            <div className='h-full w-full md:w-9/12 lg:w-3/12 bg-black bg-opacity-20 flex flex-col items-center justify-center py-16'>
                <Image src={'/logolong.png'} width={220} height={100} alt='logo' className='pb-6' />
                <h1 className='w-5/6 text-2xl font-bold py-4'>Create an account</h1>

                <form className='w-5/6 px-4 flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <div>
                            <Label>First Name</Label>
                            <Input type='text' placeholder='First Name' onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>

                        <div>
                            <Label>Last Name</Label>
                            <Input type='text' placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type='email' placeholder='someone@example.com' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div>
                        <Label>Password</Label>
                        <Input type='password' placeholder='********' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>

                    <div>
                        <Label>Confirm Password</Label>
                        <Input type='password' placeholder='********' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>

                    <Button className='w-full mt-4' onClick={(e) => {
                        e.preventDefault()
                        onlogin()
                    }}>
                        Sign up
                    </Button>
                </form>

                <p className='text-sm text-gray-900 py-1'>or continue with</p>

                <form className='w-5/6 px-4' action={async () => {
                    signInWithRedirect(auth, provider)
                }}>
                    <Button className='w-full'>
                        <Image src={'/google.png'} width={20} height={20} alt='google ' />
                        Google
                    </Button>
                </form>

                <p className='text-sm text-gray-900 py-2 pt-6'>Already have an account? <Link href={'/login'}><span className='font-semibold underline'>Log in</span></Link></p>
            </div>
        </div>
    )
}

export default RegisterPage