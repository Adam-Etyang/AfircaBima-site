"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}
const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Simplifies insurance management",
    content:
      "AfricaBima has made tracking my policies and claims effortless. I can manage everything from my phone without the usual paperwork.",
    author: "Jonas Aly",
    designation: "Bancassurance Manager",
  },
  {
    rating: 5,
    title: "A must-have for agents",
    content:
      "Managing client applications and monitoring commissions has never been easier. This app streamlines my workflow completely.",
    author: "Mark Bures",
    designation: "Sales & Marketing Executive",
  },
  {
    rating: 5,
    title: "Easy and intuitive",
    content:
      "The mobile app is very user-friendly. I can check my policies and claims anytime, which saves me so much time.",
    author: "William Kolas",
    designation: "Financial Advisor",
  },
  {
    rating: 4,
    title: "Reliable and efficient",
    content:
      "With AfricaBima, I can stay on top of all my insurance needs. It’s made managing multiple policies straightforward and hassle-free.",
    author: "Andrew Chan",
    designation: "Insurance Consultant",
  },
  {
    rating: 5,
    title: "Streamlines client interactions",
    content:
      "As an agent, the app helps me communicate with clients efficiently and keep track of applications without juggling spreadsheets.",
    author: "Sophia Njeri",
    designation: "Insurance Sales Manager",
  },
  {
    rating: 5,
    title: "Highly practical for professionals",
    content:
      "I love how I can manage both my personal and business insurance in one app. It’s simplified insurance for me completely.",
    author: "David Okello",
    designation: "Business Development Officer",
  },
];


const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Testimonials from our users
        </h2>
        
        <div className="w-full overflow-hidden pt-8" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_45%] lg:flex-[0_0_40%] min-w-0"
              >
                <Review {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
