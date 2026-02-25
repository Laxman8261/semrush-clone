"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotSchema, ForgotFormData } from "@/validation/forgotSchema";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useState } from "react";

export default function ForgotPasswordPage() {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotFormData>({
        resolver: zodResolver(forgotSchema),
    });

    const onSubmit = (data: ForgotFormData) => {
        console.log("Reset link sent to:", data.email);
        setSuccess(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <Card>
                <h2 className="text-2xl text-[#000] font-bold mb-6 text-center">
                    Forgot Password
                </h2>

                {success ? (
                    <p className="text-green-600 text-center">
                        Reset link sent to your email.
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 w-80"
                    >
                        <Input
                            label="Email"
                            type="email"
                            {...register("email")}
                            error={errors.email?.message}
                        />

                        <Button type="submit" fullWidth>
                            Send Reset Link
                        </Button>
                    </form>
                )}
            </Card>
        </div>
    );
}