"use client";

import {
  CrossmintProvider,
  CrossmintAuthProvider,
} from "@crossmint/client-sdk-react-ui";

if (!process.env.NEXT_PUBLIC_CROSSMINT_API_KEY) {
  throw new Error("NEXT_PUBLIC_CROSSMINT_API_KEY is not set");
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CrossmintProvider apiKey={process.env.NEXT_PUBLIC_CROSSMINT_API_KEY || ""}>
      <CrossmintAuthProvider
        authModalTitle={"todo: update"}
        embeddedWallets={{
          createOnLogin: "all-users",
          type: "solana-smart-wallet",
          showPasskeyHelpers: true,
        }}
        loginMethods={["web3:solana-only"]}
      >
        {children}
      </CrossmintAuthProvider>
    </CrossmintProvider>
  );
}
