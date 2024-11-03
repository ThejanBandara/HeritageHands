import Link from "next/link"


const WorkshopsSection = () => {
    return (
        <div className="mt-12 px-2">
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold'>Our Workshops</h1>
                <Link href={'/workshops'} className='text-sm'>See More</Link>
            </div>
            
        </div>

    )
}

export default WorkshopsSection