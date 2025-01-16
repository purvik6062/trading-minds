//INTERNAL IMPORT
"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../wagmi";
import "@rainbow-me/rainbowkit/styles.css";

import "../styles/globals.css";
//INTERNAL IMPORT
import { PROVIDER } from "../context/context";
// import Providers from "../Providers";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={new QueryClient()}>
          <RainbowKitProvider>
            <PROVIDER>
              <Component {...pageProps} />
            </PROVIDER>
            <Toaster />

            <script type="text/javascript" src="js/jquery.js?ver=1.0.0"></script>
            <script type="text/javascript" src="js/plugins.js?ver=1.0.0"></script>
            <script type="text/javascript" src="js/init.js?ver=1.0.0"></script>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
