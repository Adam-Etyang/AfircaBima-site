"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  { src: "/Madison_logo.png", alt: "Madison Insurance" },
  { src: "/Jubilee_logo.png", alt: "Jubilee Insurance" },
  { src: "/CIC_logo.png", alt: "CIC Insurance" },
  { src: "/oldmutual_logo.png", alt: "Old Mutual" },
  { src: "/Britam_logo.png", alt: "Britam Insurance" },
  { src: "/Alianz logo.png", alt: "Allianz Insurance" },
  { src: "/AAR_logo.png", alt: "AAR Insurance" },
  { src: "/APA_logo.png", alt: "APA Insurance" },
];

const Customers: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="w-full py-12 bg-transparent border-t border-b dark:border-gray-800 border-gray-200">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-black dark:text-white text-center">

            Supported by multiple and reliable insurance providers

          </h2>

          {/* Carousel */}
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {logos.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="flex-[0_0_25%] sm:flex-[0_0_20%] md:flex-[0_0_15%] flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={120}
                    height={80}
                    className="h-auto w-24 sm:w-28 md:w-32 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
