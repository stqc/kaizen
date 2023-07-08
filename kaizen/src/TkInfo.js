import React from "react";
import "./Info.css";
import InfoImg from "./Token Information.png";
import Price from "./price.png";

export var infoUpdater;

const Info = ()=>{
    const [info,updateInfo] = React.useState({lp:null,mc:null,burn:null,price:null});
    infoUpdater=updateInfo;
    return (
        <div className="info">
            <div className="token-info">
                <div>
                    <img src={InfoImg}/>
                </div>
                <table>
                    <tr>
                        <th>Total Liquidity:</th>
                        <td>$ {info.lp}</td>
                    </tr>
                    <tr>
                        <th>Market Cap:</th>
                        <td>$ {info.mc}</td>
                    </tr>
                    <tr>
                        <th>Total Supply:</th>
                        <td>{(100000000).toLocaleString()} KZN</td>
                    </tr>
                    <tr>
                        <th>Tax:</th>
                        <td>3%</td>
                    </tr>
                    <tr>
                        <th>Burn:</th>
                        <td>{info.burn} KZN</td>
                    </tr>
                </table>

            </div>
            <div className="price">
                <div>
                    <img src={Price} />
                </div>
                <div className="price-val">
                    <p>$ {info.price}</p>
                </div>
            </div>
        </div>
    );
}

export default Info;