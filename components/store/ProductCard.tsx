'use client'
import Image from "next/image"
import { Badge } from "../ui/badge"
import Link from "next/link";


const ProductCard = () => {

    const id = 1;

    return (
        <Link href={`/Store/products/${id}`} className="border-black border-2 rounded-md p-2 relative flex flex-col" >
            {/* Product Image */}
            <Image src={'/product.jpg'} width={250} height={250} alt="product Image" className="self-center"/>
            {/* Product Category */}
            <p className="text-sm text-gray-500">Wooden Masks</p>
            {/* Product Name */}
            <p className="font-semibold overflow-ellipsis overflow-hidden max-w-[95%] whitespace-nowrap pt-2">Gini Raksha (Fire Mask)</p>

            <div className="flex items-center justify-between">

                <div className="flex flex-col">
                    {/* Discounted price and Precentage */}
                    <div className="flex items-center">
                        <p className="text-xs text-gray-500 line-through"><span>Rs.</span>15,000.00</p>
                        <Badge variant={"default"} className="text-xs scale-75">-33%</Badge>
                    </div>

                    {/* Original Price */}
                    <p className="font-bold text-lg"><span>Rs.</span>10,020.00</p>
                </div>

                {/* add to cart Button */}
                <button className=" aspect-square bg-black text-white p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
            </div>

            {/* Favourite Button */}
            <button className=" absolute top-0 right-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>

            {/* New and top Badges */}
            <div className=" absolute top-0 left-0 mt-2 ml-2 flex flex-row gap-1 scale-90">
                <Badge className=" border-green-600 text-green-500 font-medium" variant={"outline"}>New</Badge>
                <Badge className="flex flex-row gap-1 border-orange-500 text-orange-500 font-medium" variant={"outline"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                    <p>Top</p>
                </Badge>
            </div>
        </Link>
    )
}

export default ProductCard