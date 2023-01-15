import React, { useState, useEffect, useContext,  } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//IMPORT INTERNAL
import Style from './NavBar.module.css';
import images from '../../assets';
import {TokenList} from '../index';



const NavBar = () => {
  
  //USESTATE
  const [openTokenBox, setopenTokenBox] = useState(false);
  const menuItems = [
    {
      name: "Docs",
      link: "https://docs.timetravelapes.com/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    },
  ];

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
        <div className={Style.NavBar_box_left_menu}>
            
          </div>
        </div>
        {/* //Middle SECTION */}                
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.link}` }}>
                <p className={Style.NavBar_box_middle_search_img}>{el.name}</p>
              </Link>
            ))}
            </div>
                       
          </div>
        </div>
        {/* //RIGHT SECTION */}
        
        <div className={Style.NavBar_box_right}>
          <div >
          
          <button onClick={() => setopenTokenBox(true)}  ><Image src={images.menu}  height={30} width={30} /></button>
          
          </div>
          
              
            
              
          
          
          
        </div>
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setopenTokenBox={setopenTokenBox} />
      )}
    </div>
  );  
};

export default NavBar;