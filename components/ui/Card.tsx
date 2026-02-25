import { cn } from "@/utils/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border p-6",
        className
      )}
    >
      {children}
    </div>
  );
}