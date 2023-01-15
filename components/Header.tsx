import {  useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";


export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
 
  
  

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`./homeicon.png`}
              alt="Logo"
              width={40}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      
      <div className={styles.right}>
        {address ? (
          <>
          
          <a
              className={styles.mainButton3}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "#ff00f6" }}>|</p>
            <p style={{ marginLeft: 8, marginRight: 8, color: "#ff00f6" }}>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
            <img  src="./wallet1.png" height="38" width="38" alt="TTA" />
          </>
        ) : (
          <a
            className={styles.mainButton3}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
      
    </div>
    
  );
}


