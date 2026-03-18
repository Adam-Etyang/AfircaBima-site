"use client";
import React from "react";
import { useState } from "react";

const Features = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const features = [
    {
      title: "Compare Insurance Options",
      content: "Explore different insurance products in one place and compare coverage options for motor, Medical, travel, Personal Accident, Personal, Domestic, and business insurance.",
    },
    {
      title: "Apply Digitally",
      content: "Submit insurance applications online and upload required documents securely without paperwork or long in-person processes.",
    },
    {
      title: "Track Policies and Claims",
      content: "Monitor your policy status, receive updates, and follow claim progress directly from your dashboard.",
    },
    {
      title: "Mobile App Access",
      content: "Manage your policies, receive notifications, and stay updated anywhere using the AfricaBima mobile app.",
    },
    {
      title: "Tools for Insurance Agents",
      content: "Agents can manage customer applications, review policy details, and track commissions through the platform.",
    },

  ];

  return (
    <>

      <div
        className="fs-title w-full min-h-screen flex flex-col justify-center px-10 md:px-20 py-20"
        style={{ background: "transparent" }}
      >
        <p
          className="text-6xl tracking-[0.18em] uppercase mb-12 text-black"
        >
          Features
        </p>

        <div className="flex flex-col">
          {features.map((feature, i) => {
            const isHovered = hovered === i;
            const anyHovered = hovered !== null;
            const isBlurred = anyHovered && !isHovered;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  opacity: isBlurred ? 0.35 : 1,
                  filter: isBlurred ? "blur(2px)" : "none",
                  willChange: "opacity",
                  transition: "filter 0.4s ease, opacity 0.4s ease",
                }}
              >
                {/* Top rule */}
                <div
                  style={{
                    height: "1px",
                    background: isHovered
                      ? "rgba(0,0,0,0.5)"
                      : "rgba(0,0,0,0.15)",
                  }}
                />

                {/* Row */}
                <div className="flex flex-col py-3 gap-4 cursor-default">
                  <div className="flex items-baseline justify-between gap-5">

                    {/* Index */}
                    <span
                      className="fs-body shrink-0 text-xs tabular-nums w-6"
                      style={{
                        color: isHovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.2)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Headline */}
                    <h2
                      className="fs-headline flex-1"
                      style={{
                        fontSize: "clamp(20px, 3.5vw, 80px)",
                        lineHeight: 1.0,
                        letterSpacing: "-0.03em",
                        color: isHovered ? "#1a1204" : "rgba(0,0,0,0.75)",
                        transition: "color 0.35s ease",
                        fontStyle: i % 2 === 1 ? "italic" : "normal",
                      }}
                    >
                      {feature.title}
                    </h2>

                    {/* Arrow — appears on hover */}
                    <div
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateY(0)" : "translateY(-8px)",
                        transition: "opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{ color: "#1a1204" }}
                      >
                        <path
                          d="M4 10h12M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: isHovered ? "200px" : "0px",
                      opacity: isHovered ? 1 : 0,
                      overflow: "hidden",
                      transition:
                        "max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease 0.05s",
                      paddingLeft: "32px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "20px",
                        lineHeight: 1.6,
                        color: "rgba(0,0,0,0.55)",
                        fontWeight: 300,
                        whiteSpace: "normal",
                        maxWidth: "600px",
                      }}
                    >
                      {feature.content}
                    </p>
                  </div>
                </div>

                {/* Bottom rule on last item */}
                {i === features.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      background: isHovered
                        ? "rgba(0,0,0,0.5)"
                        : "rgba(0,0,0,0.15)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

};

export default Features;
