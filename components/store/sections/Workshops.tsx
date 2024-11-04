import Link from "next/link"
import CourseCard from "../CourseCard"


const WorkshopsSection = () => {
    return (
        <div className="mt-12 px-4">
            <div className='flex items-center justify-between'>
                <h1 className='text-lg md:text-2xl font-bold'>Our Workshops</h1>
                <Link href={'/workshops'} className='text-sm'>See More</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>

    )
}

export default WorkshopsSection