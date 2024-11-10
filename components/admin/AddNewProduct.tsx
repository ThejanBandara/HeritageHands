'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '../ui/button'

const AddNewProductForm = () => {
    const [isAddingDiscountedPrice, setIsAddingDiscountedPrice] = useState(false);

    return (
        <form className='flex flex-col gap-6 max-h-[70vh] overflow-y-scroll px-4'>
            <div className='flex flex-col gap-2'>
                <Label>Product Name</Label>
                <Input type='text' />
            </div>

            <div className='flex flex-col gap-2'>
                <Label>Product Category</Label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='flex flex-col gap-2'>
                <Label>Product Price</Label>
                <Input type='number' />
            </div>

            <div className='flex gap-2 items-center py-4'>
                <Checkbox onCheckedChange={() => setIsAddingDiscountedPrice(!isAddingDiscountedPrice)} />
                <Label>Add a discounted price to this product</Label>
            </div>

            <div className={`${isAddingDiscountedPrice ? 'block' : 'hidden'} flex flex-col gap-4`}>

                <div className='flex flex-col gap-2'>
                    <Label>Discounted Price</Label>
                    <Input type='number' />
                </div>

                <div className='flex gap-2 items-center'>
                    <Checkbox />
                    <Label>Add this product to the &quot;On Sale&quot; section</Label>
                </div>

            </div>

            <div className='flex flex-col gap-2'>
                <Label>Product Image</Label>
                <Input type='file' />
            </div>

            <div className='flex flex-col gap-2'>
                <Label>Delivery Option</Label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="select deleivery option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Standard Delivery</SelectItem>
                        <SelectItem value="dark">Free Delivery</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='flex gap-2 items-center'>
                <Checkbox />
                <Label>is this product made in Sri lanka?</Label>
            </div>

            <div className='flex gap-2 items-center'>
                <Checkbox />
                <Label>is this product in stock right now?</Label>
            </div>

            <div className='flex gap-2 items-center'>
                <Checkbox />
                <Label>Add this product to the Featured section</Label>
            </div>

            <div>
                <Button className='w-full'>Add Product</Button>
            </div>
        </form>
    )
}

export default AddNewProductForm