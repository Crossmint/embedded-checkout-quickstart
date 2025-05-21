"use client";

import { CrossmintEmbeddedCheckout } from "@crossmint/client-sdk-react-ui";
import Image from "next/image";

const collectionId = process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID ?? "";
if (!collectionId) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_COLLECTION_ID is not set");
}

export function HomeContent() {
  return (
    <div className="w-full flex items-center justify-center py-8 md:pt-4">
      <div className="bg-white rounded-2xl shadow-lg border max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left: Product info */}
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-l-2xl">
          <h1 className="text-2xl font-bold text-center w-full mb-6">
            Sonic Ledger Pass
          </h1>
          <Image
            src="/ledger-pass.svg"
            alt="Sonic Ledger Pass"
            priority
            width={360}
            height={360}
            className="mb-4 rounded-xl"
          />
          <div className="flex items-center justify-between w-full mb-6">
            <span className="text-lg font-medium text-gray-700">Price</span>
            <span className="text-xl font-bold">$2.00</span>
          </div>
          {/* Test payments card */}
          <div className="bg-white border rounded-xl shadow-sm p-4 w-full flex flex-col items-start mb-2">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Test payments</title>
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeWidth="2"
                />
                <rect
                  x="7"
                  y="9"
                  width="2"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
              <span className="font-semibold text-gray-700 text-sm">
                Test payments
              </span>
            </div>
            <div className="text-sm text-gray-500 mb-2">
              Use the following test card to complete your payment
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="font-mono text-base bg-gray-50 px-3 py-1 rounded border select-all flex-1">
                4242 4242 4242 4242
              </span>
              <button
                type="button"
                className="text-xs px-2 py-1 bg-gray-100 rounded border border-gray-200 hover:bg-gray-200"
                onClick={() =>
                  navigator.clipboard.writeText("4242 4242 4242 4242")
                }
              >
                Copy
              </button>
            </div>
          </div>
        </div>
        {/* Right: Checkout */}
        <div className="flex flex-col justify-center p-8 bg-white">
          <div className="mb-4">
            <CrossmintEmbeddedCheckout
              lineItems={{
                collectionLocator: `crossmint:${collectionId}`,
                callData: {
                  totalPrice: "2",
                },
              }}
              payment={{
                crypto: {
                  enabled: true,
                },
                fiat: {
                  enabled: true,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
