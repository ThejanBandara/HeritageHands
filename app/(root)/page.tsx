import Hero from "@/components/store/sections/Hero";
import ProductsSection from "@/components/store/sections/Products";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection/>
    </>
  );
}
