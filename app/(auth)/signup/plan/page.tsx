"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PlanPage() {
    const [selected, setSelected] = useState<"proLocal" | "pro">("proLocal");
    const router = useRouter();
    const handleSkip = () => {
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f3f4ff] via-[#f8f7ff] to-[#fdf2f8] flex flex-col items-left justify-center">
            <div className="justify-start px-8 pb-10">
                <div className="text-black font-bold text-xl tracking-wide">
                    SEMRUSH
                </div>
            </div>
            <div className="w-full max-w-xl mx-auto text-left items-center">

                {/* Title */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    This is your best plan match
                </h1>
                <p className="text-gray-600 mb-4 text-sm">
                    Your ultimate solution for online visibility
                </p>

                {/* Plan Cards */}
                <div className="flex justify-center gap-4 mb-4">
                    {/* SEO Pro & Local */}
                    <div
                        onClick={() => setSelected("proLocal")}
                        className={`cursor-pointer w-64 rounded-lg text-center border p-4 transition-all ${selected === "proLocal"
                            ? "border-purple-500 bg-purple-50 shadow-md"
                            : "border-gray-300 bg-white"
                            }`}
                    >
                        <p className="font-semibold text-gray-900">SEO Pro & Local</p>
                        <p className="text-gray-700">$199.95/mo</p>
                    </div>

                    {/* SEO Pro */}
                    <div
                        onClick={() => setSelected("pro")}
                        className={`cursor-pointer w-64 rounded-lg text-center border p-4 transition-all ${selected === "pro"
                            ? "border-purple-500 bg-purple-50 shadow-md"
                            : "border-gray-300 bg-white"
                            }`}
                    >
                        <p className="font-semibold text-gray-900">SEO Pro</p>
                        <p className="text-gray-700">$139.95/mo</p>
                    </div>
                </div>

                {/* Features */}
                <div className="text-left text-sm max-w-xl mx-auto space-y-2 mb-3">
                    {[
                        "5 websites to monitor",
                        "Keyword tools: find the best keywords",
                        "Competitive research: benchmark and outperform",
                        "Position tracking: track daily rankings",
                        "Site audit: fix issues and boost speed",
                        "Google profile and listings: maximize visibility",
                        "Review management: handle reviews with AI",
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-black">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{item}</span>
                        </div>
                    ))}
                    <p className="text-gray-500">and more...</p>
                </div>

                {/* Pricing Note */}
                <p className="text-gray-800 font-medium mb-4">
                    7 days free, then $199.95/mo
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-4 items-center">
                    <button onClick={handleSkip} className="w-full max-w-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:opacity-90 transition">
                        Get free trial
                    </button>

                    <button onClick={handleSkip} className="w-full max-w-xl bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300 transition">
                        Skip trial
                    </button>
                </div>

                {/* Footer Text */}
                <p className="text-xs text-gray-500 mt-6 max-w-md mx-auto">
                    You may cancel the 7-day free trial at any time as well as your
                    monthly subscription in accordance with our{" "}
                    <span className="text-blue-500 underline cursor-pointer">
                        Cancellation Policy
                    </span>
                </p>
            </div>
        </div>
    );
}