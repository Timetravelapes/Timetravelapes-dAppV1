import React from "react";
import {
  ThirdwebNftMedia,
  useAddress,
  useContractRead,
  useMetadata,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { SmartContract, Token } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

import styles from "../styles/Home2.module.css";
import ApproxRewards from "./ApproxRewards";
import { MINING_CONTRACT_ADDRESS } from "../const/contractAddresses";


type Props = {
  miningContract: SmartContract<any>;
  tokenContract: Token;
};

/**
 * This component shows the:
 * - Metadata of the token itself (mainly care about image)
 * - The amount this wallet holds of this wallet
 * - The amount this user can claim from the mining contract
 */
export default function Rewards({ miningContract, tokenContract }: Props) {
  const address = useAddress();

  const { data: tokenMetadata } = useMetadata(tokenContract);
  const { data: currentBalance } = useTokenBalance(tokenContract, address);
  const { data: unclaimedAmount } = useContractRead(
    miningContract,
    "calculateRewards",
    address
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p>
        Your <b>TTA Token</b>
      </p>

      <p className={styles.noGapBottom}>
        Balance: <b>{currentBalance?.displayValue}</b>
      </p>

      {tokenMetadata && (
        <ThirdwebNftMedia
          // @ts-ignore
          metadata={tokenMetadata}
          height={"48"}
        />
      )}
      
      <p style={{color:"#27ac12"}} >
        Unclaimed:{" "}
        <b>{unclaimedAmount && ethers.utils.formatUnits(unclaimedAmount)}</b>
      </p>

      <p style={{color:"#30c218"}} >

      <ApproxRewards miningContract={miningContract} />

      </p>

      <div className={styles.smallMargin}>
        <Web3Button colorMode="light" accentColor="#a955f794"
          contractAddress={MINING_CONTRACT_ADDRESS}
          action={(contract) => contract.call("claim")}
          
        >
          Claim
        </Web3Button>
        
      </div>
      <Web3Button colorMode="light" accentColor="#a955f794"
          contractAddress={MINING_CONTRACT_ADDRESS}
          action={(contract) => contract.call("withdraw")}
        >
          Stop Game
        </Web3Button>
    </div>
  );
}
