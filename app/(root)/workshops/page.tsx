import CourseCard from '@/components/store/CourseCard'
import Link from 'next/link'
import React from 'react'

const Workshop = () => {
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
      <div className='min-h-screen p-2 grid grid-cols-1 grid-rows-auto'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  )
}

export default Workshop