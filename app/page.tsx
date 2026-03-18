import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";
import Dashboard from "components/Dashboard";
import CTACards from "components/CTACards";


export default function Page() {
  return (

    <div className="flex flex-col min-h-screen bg-transparent relative z-10">
      <Header />

      <main>
        <Section

          leftHalf={
            <Hero />

          }
          rightHalf={
            <div className="relative w-full h-full flex flex-col justify-center">
              <Image
                src="/laptop_realistic-Photoroom.png"
                alt="laptop"
                width={800}
                height={550}
                className="w-[150%] h-auto absolute left-0 scale-150"
              />
              <Image
                src="/Dashboardimg.png"
                width={600}
                height={380}
                alt="dashboard"
                className="absolute top-[0%] left-[0] h-[93.9%] w-[100%]"
              />

              {/* Phone Image - In Front */}
              <Image
                src="/image.png"
                alt="phone"
                width={320}
                height={580}
                className="w-3/4 md:w-2/3 h-auto relative z-10 md:-translate-x-16 scale-110 md:scale-125"
              />
            </div>

          }
        />

        <CTACards />

        <Customers />

        <Download />

        {/*
        <Dashboard />
        */}


        <Features />

        <Reviews />

      </main>
      <Footer />
    </div>
  );
}
