'use client'
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { Workshop } from "@/types/workshop"
import { FC } from "react"


const CourseCard:FC<Workshop> = ({
    workshopID,
    WorkshopTitle,
    imageUrl,
    startDateShort,
    endDateShort,
    availableSeats

}) => {


    return (
        <Link href={'/workshops/'+workshopID} className="m-2 mb-4 p-2 border-black border-2 rounded-lg shadow bg-white">
            <Image src={imageUrl} width={300} height={300} className="w-full rounded-md" alt="course" />
            <div className="pt-2">
                <p className="font-semibold text-xl">{WorkshopTitle}</p>

            </div>
            <div className="flex flex-col gap-1 pt-2">
                <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>{startDateShort} - {endDateShort}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <p>{availableSeats} seats left</p>
                </div>
            </div>

            <div className="pt-2 w-full flex flex-row items-center justify-evenly gap-2"> 
                    <Button variant={"outline"} className="border-black w-1/2">More Info </Button>
                    <Button variant={"default"} className="w-1/2" onClick={(e) => {
                        e.preventDefault()
                    }}>Enroll Now</Button>
            </div>
        </Link>
    )
}

export default CourseCard