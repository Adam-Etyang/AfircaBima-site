import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-bold text-7xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white mb-6">
        Africa Bima
      </h1>
      {/*TODO: Add image*/}
      <p className="text-6xl text-gray-600 dark:text-gray-300 mb-12 font-semibold">
        Insurance Anywhere, Anytime
      </p>
      <div className="flex justify-center space-x-6">
      </div>
    </section>
  );
}
