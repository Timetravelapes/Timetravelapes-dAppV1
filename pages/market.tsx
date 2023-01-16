import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
  useAddress,
  useMetamask,
  useDisconnect,
  
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";

const Market: NextPage = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const { contract: marketplace } = useContract(
    "0x39A0F423413D678862A42d5D9276d5BdA38154Ce", // Your marketplace contract address here
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);


    const address = useAddress();
const connectWithMetamask = useMetamask();
const disconnectWallet = useDisconnect();
  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Top Section */}
        <h1 className={styles.h1}>Timetravelapes NFT Marketplace</h1>
        

        <hr className={styles.divider} />

        <div style={{ marginTop: 32, marginBottom: 32, marginLeft: 200, }}>
          <Link href="/create">
            <a className={styles.mainButton} style={{ textDecoration: "none" }}>
              Create A Listing
            </a>
          </Link>
        </div>

        <div style={{ marginTop: -80, marginBottom:32, marginRight: 200,  }}>
        {address ? (
          <>
            <a
              className={styles.mainButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 250, marginRight: 8, marginBottom: 70, marginTop: -80, color: "#ffffff", }}>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
          
        )}
      </div>
        

        <div className="main">
          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div>Loading listings...</div>
            ) : (
              // Otherwise, show the listings
              <div className={styles.listingGrid}>
                {listings?.map((listing) => (
                  <div
                    key={listing.id}
                    className={styles.listingShortView}
                    onClick={() => router.push(`/listing/${listing.id}`)}
                  >
                    <MediaRenderer
                      src={listing.asset.image}
                      style={{
                        borderRadius: 16,
                        // Fit the image to the container
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <h2 className={styles.nameContainer}>
                      <Link href={`/listing/${listing.id}`}>
                        <a className={styles.name}>{listing.asset.name}</a>
                      </Link>
                    </h2>

                    <p>
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Market;
