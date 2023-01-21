import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home1.module.css";
import React, {useState, useContext, useEffect } from "react";
import Particles from '../components/Particles';


//INTERN IMPORT
import { HeroSection } from "../components/index";


const Home: NextPage = () => {
  const router = useRouter();
  const Banner9 = (
    <div className={styles.slide} role="button"
    onClick={() => router.push(`https://coinbrain.com/coins/aval-0xa98ffdbaee3f2b3bfcb3dbfd879a34e6af0ba80e`)} >
      <img src="./coinbrain.png" height="38" width="258" alt="coinbrain" />
    </div>
  );
  const Banner6 = (
    <div className={styles.slide1} role="button"
    onClick={() => router.push(`https://www.coinbase.com/de/wallet`)}>
      <img src="./coinbase.png" height="48" width="208" alt="coinbase" />
    </div>
  ); 
  const Banner2 = (
    <div className={styles.slide2} role="button"
    onClick={() => router.push(`https://www.avax.network/`)}>
      <img src="./avalanche.png" height="38" width="208" alt="avalanche" />
    </div>
  );
  const Banner3 = (
    <div className={styles.slide3} role="button"
    onClick={() => router.push(`https://0xmacro.com/`)}>
      <img src="./oxmacro.png" height="48" width="208" alt="oxmarco" />
    </div>
  );
  const Banner4 = (
    <div className={styles.slide4} role="button"
    onClick={() => router.push(`https://metamask.io/`)}>
      <img src="./metamask.png" height="35" width="208" alt="metamask" />
    </div>
  );
  const Banner5 = (
    <div className={styles.slide5} role="button"
    onClick={() => router.push(`https://walletconnect.com/`)}>
      <img src="./walletconnect.png" height="30" width="208" alt="walletconnect" />
    </div>
  );
  const Banner1 = (
    <div className={styles.slide6} role="button"
    onClick={() => router.push(`https://opensea.io/timetravelapes`)}>
      <img src="./OpenSea.png" height="38" width="188" alt="OpenSea" />
    </div>
  ); 
  const Banner7 = (
    <div className={styles.slide7} role="button"
    onClick={() => router.push(`https://traderjoexyz.com/avalanche/pool/v1/0xa98ffdbaee3f2b3bfcb3dbfd879a34e6af0ba80e/AVAX`)}>
      <img src="./joetrade.png" height="38" width="250" alt="JoeTrade" />
    </div>
  ); 
  const Banner8 = (
    <div className={styles.slide8} role="button"
    onClick={() => router.push(`https://snowtrace.io/token/0xa98FfDBAEE3F2b3BFCb3dbFd879a34e6aF0ba80e#code`)}>
      <img src="./snowtrace.png" height="35" width="230" alt="Snowtrace" />
    </div>
  ); 
  const Banner = (
    <div className={styles.slide9} role="button"
    onClick={() => router.push(`https://timetravelapes.com`)}>
      <img src="./timetravelapes.png" height="35" width="230" alt="Snowtrace" />
    </div>
  ); 
  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>WELCOME TO TIMETRAVELAPES DAPP</h1>
      
      <div className={styles.swapbox}>
      <HeroSection accounts="hey" tokenData="DATA" />
    </div>
    <Particles id="tsparticles" />
    
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        {Banner}
        {Banner1}
        {Banner2}
        {Banner3}
        {Banner4}
        {Banner5}
        {Banner6}
        {Banner7}
        {Banner8}
        {Banner9}
        {Banner}
      </div>
    </div>
    </div >
    
    
     
    
  );
};

export default Home;
