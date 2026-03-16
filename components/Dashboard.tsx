"use client";

import React from "react";
import { useState, ReactNode } from "react";

import { ReceiptText, LayoutDashboard, CirclePlus, ClipboardPen, ShieldCheck, Clock4, Check, CreditCard } from "lucide-react";

import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

type Activity = {
  id: number;
  icon: ReactNode;
  label: string;
  time: string;
  color: string;
  borderColor: string;
};

const recentActivity: Activity[] = [
  { id: 1, icon: <Check />, label: "Policy Renewed", time: "2 hours ago", color: "text-teal-400", borderColor: "border-teal-400" },
  { id: 2, icon: <CreditCard />, label: "Premium Paid", time: "1 day ago", color: "text-yellow-400", borderColor: "border-yellow-400" },
  { id: 3, icon: <ReceiptText />, label: "Claim Processed", time: "3 days ago", color: "text-gray-400", borderColor: "border-gray-400" },
];

export default function Dashboard() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="bg-[#d3ded3] dark:bg-[#222822] px-4 sm:px-6 md:px-10 md:ml-10 md:mr-10 py-6 sm:py-10 font-sans text-gray-800 dark:text-gray-200 rounded-xl transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-7">
        <div className="bg-gray-200 dark:bg-[#2a3a2a] rounded-xl w-11 h-11 flex items-center justify-center text-teal-400 text-xl shrink-0">
          <LayoutDashboard />
        </div>
        <div className="flex-1">
          <h1 className="m-0 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Your Dashboard</h1>
          <p className="m-0 text-xs text-gray-600 dark:text-gray-500 mt-0.5">Everything at a glance</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 border border-gray-400 dark:border-[#3a4a3a] rounded-full px-4 py-1.5 text-xs text-gray-600 dark:text-gray-400 font-medium shrink-0">
          <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
          Live Preview
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Active Policies */}
            <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
              <div className="flex justify-between mb-3">
                <span className="text-teal-400 text-lg"><ShieldCheck /></span>
                <span className="text-teal-400 text-base">↗</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-none mb-1">5</div>
              <div className="text-xs text-gray-600 dark:text-gray-500 font-medium">Active Policies</div>
            </div>

            {/* Total Coverage */}
            <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
              <div className="flex justify-between mb-3">
                <span className="text-yellow-400 text-lg"><ShieldCheck /></span>
                <span className="text-teal-400 text-base">↗</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 leading-none mb-1">KSh 2.4M</div>
              <div className="text-xs text-gray-600 dark:text-gray-500 font-medium">Total Coverage</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">Quick Actions</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className={`flex-1 bg-gray-100 dark:bg-[#1a2a1a] border rounded-xl py-4 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${hovered === "new" ? "border-teal-400 bg-gray-200 dark:bg-[#1e2e1e]" : "border-gray-300 dark:border-[#2e3a2e]"
                  }`}
                onMouseEnter={() => setHovered("new")}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="text-teal-400 text-xl"><CirclePlus /></span>
                <span className="text-xs text-gray-700 dark:text-gray-400 font-medium">New Policy</span>
              </button>
              <button
                className={`flex-1 bg-gray-100 dark:bg-[#1a2a1a] border rounded-xl py-4 flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 ${hovered === "claims" ? "border-teal-400 bg-gray-200 dark:bg-[#1e2e1e]" : "border-gray-300 dark:border-[#2e3a2e]"
                  }`}
                onMouseEnter={() => setHovered("claims")}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="text-teal-400 text-xl"><ClipboardPen /></span>
                <span className="text-xs text-gray-700 dark:text-gray-400 font-medium">Claims</span>
              </button>
            </div>
          </div>

          {/* Agent Contact Card */}
          <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e] flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300 mb-4">Your Agent</h2>
            <div className="flex flex-col items-center text-center flex-1">
              <div
                className="w-16 h-16 rounded-full mb-3 flex items-center justify-center text-2xl font-bold text-[#1a1e1a]"
                style={{ background: "linear-gradient(135deg, #4ecdc4, #a8c96e)" }}
              >
                AM
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Amara Mwangi</div>
              <div className="text-xs text-gray-600 dark:text-gray-500 mt-0.5 mb-4">Senior Insurance Advisor</div>
              <div className="w-full flex flex-col gap-2 mt-auto">
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#1a2a1a] rounded-xl px-3 py-2.5 border border-gray-300 dark:border-[#2e3a2e]">
                  <span className="text-teal-400 text-sm">📞</span>
                  <span className="text-xs text-gray-700 dark:text-gray-400">+254 712 345 678</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#1a2a1a] rounded-xl px-3 py-2.5 border border-gray-300 dark:border-[#2e3a2e]">
                  <span className="text-teal-400 text-sm">✉</span>
                  <span className="text-xs text-gray-700 dark:text-gray-400">amara@insure.co.ke</span>
                </div>
                <button className="mt-2 w-full py-2.5 rounded-xl text-xs font-semibold text-[#1a1e1a] transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #4ecdc4, #a8c96e)" }}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Policy Distribution */}
          <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">Policy Distribution</h2>
              <span className="text-gray-600 text-lg cursor-pointer">⊕</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div
                className="rounded-xl h-20 w-full sm:w-48 lg:w-64 shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #4ecdc4 0%, #a8c96e 40%, #c9b84e 70%, #8fba6e 100%)",
                }}
              />
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                {[
                  { label: "Auto", pct: "60%", dot: "bg-teal-400" },
                  { label: "Health", pct: "25%", dot: "bg-yellow-400" },
                  { label: "Home", pct: "15%", dot: "bg-gray-400" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.dot}`} />
                    <span className="text-xs text-gray-700 dark:text-gray-400 w-12">{item.label}</span>
                    <span className="text-xs text-gray-900 dark:text-gray-200 font-semibold ml-auto pl-4">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">Recent Activity</h2>
              <span className="text-gray-400 dark:text-gray-600 text-lg"><Clock4 /></span>
            </div>
            <div className="flex flex-col gap-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 bg-gray-100 dark:bg-[#1a2a1a] text-xs ${item.color} ${item.borderColor}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 dark:text-gray-300 font-medium">{item.label}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-600 mt-0.5">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Spend Chart */}
          <div className="bg-white dark:bg-[#222822] rounded-2xl p-5 border border-gray-300 dark:border-[#2e3a2e]">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-300">Monthly Spend</h2>
              <span className="text-xs text-gray-600 dark:text-gray-500">Last 6 months</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-5">
              <span className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-gray-100">KSh 8,500</span>
              <span className="text-xs text-teal-400 font-medium">↑ 12% vs last month</span>
            </div>
            <SpendChart data={spendData} />
          </div>

        </div>
      </div>
    </div>
  );
}
type SpendMonth = {
  month: string;
  amount: number;
}

const spendData: SpendMonth[] = [
  { month: "Oct", amount: 6200 },
  { month: "Nov", amount: 8500 },
  { month: "Dec", amount: 7100 },
  { month: "Jan", amount: 9400 },
  { month: "Feb", amount: 6800 },
  { month: "Mar", amount: 8500 },
];

function SpendChart({ data }: { data: SpendMonth[] }) {
  const max = Math.max(...data.map((d) => d.amount));
  return (
    <div className="flex items-end gap-2 h-24 w-full">
      {data.map((d, i) => {
        const heightPct = (d.amount / max) * 100;
        const isLast = i === data.length - 1;
        return (
          <div key={d.month} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="w-full rounded-t-md relative" style={{ height: `${heightPct}%` }}>
              <div
                className="absolute inset-0 rounded-t-md"
                style={{
                  background: isLast
                    ? "linear-gradient(180deg, #4ecdc4, #2a9d8f)"
                    : "linear-gradient(180deg, #2e3a2e, #222822)",
                  opacity: isLast ? 1 : 0.8,
                }}
              />
            </div>
            <span className="text-[10px] text-gray-500">{d.month}</span>
          </div>
        );
      })}
    </div>
  );
}

