"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// ─── Illustrations ────────────────────────────────────────────────────────────
type Claim = {
  id: string;
  type: string;
  date: string;
  amount: string;
  status: "Approved" | "Pending" | "Rejected";
};

function Statements({ hovered }: { hovered: boolean }) {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "approved">("all");
  const statusStyles: Record<Claim["status"], string> = {
    Approved: "bg-teal-400/10 text-teal-400 border border-teal-400/20",
    Pending: "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20",
    Rejected: "bg-red-400/10 text-red-400 border border-red-400/20",
  };

  const claims: Claim[] = [
    { id: "CLM-001", type: "Auto Accident", date: "Mar 10, 2026", amount: "KSh 45,000", status: "Approved" },
    { id: "CLM-002", type: "Medical", date: "Mar 5, 2026", amount: "KSh 12,500", status: "Pending" },
    { id: "CLM-004", type: "Auto Theft", date: "Feb 14, 2026", amount: "KSh 210,000", status: "Rejected" },
  ];
  const filteredClaims = claims.filter((c) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return c.status === "Pending";
    if (activeTab === "approved") return c.status === "Approved";
    return true;
  });

  return (
    <div className="col-span-2 bg-[#222822] rounded-2xl p-5 border border-[#2e3a2e]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-300">Claims Tracker</h2>
        <div className="flex gap-1">
          {(["all", "pending", "approved"] as const).map((tab) => (
            <button
              key={tab}
              className="text-xs px-3 py-1 rounded-full capitalize transition-all duration-150"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-600 border-b border-[#2e3a2e]">
              <th className="text-left pb-2 font-medium">Claim ID</th>
              <th className="text-left pb-2 font-medium">Type</th>
              <th className="text-left pb-2 font-medium">Date</th>
              <th className="text-left pb-2 font-medium">Amount</th>
              <th className="text-left pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.map((claim, i) => (
              <tr
                key={claim.id}
                className="border-b border-[#2e3a2e]/50 transition-colors hover:bg-[#1e2e1e]"
              >
                <td className="py-3 text-teal-400 font-mono">{claim.id}</td>
                <td className="py-3 text-gray-300">{claim.type}</td>
                <td className="py-3 text-gray-500">{claim.date}</td>
                <td className="py-3 text-gray-200 font-medium">{claim.amount}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusStyles[claim.status]}`}>
                    {claim.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function SavingsIllustration({
  selfHovered,
  otherHovered,
}: {
  selfHovered: boolean;
  otherHovered: boolean;
}) {
  return (
    <div className="relative w-full max-w-[180px] h-[140px]">
      {/* Idle / stacking-cards illustration */}
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: selfHovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Back stack cards – animate when OTHER card is hovered */}
        <rect
          x="18"
          y="42"
          width="124"
          height="78"
          rx="12"
          fill="#e8b870"
          style={{
            transformOrigin: "80px 81px",
            transform: otherHovered ? "rotate(-6deg) translateY(-10px)" : "rotate(-4deg)",
            transition: "transform 0.6s ease-in-out",
            animation: otherHovered ? "stackSlide1 1.1s ease-in-out infinite" : "none",
          }}
        />
        <rect
          x="22"
          y="38"
          width="124"
          height="78"
          rx="12"
          fill="#e2c88a"
          style={{
            transformOrigin: "84px 77px",
            transform: otherHovered ? "rotate(5deg) translateY(-6px)" : "rotate(3deg)",
            transition: "transform 0.6s ease-in-out 0.1s",
            animation: otherHovered ? "stackSlide2 1.1s ease-in-out infinite 0.18s" : "none",
          }}
        />
        {/* Main card */}
        <rect x="26" y="34" width="108" height="72" rx="12" fill="#c8a84b" />
        <rect x="26" y="34" width="108" height="72" rx="12" fill="url(#goldGrad)" />
        <circle cx="46" cy="52" r="10" fill="rgba(255,255,255,0.18)" />
        <rect x="38" y="76" width="56" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
        <rect x="38" y="88" width="36" height="6" rx="3" fill="rgba(255,255,255,0.14)" />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </linearGradient>
        </defs>
        <style>{`
          @keyframes stackSlide1 {
            0%, 100% { transform: rotate(-4deg) translateY(0); }
            50%       { transform: rotate(-6deg) translateY(-10px); }
          }
          @keyframes stackSlide2 {
            0%, 100% { transform: rotate(3deg) translateY(0); }
            50%       { transform: rotate(5deg) translateY(-6px); }
          }
        `}</style>
      </svg>

      {/* Hovered: bar chart illustration */}
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{
          opacity: selfHovered ? 1 : 0,
          transition: "opacity 0.3s ease 0.1s",
        }}
      >
        <line x1="28" y1="112" x2="136" y2="112" stroke="rgba(0,0,0,0.12)" strokeWidth="1.5" />
        <rect
          x="42" y="80" width="22" height="32" rx="4" fill="#c8a84b"
          style={{
            transformOrigin: "53px 112px",
            transform: selfHovered ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 0.4s ease 0s",
          }}
        />
        <rect
          x="72" y="58" width="22" height="54" rx="4" fill="#b8942a"
          style={{
            transformOrigin: "83px 112px",
            transform: selfHovered ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 0.4s ease 0.1s",
          }}
        />
        <rect
          x="102" y="36" width="22" height="76" rx="4" fill="#8a6d0e"
          style={{
            transformOrigin: "113px 112px",
            transform: selfHovered ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 0.4s ease 0.2s",
          }}
        />
        <polyline
          points="53,76 83,54 113,32"
          stroke="#4f46e5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="120"
          style={{
            strokeDashoffset: selfHovered ? 0 : 120,
            transition: "stroke-dashoffset 0.5s ease 0.35s",
          }}
        />
        <circle
          cx="113" cy="32" r="4" fill="#4f46e5"
          style={{ opacity: selfHovered ? 1 : 0, transition: "opacity 0.3s ease 0.7s" }}
        />
        <text x="106" y="28" fontSize="10" fill="#4f46e5" fontFamily="sans-serif" fontWeight="600"
          style={{ opacity: selfHovered ? 1 : 0, transition: "opacity 0.3s ease 0.75s" }}
        >
          +52%
        </text>
      </svg>
    </div>
  );
}

type HoveredCard = "a" | "b" | null;

export default function HoverCards() {
  const [hovered, setHovered] = useState<HoveredCard>(null);

  const isAnyHovered = hovered !== null;

  return (
    <div className="bg-[#d3ded3] dark:bg-[#222822] px-2 sm:px-6 md:px-10 py-6 sm:py-10 font-sans text-gray-800 dark:text-gray-200 rounded-xl transition-colors max-w-6xl mx-auto my-10">
      <div className="mb-8">
        <div className="inline-block text-black rounded-full border-2 border-[#111816] px-6 py-2 text-sm font-semibold">
          Open an Account
        </div>
      </div>
      <div className="flex items-stretch gap-4 p-8 min-h-[700px] max-w-6xl mx-auto font-['Sora',sans-serif]">

        <div
          className="rounded-[20px] p-7 flex flex-col overflow-hidden cursor-pointer relative bg-[#111816] dark:bg-[#E6F0E6]"
          style={{
            flex: isAnyHovered ? (hovered === "a" ? 1.35 : 0.65) : 1,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
          onMouseEnter={() => setHovered("a")}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2.5 text-white dark:text-black">
            For Agents & Brokers
          </p>
          <h2 className="text-[20px] font-semibold leading-tight text-white dark:text-black mb-1">
            Manage clients<br />and policies
          </h2>
          <p className="text-[13px] text-white/50 dark:text-black">Tools built for insurance professionals</p>
          <Statements
            hovered={hovered === "a"}

          />

          <div className="flex-1 flex items-center justify-center mx-0 my-4">


          </div>

          {/* Reveal text */}
          <div
            className="text-[13px] text-white/60 dark:text-black leading-relaxed overflow-hidden"
            style={{
              maxHeight: hovered === "a" ? "120px" : "0px",
              opacity: hovered === "a" ? 1 : 0,
              transition: "max-height 0.4s ease, opacity 0.35s ease 0.1s",
            }}
          >
            Streamline your workflow with tools designed for agents and brokers. Manage customer applications, review policy details, track progress, and stay connected with clients from one platform.
          </div>

          {/* CTA */}
          <button
            className="mt-3.5 self-start px-5 py-2.5 rounded-full text-[13px] font-medium bg-white dark:bg-[#111816] dark:text-white text-[#1a1a2e] overflow-hidden"
            style={{
              maxHeight: hovered === "a" ? "60px" : "0px",
              opacity: hovered === "a" ? 1 : 0,
              transform: hovered === "a" ? "translateY(0)" : "translateY(8px)",
              transition: "max-height 0.3s ease, opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s",
            }}
          >
            <p>Join as an agent →</p>
          </button>
        </div>

        <div
          className="rounded-[20px] p-7 flex flex-col overflow-hidden cursor-pointer relative"
          style={{
            flex: isAnyHovered ? (hovered === "b" ? 1.35 : 0.65) : 1,
            transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
            background: "#E6F0E6",
            border: "0.5px solid rgba(0,0,0,0.06)",
          }}
          onMouseEnter={() => setHovered("b")}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2.5 text-black">
            Customers
          </p>
          <h2 className="text-[20px] font-semibold leading-tight text-[#1a1204] mb-1">
            Find and manage <br />
            insurance easily
          </h2>
          <p className="text-[13px] text-black/45">Simple, digital insurance access</p>

          <div className="flex-1 flex items-center justify-center my-4">
            <SavingsIllustration
              selfHovered={hovered === "b"}
              otherHovered={hovered === "a"}
            />
          </div>

          {/* Reveal text */}
          <div
            className="text-[13px] text-black/55 leading-relaxed overflow-hidden"
            style={{
              maxHeight: hovered === "b" ? "120px" : "0px",
              opacity: hovered === "b" ? 1 : 0,
              transition: "max-height 0.4s ease, opacity 0.35s ease 0.1s",
            }}
          >
            Explore insurance options, apply online, upload documents, and track your policy or claim progress directly from the platform or mobile app.
          </div>

          {/* CTA */}
          <button
            className="mt-3.5 self-start px-5 py-2.5 rounded-full text-[13px] font-medium bg-[#1a1204] text-[#f0ede8] overflow-hidden"
            style={{
              maxHeight: hovered === "b" ? "60px" : "0px",
              opacity: hovered === "b" ? 1 : 0,
              transform: hovered === "b" ? "translateY(0)" : "translateY(8px)",
              transition: "max-height 0.3s ease, opacity 0.3s ease 0.2s, transform 0.3s ease 0.2s",
            }}
          >
            Get started →
          </button>
        </div>
      </div>
    </div>
  );
}
