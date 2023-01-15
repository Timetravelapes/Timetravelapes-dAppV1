import React from "react";
import {
  useAddress,
  useClaimNFT,
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home2.module.css";

export default function MintContainer() {
  const address = useAddress();

  return (
    <div className={styles.collectionContainer}>
      <h1 style={{marginBottom: 15 , color: "#ff45e3"  }}>Timetravelapes Mining Game</h1>

      <p style={{marginBottom: 25   }}>Mint your Character NFT to start playing!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <img src="./machine3.gif" style={{ height: 200 }} />
      </div>
      

      <div className={styles.smallMargin}>
        <Web3Button
          colorMode="light" accentColor="#ca33fc"
          contractAddress={CHARACTER_EDITION_ADDRESS}
          action={(contract) => contract.erc1155.claim(0, 1)}
        >
          Mint
        </Web3Button>
      </div>
    </div>
  );
}
