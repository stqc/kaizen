import React from "react";
import "./nav.css";
import Dash from "./Kaizen Dashboard.png";
import Kaizen from "./kaizen emblem.png";

const Nav = ()=>{
    return(
    <div className="nav">
        <div id="logo" style={{height:"40px", width:"40px"}}>
            <img src={Kaizen} style={{width:"100%", height:"100%"}}/>
        </div>
        <div className="image-logo">
            <img src={Dash} alt="logo"/>
        </div>
        <div className="buy-btn" id ="b"onClick={()=>{
            window.open("https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617")
        }}>
            <div style={{padding:"10px"}}>BUY $KZN</div>
        </div>
    </div>)
}

export default Nav;