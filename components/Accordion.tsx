"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full rounded-lg overflow-hidden ${isOpen ? "bg-[#d3ded3] dark:bg-[#222822]" : "bg-[#d3ded3] dark:bg-[#222822]"
          }`}
      >
        <button className="w-full text-left p-4 flex justify-between items-center" onClick={toggleOpen}>
          <span className="text-xl font-semibold text-black dark:text-white">{title}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown className="text-2xl text-black dark:text-white " />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          <div className="p-4">
            <p className="text-black dark:text-white font-light">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const defaultAccordionItems = [
  {
    title: "Compare Insurance Options",
    content:
      "Explore different insurance products in one place and compare coverage options for motor, health, life, and business insurance.",
  },
  {
    title: "Apply Digitally",
    content:
      "Submit insurance applications online and upload required documents securely without paperwork or long in-person processes.",
  },
  {
    title: "Track Policies and Claims",
    content:
      "Monitor your policy status, receive updates, and follow claim progress directly from your dashboard.",
  },
  {
    title: "Mobile App Access",
    content:
      "Manage your policies, receive notifications, and stay updated anywhere using the AfricaBima mobile app.",
  },
  {
    title: "Tools for Insurance Agents",
    content:
      "Agents can manage customer applications, review policy details, and track commissions through the platform.",
  },
];


interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
