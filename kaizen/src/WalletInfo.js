import React from "react";
import inf  from "./info.png";
import {connect} from "./connection";

export var walletInfo;

const Wallet = ()=>{

    const [info,updateInfo] = React.useState({});
    walletInfo = updateInfo;
    const addRef = React.createRef();

    return (
        <div className="wallet">
            <div style={{marginTop:"2%",marginBottom:'10%', alignSelf:'center'}}>
                <img src={inf}/>
            </div>
            <div>
                <p>Total KZN</p>
                <p>{info.bal?info.bal+" KZN":"-"}</p>
            </div>
            <div>
                <p>Value of KZN</p>
                <p>{info.val?"$"+info.val:"-"}</p>
            </div>
            <div>
                <p>Reflections Earned</p>
                <p>{info.earned?info.earned+" KZN":"-"}</p>
            </div>
            <div style={{width:"100%"}}>
            <input placeholder="Enter Wallet Address" style={{alignSelf:"center", width:"-webkit-fill-available", height:"30px", borderRadius:"23px"}} ref={addRef}/>
            <div className="buy-btn" style={{ alignSelf:"center",width:"100%", marginTop:"4%"}} onClick={()=>{
                connect(addRef.current.value);
            }}>
                 <div style={{padding:"10px"}}>Search</div>
            </div>
            </div>
        </div>
    )

}

export default Wallet;