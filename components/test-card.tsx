"use client";

import Image from "next/image";

export function TestPaymentsCard() {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 w-full flex flex-col items-start mb-2">
      <div className="flex items-center gap-2 mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Test payments</title>
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
        </svg>
        <span className="text-lg font-semibold text-gray-900">
          Test payments
        </span>
      </div>
      <div className="text-base text-gray-600 mb-2">
        Use the following test card to complete your payment
      </div>
      <div className="flex items-center gap-2 w-full">
        <span className="font-mono text-base bg-gray-50 px-3 py-1.5 rounded-md border select-all flex-1">
          4242 4242 4242 4242
        </span>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => navigator.clipboard.writeText("4242 4242 4242 4242")}
        >
          <Image src="/copy.svg" alt="Copy" width={16} height={16} />
          <span>Copy</span>
        </button>
      </div>
    </div>
  );
}
