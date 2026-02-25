import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BackButton from "@/components/ui/BackButton";

const plans = [
    { name: "Free", price: "$0", features: ["Basic tools"] },
    { name: "Pro", price: "$29", features: ["Advanced tools", "Reports"] },
    { name: "Business", price: "$99", features: ["Everything included"] },
];

export default function SubscriptionPage() {
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <BackButton />
            <h1 className="text-3xl text-black font-bold text-center mb-10">
                Subscription Plans
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <Card key={plan.name}>
                        <h2 className="text-xl text-gray-700 font-semibold">{plan.name}</h2>
                        <p className="text-2xl text-gray-500 font-bold my-4">{plan.price}</p>

                        <ul className="space-y-2 text-gray-500 mb-4">
                            {plan.features.map((feature) => (
                                <li key={feature}>✔ {feature}</li>
                            ))}
                        </ul>

                        <Button fullWidth>Select Plan</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}