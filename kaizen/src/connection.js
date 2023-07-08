import Web3 from "web3";
import { infoUpdater } from "./TkInfo";
import { taxUpdate } from "./tax";
import { walletInfo } from "./WalletInfo";

var abi = require('./contract.json');


var web3 = window.ethereum?new Web3(window.ethereum): new Web3('https://eth.llamarpc.com');

var contract = new web3.eth.Contract(abi,'0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617');
var weth = new web3.eth.Contract(abi,'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
var EthPerToken;
var USD;
var tkInfo = async()=>{

    var lp=await weth.methods.balanceOf('0x2E953FA2A6dB7b958C841bf9d1C50E0ec8166eaA').call();
    lp= (Number(lp)/1e18).toLocaleString();
    var baltoken = await contract.methods.balanceOf('0x2E953FA2A6dB7b958C841bf9d1C50E0ec8166eaA').call();
    baltoken= (Number(baltoken)/1e18);
    EthPerToken = lp/baltoken;
    console.log(EthPerToken);
    var mc = EthPerToken*100000000;
    var burn = await contract.methods.balanceOf("0x0000000000000000000000000000000000000000").call();
    burn = (Number(burn)/1e18);
    await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').then(async (resp)=>{
         USD =await resp.json();
         EthPerToken*=USD.USD;
    })
    infoUpdater({
        lp:(lp*USD.USD).toLocaleString(),mc:(mc*USD.USD).toLocaleString(),burn:(burn).toLocaleString(),price:EthPerToken.toLocaleString()
    })
    var opVal = await contract.methods.balanceOf('0x76a9f0344e863479fBec931AA4d887D05147cCca').call();
    opVal = (Number(opVal)/1e18)*EthPerToken*USD.USD;
    var totalFees = await contract.methods.totalFees().call();
    totalFees = Number(totalFees)/1e18;
    totalFees*=(2/3);
    var refVal = totalFees*EthPerToken*USD.USD;
    taxUpdate({
        op:opVal.toLocaleString(),
        ref:totalFees.toLocaleString(),
        refVal:refVal.toLocaleString()
    })    

}

tkInfo();

export const connect =async()=>{


    const sub = web3.eth.subscribe("newBlockHeaders",async(err,resp)=>{
        tkInfo();
        console.log(resp);
        console.log(err);
    })

    await window.ethereum.request({method:"eth_requestAccounts"});
    var connectedAccounts =await web3.eth.getAccounts();

    var accountBal = await contract.methods.balanceOf(connectedAccounts[0]).call();
    var val = (Number(accountBal)/1e18)*EthPerToken*USD.USD;
    var reflections = Number(await contract.methods.reflectionFromToken(accountBal,true).call())/1e18;
    console.log("success");
    walletInfo({
        bal:accountBal.toLocaleString(),
        val:val.toLocaleString(),
        earned:reflections.toLocaleString(),
        add:connectedAccounts[0].slice(0,7)+"..."
    })


}