import Hero from "@/components/store/sections/Hero";
import ProductsSection from "@/components/store/sections/Products";
import WorkshopsSection from "@/components/store/sections/Workshops";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection/>
      <WorkshopsSection/>
    </>
  );
}
