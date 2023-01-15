import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import Header1 from "../components/Header";
import Header from "../components/NavBar/NavBar";
import { FlairProvider } from 'flair-sdk';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Avalanche;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Timetravelapes dApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Use Our Marketplace List Your NFTs For Sale, Accept Bids, and Buy NFTs"
           
        />
        <meta
          name="keywords"
          content="Timetravelapes, dApp, Marketplace, NFT Marketplace, NFT Auction, OpenSea, NFT, Time travel"
        />
        
      </Head>
      <Header1 />
      <Header />
      <FlairProvider></FlairProvider>
      <React.StrictMode></React.StrictMode>
      <Component {...pageProps} />
      
    </ThirdwebProvider>
  );
}

export default MyApp;
