"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-purple-600">
          SEM SaaS
        </h1>

        <div className="space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-purple-50 to-white">
        <h2 className="text-4xl text-[#000] md:text-5xl font-bold max-w-3xl leading-tight">
          Grow Your Online Visibility with Powerful SEO Tools
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Analyze competitors, track keywords, and optimize your website
          performance with our all-in-one marketing platform.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/signup">
            <Button fullWidth>Get Started</Button>
          </Link>
          <Link href="/subscription">
            <Button variant="outline">View Plans</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-gray-50">
        <h3 className="text-3xl text-black font-bold text-center mb-12">
          Powerful Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-black text-lg mb-2">
              Keyword Research
            </h4>
            <p className="text-gray-600">
              Discover high-performing keywords and outrank your competitors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-black text-lg mb-2">
              Competitor Analysis
            </h4>
            <p className="text-gray-600">
              Analyze your competitors' strategies and find growth
              opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-black text-lg mb-2">
              Website Audit
            </h4>
            <p className="text-gray-600">
              Get actionable insights to improve your site's SEO health.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 SEM SaaS. All rights reserved.
      </footer>
    </div>
  );
}