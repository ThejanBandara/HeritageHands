'use client'
import Link from "next/link"
import CourseCard from "../CourseCard"
import { useEffect, useState } from "react"
import { Workshop } from "@/types/workshop"
import loadWorkshops from "@/app/api/loadWorkshops"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"


const WorkshopsSection = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchWorkshops = async () => {
            setIsLoading(true)
            try {
                const workshopsData = await loadWorkshops();
                setWorkshops(workshopsData || []);
            } catch (error) {
                console.error('Error loading workshops:', error);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchWorkshops();
        console.log(workshops)
    }, [])

    return (
        <div className="mt-12 px-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-lg md:text-2xl font-bold'>Our Workshops</h1>
                <Link href={'/workshops'} className='text-sm'>See More</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-auto gap-4">
                {
                    isLoading ? (
                        Array.from({ length: 10 }).map((_, index) => (
                            <Skeleton key={index} className='w-full rounded-lg h-[50vh]' />
                        ))
                    ) : (
                        workshops?.map((workshop) => (
                            <CourseCard key={workshop.workshopID} {...workshop} />
                        ))
                    )
                }
            </div>
        </div>

    )
}

export default WorkshopsSection