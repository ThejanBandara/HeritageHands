'use client'
import loadWorkshops from '@/app/api/loadWorkshops'
import CourseCard from '@/components/store/CourseCard'
import { Workshop } from '@/types/workshop'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const WorkshopPage = () => {

  const [workshops, setWorkshops] = useState<Workshop[]>([])

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const workshopsData = await loadWorkshops();
        setWorkshops(workshopsData || []);
      } catch (error) {
        console.error('Error loading workshops:', error);
      }
    }

    fetchWorkshops();
    console.log(workshops)
  }, [])

  return (
    <div className='w-full mt-12'>
      <div className='py-2 flex items-center gap-2'>
        <Link href={'/'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <h1 className='text-xl md:text-2xl font-bold'>Workshops</h1>
      </div>
      <div className=' p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-auto'>
        {
          workshops?.map((workshop) => (
            <CourseCard key={workshop.workshopID} 
              {...workshop}
            />
          ))
        }
      </div>
    </div>
  )
}

export default WorkshopPage