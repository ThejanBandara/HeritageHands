import loadSingleWorkshop from '@/app/api/loadSingleWorkshop'
import { Button } from '@/components/ui/button'
import { Workshop } from '@/types/workshop'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkshopDetailPage = async({params} : {params: Promise<{id: string}>}) => {

    const workshop : Workshop | undefined = await loadSingleWorkshop((await params).id);

    return (
        <div className="h-fit pt-12">
            <div className='w-full h-[30vh] overflow-hidden relative'>
                <Link href={'/'} className='absolute top-0 left-0 m-2 size-8 bg-white rounded-full flex items-center justify-center shadow-lg border-[1px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg> 
                </Link>
                <Image src={workshop?.imageUrl || ''} width={1200} height={1000} alt='bg' className='w-full h-auto overflow-hidden' />
            </div>
            <div className='w-full bg-white'>
                <h1 className='text-2xl font-bold px-2'>{workshop?.WorkshopTitle}</h1>
                
                <div className='py-4 px-8 flex flex-col gap-2'>
                    <div className='w-full flex gap-2 items-center justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2 bg-white rounded-full shadow-lg border-[1px] border-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <div className='w-10/12'>
                            <h1 className='font-medium '>{workshop?.startDateLong}</h1>
                            <p className='text-gray-500 text-sm'>{workshop?.startTime} - {workshop?.endTime}</p>
                        </div>
                    </div>

                    <div className='w-full flex gap-2 items-center justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2 bg-white rounded-full shadow-lg border-[1px] border-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <div className='w-10/12'>
                            <h1 className='font-medium '>{workshop?.location}</h1>
                            <p className='text-gray-500 text-sm'>no.255, Colombo Road, kandy</p>
                        </div>
                    </div>

                    <div className='w-full flex gap-2 items-center justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2 bg-white rounded-full shadow-lg border-[1px] border-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <div className='w-10/12'>
                            <h1 className='font-medium '>{workshop?.availableSeats} Seats Left</h1>
                            <p className='text-gray-500 text-sm'>{workshop?.totalSeats} per batch</p>
                        </div>
                    </div>

                    <div className='w-full flex gap-2 items-center justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2 bg-white rounded-full shadow-lg border-[1px] border-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className='w-10/12'>
                            <h1 className='font-medium '>{workshop?.duration}</h1>
                            <p className='text-gray-500 text-sm'>est. end date - {workshop?.endDateShort}</p>
                        </div>
                    </div>
                </div>

                <div className='w-full py-4 px-2'  >
                    <h1 className='font-medium'>Description</h1>
                    <p className='text-justify py-2'>{workshop?.description}</p>
                </div>

                <div className='w-full h-[20vh] text-center flex flex-col gap-3 items-center justify-center bg-red-950 bg-opacity-20'>
                    <p className='text-xl font-medium'>Total Price</p>
                    <p className='text-4xl font-bold'>Rs.{workshop?.price}.00</p>
                    <Button className='px-4'>Register Now</Button>
                </div>
            </div>
        </div>
    )
}

export default WorkshopDetailPage