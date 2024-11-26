import AboutUs from "@/components/store/sections/AboutUs";
import Contact from "@/components/store/sections/Contact";
import Gallery from "@/components/store/sections/Gallery";
import Hero from "@/components/store/sections/Hero";
import ProductsSection from "@/components/store/sections/Products";
import WorkshopsSection from "@/components/store/sections/Workshops";
import Image from "next/image";
export default function Home() {
  return (
    <>
     <Image src={'/bg-pattern.jpg'} width={1200} height={1000} alt='bg' className='w-full h-auto fixed opacity-40 -z-40'/>
      <Hero />
      <ProductsSection/>
      <WorkshopsSection/>
      <Gallery/>
      <AboutUs/>
      <Contact/>
    </>
  );
}
