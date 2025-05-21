"use client";

import { CrossmintEmbeddedCheckout } from "@crossmint/client-sdk-react-ui";
import Image from "next/image";

const collectionId = process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID ?? "";
if (!collectionId) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_COLLECTION_ID is not set");
}

export function HomeContent() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col mb-8">
        <Image
          src="/ledger-pass.svg"
          alt="Sonic Ledger Pass"
          priority
          width={150}
          height={150}
          className="mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">Sonic Ledger Pass</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white flex flex-col gap-3 justify-between rounded-xl border shadow-sm p-5 overflow-hidden">
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
}
