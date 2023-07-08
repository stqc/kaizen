import React from "react";
import inf  from "./info.png";
import {connect} from "./connection";

export var walletInfo;

const Wallet = ()=>{

    const [info,updateInfo] = React.useState({});
    walletInfo = updateInfo;

    return (
        <div className="wallet">
            <div style={{marginTop:"2%",marginBottom:'20%'}}>
                <img src={inf}/>
            </div>
            <div>
                <p>Total KZN</p>
                <p>{info.bal?info.bal:"-"}</p>
            </div>
            <div>
                <p>Value of KZN</p>
                <p>{info.val?info.val:"-"}</p>
            </div>
            <div>
                <p>Reflections Earned</p>
                <p>{info.earned?info.earned:"-"}</p>
            </div>
            <div className="buy-btn" style={{marginTop:"20%"}} onClick={()=>{
                connect();
            }}>
                {info.add?info.add:"Connect"}
            </div>
        </div>
    )

}

export default Wallet;