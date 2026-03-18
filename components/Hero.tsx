import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-left mt-50 mb-32 mx-16 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col items-start">
      <Image
        alt="AfricaBima logo"
        src="/africabima_logo.png"
        width={500}
        height={500}
        className="self-start mb-8"
      />

      <p className="text-5xl text-gray-700 dark:text-gray-200 mb-15 font-semibold">
        Insurance Anywhere, Anytime
      </p>
      <div className="flex justify-center space-x-6">
      </div>
    </section>
  );
}
