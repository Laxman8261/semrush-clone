"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomizeFlowPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const roles = [
        "Business owner / Entrepreneur",
        "Consultant / Freelancer",
        "Team member / Specialist",
        "Executive / Manager",
        "Student / Intern",
        "Other"
    ];

    const handleContinue = () => {
        if (step === 1 && hasWebsite !== null) {
            setStep(2);
        } else if (step === 2 && selectedRole) {
            router.push('/signup/plan');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="px-8 py-4">
                <h1 className="text-xl font-bold tracking-wide text-black">
                    SEMRUSH
                </h1>
            </header>

            <div className="flex flex-1 items-center justify-center px-4">
                <div className="w-full max-w-sm">
                    {step === 1 && (
                        <>
                            <div className="mb-8">
                                <h2 className="text-sm text-black mb-2">
                                    Let's customize your experience
                                </h2>
                                <p className="text-2xl text-black font-semibold">
                                    Do you have a website?
                                </p>
                            </div>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setHasWebsite(true)}
                                    className={`w-full text-left p-4 border rounded-lg transition ${hasWebsite === true
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <span className="text-black">Yes, I have a website</span>
                                </button>

                                <button
                                    onClick={() => setHasWebsite(false)}
                                    className={`w-full text-left p-4 border rounded-lg transition ${hasWebsite === false
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <span className="text-black">I don't have a website</span>
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div className="mb-8">
                                <h2 className="text-sm text-black mb-2">
                                    Let's customize your experience
                                </h2>
                                <p className="text-2xl text-black font-semibold">
                                    What best describes your role?
                                </p>
                            </div>

                            <div className="space-y-3">
                                {roles.map((role) => (
                                    <button
                                        key={role}
                                        onClick={() => setSelectedRole(role)}
                                        className={`w-full text-left p-4 border rounded-lg transition ${selectedRole === role
                                                ? 'border-orange-500 bg-orange-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <span className="text-black">{role}</span>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                    <button
                        onClick={handleContinue}
                        disabled={step === 1 ? hasWebsite === null : !selectedRole}
                        className="w-full bg-[#ff642d] hover:bg-[#e85a27] text-white py-3 rounded-md mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}