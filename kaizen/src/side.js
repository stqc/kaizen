import React from "react";
import Kaizen from "./kaizen emblem.png";
import Gate from "./gate.png";
import Globe from "./globe.png";
import Twitter from "./twtter.png";
import Tele from "./tele.png";
import Med from "./med.png";

const Side = ()=>{
    return(
    <div className="side-menu">
        <div className="icon-logo">
            <div>
                <img src={Kaizen} alt="logo" />
            </div>
        </div>
        <div className="icon" style={{background:"#202020"}}>
            <div>
                <img src={Gate} alt="logo"/>
            </div>
        </div>
        <div className="icon" onClick={()=>{
            window.open("https://www.kaizencorp.finance/#kaizen-corp");
        }}>
            <div>
                <img src={Globe} alt="logo"/>
            </div>
        </div>
        <div className="icon" onClick={()=>{
            window.open("https://twitter.com/KAIZENcorp_fi");
        }}>
            <div>
                <img src={Twitter} alt="logo"/>
            </div>
        </div>
        <div className="icon" onClick={()=>{
            window.open("https://t.me/KaizenCorpFinance");
        }}>
            <div>
                <img src={Tele} alt="logo"/>
            </div>
        </div>
        <div className="icon" onClick={()=>{
            window.open("https://medium.com/@kaizen_corp");
        }}>
            <div>
                <img src={Med} alt="logo"/>
            </div>
        </div>
    </div>);
}

export default Side;