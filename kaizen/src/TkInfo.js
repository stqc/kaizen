import React from "react";
import "./Info.css";
import InfoImg from "./Token Information.png";
import Price from "./price.png";

export var infoUpdater;
export var loading;
const Info = ()=>{
    const [info,updateInfo] = React.useState({lp:null,mc:null,burn:null,price:null});
    const [isLoading,udpateLoading] = React.useState(true);
    infoUpdater=updateInfo;
    loading=udpateLoading;
    return (
        <div className="info">
            <div className="token-info">
                <div style={{height:"100%"}}>
                    <div>
                        <img src={InfoImg}/>
                    </div>
                    <table>
                        <tr>
                            <th>Total Liquidity:</th>
                            <td> ${info.lp}</td>
                        </tr>
                        <tr>
                            <th>Market Cap:</th>
                            <td> ${info.mc}</td>
                        </tr>
                        <tr>
                            <th>Total Supply:</th>
                            <td> {(100000000).toLocaleString()} KZN</td>
                        </tr>
                        <tr>
                            <th>Buy Tax/Sell Tax:</th>
                            <td> {info.buyTax}%/{info.sellTax}%</td>
                        </tr>
                        <tr>
                            <th>Tokens Locked:</th>
                            <td> {info.burn} KZN</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="price">
                <div>
                    <img src={Price} />
                </div>
                <div className="price-val">
                    <p style={{margin:"0"}}>$ {info.price} <span style={{color:"green", fontWeight:900,fontSize:"1rem",WebkitTextFillColor: info.change>=0?"limegreen":"red"}}>{info.change>=0?"+":"" }{info.change+"%"}</span></p>
                    <div id="chart" style={{MaxWidth:"100%", height:"200px"}}>
                            <p style={{display:isLoading?"initial":"none"}}>Generating Chart..</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;