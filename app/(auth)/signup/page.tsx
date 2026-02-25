"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/validation/signupSchema";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = (data: SignupFormData) => {
        console.log(data);
        router.push("/login");
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
            <Card>
                <h2 className="text-2xl text-[#000] font-bold mb-6 text-center">
                    Create Account
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 w-80"
                >
                    <Input
                        label="Name"
                        {...register("name")}
                        error={errors.name?.message}
                    />

                    <Input
                        label="Email"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    <Input
                        label="Password"
                        type="password"
                        {...register("password")}
                        error={errors.password?.message}
                    />

                    <Input
                        label="Confirm Password"
                        type="password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
                    />

                    <Button type="submit" fullWidth>
                        Sign Up
                    </Button>
                </form>
            </Card>
        </div>
    );
}