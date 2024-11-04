'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from "@/hooks/use-toast"
import React from 'react'

const Contact = () => {

    const { toast } = useToast()

    return (
        <div className='mt-12 px-4'>
            <h1 className='text-lg md:text-2xl font-bold'>Get in touch</h1>

            <form action="" className='mt-2'>
                <div>
                    <Label htmlFor='Name'>Your Name</Label>
                    <Input className='border-black' type='text' name='Name' id='Name' placeholder='Albert Einstein' />
                </div>
                <div>
                    <Label htmlFor='email'>Email Address</Label>
                    <Input className='border-black' type='email' name='email' id='email' placeholder='name@example.com' />
                </div>
                <div>
                    <Label htmlFor='Message'>Your Message</Label>
                    <Textarea className='border-black' name='Message' id='Message' placeholder='type your message Here' />
                </div>

                <Button className='mt-2 mb-12' 
                 onClick={() => {
                    toast({
                      title: "Scheduled: Catch up",
                      description: "Friday, February 10, 2023 at 5:57 PM",
                    })
                  }}
                  >Submit</Button>
        </form>
        </div >
    )
}

export default Contact