import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import {
  ConnectWallet,
} from "@thirdweb-dev/react";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  
 
  
  

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/" passHref role="button">
            <img
              src={`./Homeicon.png`}
              alt="Logo"
              width={40}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      
      <div className={styles.right}>
      <ConnectWallet
  accentColor="#ca33fc"
 
/>
      </div>
      
    </div>
    
  );
}


