"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/validation/loginSchema";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        login({ name: "Demo User", email: data.email });
        router.push("/dashboard");
    };

    return (
        <div className="flex bg-gray-50 items-center justify-center min-h-screen p-4">
            <Card>
                <h2 className="text-2xl text-[#000] font-bold mb-6 text-center">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <Input
                        label="Email"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <Input
                        label="Password"
                        type="password"
                        {...register("password")}
                        error={errors.password?.message}
                    />

                    <Button type="submit" fullWidth>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}