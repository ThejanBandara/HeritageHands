'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';

// Define types for form data and validation
interface FormData {
    fName: string;
    contactNo: string;
    secondaryContactNo: string;
    email: string;
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    state: string;
    zipCode: string;
}

interface FormValidation {
    fName: boolean;
    contactNo: boolean;
    secondaryContactNo: boolean;
    email: boolean;
    addressLineOne: boolean;
    addressLineTwo: boolean;
    city: boolean;
    state: boolean;
    zipCode: boolean;
}

const DeliveryInfoForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fName: '',
        contactNo: '',
        secondaryContactNo: '',
        email: '',
        addressLineOne: '',
        addressLineTwo: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const [formValidation, setFormValidation] = useState<FormValidation>({
        fName: false,
        contactNo: false,
        secondaryContactNo: false,
        email: false,
        addressLineOne: false,
        addressLineTwo: false,
        city: false,
        state: false,
        zipCode: false,
    });

    // Update form field values dynamically
    const handleInputChange = (field: keyof FormData, value: string): void => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // Validate all fields
    const validateData = (): boolean => {
        const validation: FormValidation = {
            fName: formData.fName.trim() === '',
            contactNo: formData.contactNo.trim().length !== 10,
            secondaryContactNo: formData.secondaryContactNo.trim() !== '' && formData.secondaryContactNo.trim().length !== 10,
            email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email),
            addressLineOne: formData.addressLineOne.trim() === '',
            addressLineTwo: false, // Optional field, no validation needed
            city: formData.city.trim() === '',
            state: formData.state.trim() === '',
            zipCode: formData.zipCode.trim().length !== 5,
        };
    
        setFormValidation(validation);
    
        // Return true if all fields are valid
        return !Object.values(validation).some((isInvalid) => isInvalid);
    };

    const handleSubmit = (): void => {
        if (validateData()) {
            toast.success('Form submitted successfully!');
            // Handle form submission logic here
        } else {
            toast.error('Please fix the highlighted errors.');
        }
    };

    return (
        <Card className='w-10/12 h-5/6 bg-white border-[1px] border-gray-400 '>
            <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
                <CardDescription>Fill out this form to deliver the items to your doorstep</CardDescription>
            </CardHeader>
            <CardContent className='h-[70%]'>
                <form className='w-full h-full flex gap-2 justify-evenly'>
                    {/* Personal Information Section */}
                    <Card className='w-1/2 bg-white border-[1px] border-gray-200 px-2'>
                        <CardTitle className='text-2xl my-4'>Personal Information</CardTitle>
                        <div>
                            <div>
                                <Label>Full name</Label>
                                <Input
                                    type='text'
                                    value={formData.fName}
                                    onChange={(e) => handleInputChange('fName', e.target.value)}
                                    className={formValidation.fName ? 'border-red-500' : ''}
                                />
                            </div>
                            <div>
                                <Label>Phone Number</Label>
                                <Input
                                    type='number'
                                    value={formData.contactNo}
                                    onChange={(e) => handleInputChange('contactNo', e.target.value)}
                                    className={formValidation.contactNo ? 'border-red-500' : ''}
                                />
                            </div>
                            <div>
                                <Label>Secondary Phone Number</Label>
                                <Input
                                    type='number'
                                    value={formData.secondaryContactNo}
                                    onChange={(e) => handleInputChange('secondaryContactNo', e.target.value)}
                                    className={formValidation.secondaryContactNo ? 'border-red-500' : ''}
                                />
                            </div>
                            <div>
                                <Label>Email Address</Label>
                                <Input
                                    type='email'
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className={formValidation.email ? 'border-red-500' : ''}
                                />
                            </div>
                        </div>
                    </Card>
                    {/* Delivery Location Section */}
                    <Card className='w-1/2 bg-white border-[1px] border-gray-200 px-2'>
                        <CardTitle className='text-2xl my-4'>Delivery Location</CardTitle>
                        <div>
                            <div>
                                <Label>Address line 1</Label>
                                <Input
                                    type='text'
                                    value={formData.addressLineOne}
                                    onChange={(e) => handleInputChange('addressLineOne', e.target.value)}
                                    className={formValidation.addressLineOne ? 'border-red-500' : ''}
                                />
                            </div>
                            <div>
                                <Label>Address line 2</Label>
                                <Input
                                    type='text'
                                    value={formData.addressLineTwo}
                                    onChange={(e) => handleInputChange('addressLineTwo', e.target.value)}
                                />
                            </div>
                            <div className='flex gap-2'>
                                <div className='w-1/2'>
                                    <Label>City</Label>
                                    <Input
                                        type='text'
                                        value={formData.city}
                                        onChange={(e) => handleInputChange('city', e.target.value)}
                                        className={formValidation.city ? 'border-red-500' : ''}
                                    />
                                </div>
                                <div className='w-1/2'>
                                    <Label>State</Label>
                                    <Input
                                        type='text'
                                        value={formData.state}
                                        onChange={(e) => handleInputChange('state', e.target.value)}
                                        className={formValidation.state ? 'border-red-500' : ''}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label>Postal / Zip code</Label>
                                <Input
                                    type='number'
                                    value={formData.zipCode}
                                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                    className={formValidation.zipCode ? 'border-red-500' : ''}
                                />
                            </div>
                        </div>
                    </Card>
                </form>
            </CardContent>
            <CardFooter className='w-full flex items-center justify-end gap-2'>
                <Button variant={'outline'}>
                    Go Back
                </Button>
                <Button onClick={handleSubmit}>
                    Continue
                </Button>
            </CardFooter>
        </Card>
    );
};

export default DeliveryInfoForm;
