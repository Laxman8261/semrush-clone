"use client";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/");
    };
    const handleSubs = () => {
        router.push("/subscription");
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl text-black font-bold">
                    Welcome, {user?.name || "User"}
                </h1>
                <Button variant="outline" onClick={handleLogout}>
                    Logout
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg text-gray-600 font-semibold">Projects</h3>
                    <p className="text-2xl text-gray-500 font-bold mt-2">12</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg text-gray-600 font-semibold">Reports</h3>
                    <p className="text-2xl text-gray-500 font-bold mt-2">34</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg text-gray-600 font-semibold">Keywords</h3>
                    <p className="text-2xl text-gray-500 font-bold mt-2">128</p>
                </div>
            </div>

            <div className="pt-10">
                <Button  onClick={handleSubs}>
                    Add Subscription
                </Button>
            </div>
        </div>
    );
}