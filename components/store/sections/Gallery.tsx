import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const images = [
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery1-3.jpg", alt: "Image 1" },
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery2-2.jpg", alt: "Image 2" },
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery3-3.jpg", alt: "Image 3" },
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery4-2.jpg", alt: "Image 4" },
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery5-3.jpg", alt: "Image 5" },
  { src: "https://www.bluelankatours.com/wp-content/uploads/2023/11/gallery6-2.jpg", alt: "Image 6" },
];

const Gallery = () => {
  return (
    <div className='px-4 mt-12 flex flex-col'>
      <h1 className='text-lg md:text-2xl font-bold'>Gallery</h1>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${index === 0
                  ? "col-span-2 row-span-2"
                  : index === 1 || index === 2
                    ? "col-span-1 row-span-1"
                    : "col-span-2 row-span-1"
                }`}
              style={{ aspectRatio: index === 0 ? "2 / 2" : "4 / 3" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full border-1 border-black"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery

