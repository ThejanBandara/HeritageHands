import Link from "next/link"
import CourseCard from "../CourseCard"


const WorkshopsSection = () => {
    return (
        <div className="mt-12 px-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-lg md:text-2xl font-bold'>Our Workshops</h1>
                <Link href={'/workshops'} className='text-sm'>See More</Link>
            </div>
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>

    )
}

export default WorkshopsSection