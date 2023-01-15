import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  useAddress,  } from "@thirdweb-dev/react";

//INTERNAL IMPORT
import Style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenDate, setopenTokenBox }) => {
  const address = useAddress();
  
  return (
    <div className={Style.TokenList}>
      <p className={Style.TokenList_close}
        onClick={() => setopenTokenBox(false)}
        >
          <Image src={images.close} alt="close" width={20} height={20} />
        </p>
        
        
        <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/mint" passHref role="button">
          <p >
              Mint NFT
            </p>
          </Link>
          </div>
          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/claimtta" passHref role="button" >
          
          <p >
              Claim TTA
            </p>
          </Link>
          </div>
          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/stake" passHref role="button">
          <p >
          Stake NFT
            </p>
          </Link>
          </div>
          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/market" passHref role="button">
          <p >
              Marketplace
            </p>
          </Link>
          </div>
          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="/game" passHref role="button">
          <p >
              Play to Mine
            </p>
          </Link>
          </div>
          <div className={Style.mainButton3} onClick={() => setopenTokenBox(false)}>
        <Link href="https://app.timetravelapes.com/stakes/stake-your-tta-token" passHref role="button">
          <p >
              Stake TTA
            </p>
          </Link>
          </div>
          </div>
          
       
          
              
             
            
         
  );  
};

export default TokenList;