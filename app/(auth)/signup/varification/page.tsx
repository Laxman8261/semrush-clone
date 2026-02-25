"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyEmailPage() {
    const router = useRouter();
    const [isOtpComplete, setIsOtpComplete] = useState(false);
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    useEffect(() => {
        setIsOtpComplete(otp.every(digit => digit !== ""));
    }, [otp]);

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleSubmit = () => {
        const code = otp.join("");
        console.log("Entered Code:", code);
        router.push("/signup/customize-flow");
    };

    return (
        <div className="min-h-screen bg-[#fff] flex flex-col">

            <header className="px-8 py-4">
                <h1 className="text-xl font-bold tracking-wide text-black">
                    SEMRUSH
                </h1>
            </header>

            <div className="flex flex-1 items-center justify-center px-2">
                <div className="w-full max-w-sm text-left">
                    <h2 className="text-2xl font-semibold text-black mb-2">
                        Verify your email
                    </h2>

                    <p className="text-sm text-gray-600 mb-6">
                        Enter a 6-digit code sent to <br />
                        <span className="font-medium text-black">
                            itssoulmiles@gmail.com
                        </span>
                    </p>

                    <div className="flex justify-center gap-3 mb-6">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    if (el) inputsRef.current[index] = el;
                                }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-12 text-center text-black text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className={`w-full bg-[#ff642d] hover:bg-[#e85a27] text-white py-2.5 rounded-md text-sm font-medium transition-all duration-500 overflow-hidden ${isOtpComplete ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                            }`}
                    >
                        Verify
                    </button>

                    <p className="text-sm text-gray-500 mt-6">
                        Haven't received an email? Check your spam or contact us at{" "}
                        <span className="text-blue-600 cursor-pointer hover:underline">
                            mail@semrush.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}