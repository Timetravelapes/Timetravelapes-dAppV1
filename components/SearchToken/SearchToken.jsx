import React, { useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);

  const coin = [
    {
      img: images.avalanche,
      name: "AVAX",
    },
    {
      img: images.tta,
      name: "TTA",
    },
    {
      img: images.btc,
      name: "BTC",
    },
    {
      img: images.bnb,
      name: "BNB",
    },
    {
      img: images.eth,
      name: "ETH",
    },
    {
      img: images.usdt,
      name: "USDT",
    },
  ];
  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            alt="close"
            width={30}
            height={30}
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.SearchToken_box_search_img}>
            <Image src={images.search} alt="img" width={20} height={20} />
          </div>
          <input type="text" placeholder="Search name or past the address" />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {coin.map((el, i) => (
            <span key={i + 1} className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (setActive(i + 1), tokens({ name: el.name, image: el.img })
              )}
            >
              <Image
                src={el.img || images.tta}
                alt="image"
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;