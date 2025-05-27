"use client";

import Image from "next/image";
import { CrossmintEmbeddedCheckout } from "@crossmint/client-sdk-react-ui";
import { CollectionPreview } from "@/components/collection-preview";

const collectionId = process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID ?? "";
if (!collectionId) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_COLLECTION_ID is not set");
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <main className="flex flex-col items-center sm:items-start">
        <div className="w-full flex items-center justify-center py-8 md:pt-4">
          <div className="bg-white rounded-2xl shadow-lg border max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
            {/* Left: Collection info */}
            <div className="flex flex-col items-center justify-center p-10">
              <CollectionPreview
                title="Sonic Ledger Pass"
                price="$2.00"
                imageUrl="/ledger-pass.svg"
                imageSize={360}
                imageAlt="Sonic Ledger Pass"
                showCard={true}
              />
            </div>
            {/* Right: Checkout */}
            <div className="flex flex-col justify-center p-8">
              <CrossmintEmbeddedCheckout
                appearance={{
                  rules: {
                    PrimaryButton: {
                      colors: {
                        background: "#000000", // Primary button background color
                      },
                      hover: {
                        colors: {
                          background: "#3C4043", // Primary button hover background color
                        },
                      },
                    },
                  },
                }}
                lineItems={{
                  collectionLocator: `crossmint:${collectionId}`, // Collection identifier: crossmint:<YOUR_COLLECTION_ID>[:TEMPLATE_ID] or <blockchain>:<contract-address>
                  callData: {
                    totalPrice: "2", // Total price in your contract's currency (e.g., 0.001 ETH, 2 USDC)
                    // Arguments for your contract's mint function (names must match exactly, don't pass recipient)
                  },
                }}
                payment={{
                  crypto: {
                    enabled: true, // Enable crypto payments
                    defaultChain: "base-sepolia", // Default chain for crypto payments
                    defaultCurrency: "usdc", // Default currency for crypto payments
                  },
                  fiat: {
                    enabled: true, // Enable fiat payments
                    defaultCurrency: "usd", // Default currency for fiat payments
                    allowedMethods: {
                      googlePay: true, // Enable Google Pay
                      applePay: true, // Enable Apple Pay
                      card: true, // Enable card payments
                    },
                  },
                  receiptEmail: "receipt@crossmint.com", // Optional: Set receipt email
                }}
                recipient={{
                  email: "buyer@crossmint.com", // NFTs will be delivered to this email's wallet
                  // Or use walletAddress: "0x..." for direct delivery
                }}
                locale="en-US" // Set interface language
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Crossmint/embedded-checkout-quickstart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            View code
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/crossmint"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            See all quickstarts
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://crossmint.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to crossmint.com →
          </a>
        </div>
        <div className="flex">
          <Image
            src="/crossmint-leaf.svg"
            alt="Powered by Crossmint"
            priority
            width={152}
            height={100}
          />
        </div>
      </footer>
    </div>
  );
}
