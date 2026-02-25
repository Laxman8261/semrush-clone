"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/validation/signupSchema";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        mode: "onChange",
    });


    const onSubmit = (data: SignupFormData) => {
        console.log("Form submitted:", data);
        router.push("signup/varification");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-4">
                <h1 className="text-xl font-bold tracking-wide">
                    <span className="text-black">SEMRUSH</span>
                </h1>
            </header>

            {/* Center Content */}
            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-sm">
                    <h2 className="text-2xl text-black font-semibold text-left mb-6">
                        Create your account
                    </h2>

                    {/* Google Button */}
                    <button
                        type="button"
                        className="relative w-full border border-gray-300 text-gray-700 rounded-md py-2.5 text-sm hover:bg-gray-50 transition"
                    >
                        {/* Google Icon - Left */}
                        <FcGoogle className="absolute left-4 top-1/2 -translate-y-1/2 text-lg" />

                        {/* Centered Text */}
                        <span className="block text-center font-medium">
                            Continue with Google
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span className="px-4 text-sm text-gray-500">or</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="relative">
                            {/* Mail Icon */}
                            <Mail className="absolute left-4 top-5 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none peer-placeholder-shown:block peer-focus:block peer-not-placeholder-shown:hidden" />

                            <input
                                type="email"
                                placeholder="Email"
                                onFocus={() => setShowPassword(true)}
                                {...register("email")}
                                className="peer w-full placeholder:text-gray-400 border border-gray-300 rounded-md pl-10 pr-4 py-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500 mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div
                            className={`transition-all duration-500 overflow-hidden ${showPassword ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                        >
                            <div>
                                <div className="relative">
                                    {/* Lock Icon */}
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none peer-placeholder-shown:block peer-not-placeholder-shown:hidden" />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        {...register("password")}
                                        className="peer w-full border border-gray-300 text-black rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                </div>

                                {errors.password && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div
                            className={`transition-all duration-500 overflow-hidden ${showPassword ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
                        >
                            <button
                                type="submit"
                                className="w-full bg-[#ff642d] hover:bg-[#e85a27] text-white py-2.5 rounded-md text-sm font-medium transition"
                            >
                                Create account
                            </button>
                        </div>
                    </form>

                    {/* Terms */}
                    <p className="text-md text-black mt-6 text-left leading-relaxed">
                        By creating your account, you agree to the{" "}
                        <span className="text-blue-600 hover:underline cursor-pointer">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-600 hover:underline cursor-pointer">
                            Privacy Policy
                        </span>
                    </p>

                    {/* Login Link */}
                    <p className="text-md text-black mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}