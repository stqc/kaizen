import React from "react";
import "./nav.css";
import Dash from "./Kaizen Dashboard.png";

const Nav = ()=>{
    return(
    <div className="nav">
        <div className="image-logo">
            <img src={Dash} alt="logo"/>
        </div>
        <div className="buy-btn" onClick={()=>{
            window.open("https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617")
        }}>
            BUY $KZN
        </div>
    </div>)
}

export default Nav;