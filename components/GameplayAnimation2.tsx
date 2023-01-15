import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../styles/Gameplay.module.css";


const Pill1 = (
    <div className={styles.slide}>
      <img src="./rose.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill2 = (
    <div className={styles.slide}>
      <img src="./mint.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill3 = (
    <div className={styles.slide}>
      <img src="./cyan.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill4 = (
    <div className={styles.slide}>
      <img src="./lemon.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill5 = (
    <div className={styles.slide}>
      <img src="./RED.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill6 = (
    <div className={styles.slide}>
      <img src="./blue.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill7 = (
    <div className={styles.slide}>
      <img src="./gold.webp" height="48" width="48" alt="TTA" />
    </div>
  );
  const Pill8 = (
    <div className={styles.slide}>
      <img src="./green.webp" height="48" width="48" alt="TTA" />
    </div>
  );

type Props = {
  pickaxe: NFT | undefined;
};

export default function GameplayAnimation({ pickaxe }: Props) {
  if (!pickaxe) {
    return <div style={{ marginLeft: 8, color: "#ff45e3", fontSize: 20, marginTop: 20, marginRight: 8  }}>I need Energy!</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {Pill1}
        {Pill2}
        {Pill3}
        {Pill4}
        {Pill5}
        {Pill6}
        {Pill7}
        {Pill8}
        {Pill1}
        {Pill2}
        {Pill3}
        {Pill4}
        {Pill5}
        {Pill6}
        {Pill7}
        {Pill8}
      </div>
    </div>
  );
}
