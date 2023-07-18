import React from "react";
import Copy from "./copy.png";
import Globe from "./globe.png";
import Twitter from "./twtter.png";
import Tele from "./tele.png";
import Med from "./med.png";
import ETH from "./etherscan-logo-circle-light.png";

const Bar = ()=>{

    function copyToClip(){
        navigator.clipboard.writeText("0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617");
        alert("Contract Address Copied to Clipboard")
    }

    return(
        <div className="bar">
            
            <div style={{display:"flex", alignItems:"center", marginLeft:"auto"}}>
                <p id="ca">0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617</p>
                <div onClick={()=>{
                    copyToClip();
                }} style={{cursor:"pointer"}}>
                    <img src={Copy}/>
                </div>
            </div>
        </div>
    )

}
export default Bar;