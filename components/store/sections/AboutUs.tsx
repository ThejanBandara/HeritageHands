import React from 'react'

const AboutUs = () => {
  return (
    <div className='mt-12'>
      <div className='px-4 bg-gray-50 bg-opacity-75'>
        <h1 className='text-lg md:text-2xl font-bold'>About Us</h1>

        <p className='text-left mt-2'>
          At HeritageHands, we are dedicated to Bringing Sri Lankan Culture to The World. Our collection features handcrafted products that showcase the skill and tradition of Sri Lankan artisans. Each item, from decor and accessories to skincare, reflects the beauty of our heritage.

          <br /> We also offer workshops for those interested in learning these timeless crafts. Join us in celebrating and sharing Sri Lanka’s unique artistry with the world.
        </p>
      </div>

      <div className='mt-8 w-full bg-gray-300 px-6 py-4 flex flex-col'>
        <p className='w-5/6 text-left pl-2 pt-1 pb-1 border-l-2 border-black font-bold'>&quot;Our mission is to share the soul of Sri Lankan craftsmanship with the world. Every piece tells a story, crafted with love and tradition. &quot;</p>

        <p className='self-end'>- Kasun Jayasekara, Founder</p>
      </div>
    </div>
  )
}

export default AboutUs