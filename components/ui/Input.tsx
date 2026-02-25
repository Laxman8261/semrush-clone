"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-[#000] font-medium">{label}</label>
      <input
        className="w-full px-3 py-2 text-[#000] border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}