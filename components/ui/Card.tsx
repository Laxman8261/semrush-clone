import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {children}
    </div>
  );
}