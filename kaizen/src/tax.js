import React from "react";
import "./Info.css";
import Templle from "./temple.png";
import Chain from "./kaizencoingrain 2.png";

export var taxUpdate;
const Tax = ()=>{
    const [info,updateInfo] = React.useState({op:null,ref:null,refVal:null});
    taxUpdate=updateInfo;
    return (
        <div className="info" style={{marginTop:"2%"}}>
           <div className="temple">
                <div>
                    <img src={Templle}  style={{width:"100%"}}/>
                </div>
                <div style={{margin:"2%"}}>
                    <p>Pagoda Value:</p>
                    <p className="p-val">${info.op}</p>
                </div>
           </div>
           <div className="temple">
                <div>
                    <img src={Chain} style={{width:"100%"}}/>
                </div>
                <div style={{margin:"2%"}}>
                    <p>Reflections Value:</p>
                    <p className="p-val">$ {info.refVal}</p>
                    <p>Reflections To Date:</p>
                    <p className="p-val">{info.ref} KZN</p>
                </div>
           </div>
        </div>
    );
}

export default Tax;