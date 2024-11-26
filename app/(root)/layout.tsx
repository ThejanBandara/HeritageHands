import Footer from "@/components/store/Footer";
import Navbar from "@/components/store/Navbar";



export default function RootStoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <main className="pt-[10vh] md:pt-[6vh] lg:pt-[2vh]">
                <Navbar/>
                {children}
                <Footer/>
            </main>
    );
}
