import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-left my-32 mx-16 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-bold text-7xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white mb-6">
        Africa Bima
      </h1>
      <p className="text-6xl text-gray-700 dark:text-gray-200 mb-12 font-semibold">
        Insurance Anywhere, Anytime
      </p>
      <p className="text-xl text-black dark:text-white mb-12 font-normal">
        AfricaBima is a digital platform that makes it easier to explore, apply for, and manage insurance. Users can compare policies, submit applications, upload documents, and track policy or claim updates in one place.
      </p>
      <div className="flex justify-center space-x-6">
      </div>
    </section>
  );
}
