import Web3 from "web3";
import { infoUpdater } from "./TkInfo";
import { taxUpdate } from "./tax";
import { walletInfo } from "./WalletInfo";
import { createChart } from "lightweight-charts";
import { loading } from "./TkInfo";

var abi = require('./contract.json');


var web3 = window.ethereum?new Web3(window.ethereum): new Web3('https://eth.llamarpc.com');

var contract = new web3.eth.Contract(abi,'0x3e9fbb8c168dF1f6cfAA372e5bF7cE5F162A7617');
var weth = new web3.eth.Contract(abi,'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
var EthPerToken;
var USD;
var totalFees;
const startingBlock = 17637768;
const poolABI = require('./pool.json');
var data=[];
var chart;
var areaSeries;

var tkInfo = async()=>{
    const pool = new web3.eth.Contract(poolABI,'0x2E953FA2A6dB7b958C841bf9d1C50E0ec8166eaA');
    var lp=await weth.methods.balanceOf('0x2E953FA2A6dB7b958C841bf9d1C50E0ec8166eaA').call();
    lp=web3.utils.toNumber(lp);
    lp= (Number(lp)/1e18).toLocaleString();
    var baltoken = await contract.methods.balanceOf('0x2E953FA2A6dB7b958C841bf9d1C50E0ec8166eaA').call();
    baltoken= web3.utils.toNumber(baltoken);
    baltoken= Number(baltoken)/1e18;
    EthPerToken = lp/baltoken;
    console.log(EthPerToken);
    var mc = EthPerToken*100000000;
    var burn = await contract.methods.balanceOf("0xE2fE530C047f2d85298b07D9333C05737f1435fB").call();
    burn = web3.utils.toNumber(burn);   
    burn = (Number(burn)/1e18);
    await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD').then(async (resp)=>{
         USD =await resp.json();
         EthPerToken*=USD.USD;
    })
    infoUpdater({
        lp:(lp*USD.USD).toLocaleString(),mc:(mc*USD.USD).toLocaleString(),burn:(burn).toLocaleString(),price:EthPerToken.toLocaleString()
    })
    var opVal = await contract.methods.balanceOf('0x76a9f0344e863479fBec931AA4d887D05147cCca').call();
    opVal=web3.utils.toNumber(opVal);
    opVal = (Number(opVal)/1e18)*EthPerToken;
    var ethBalance = Number(await web3.eth.getBalance("0x76a9f0344e863479fBec931AA4d887D05147cCca"))/1e18;
    ethBalance*=USD.USD;
    opVal+=ethBalance;
    totalFees = await contract.methods.totalFees().call();
    totalFees=web3.utils.toNumber(totalFees);
    totalFees = Number(totalFees)/1e18;
    totalFees*=(2/3);
    var refVal = totalFees*EthPerToken;
    taxUpdate({
        op:opVal.toLocaleString(),
        ref:totalFees.toLocaleString(),
        refVal:refVal.toLocaleString()
    })    
    
    data=[];
    var latestBlock = Number(await web3.eth.getBlockNumber());
    console.log(startingBlock-latestBlock)
    for( let i=startingBlock; i<=latestBlock;i+=400){
        var price =await pool.methods.getReserves().call(undefined,i,undefined);
        data.push({time:(Date.now()/1000),value:Number(price[1])/Number(price[0])*USD.USD});
    }
    create_Chart();
    areaSeries.setData(data);
    loading(false);
    
}

tkInfo();

export const connect =async(address)=>{

    var accountBal = await contract.methods.balanceOf(address).call();
    accountBal=web3.utils.toNumber(accountBal);
    var val = (Number(accountBal)/1e18)*EthPerToken;
    var reflections = await contract.methods.reflectionFromToken(accountBal,true).call();
    reflections = totalFees*(Number(accountBal)/1e18/100_000_000);
    console.log(reflections)
    walletInfo({
        bal:(Number(accountBal)/1e18).toLocaleString(),
        val:val.toLocaleString(),
        earned:reflections.toLocaleString(),
    })


}

var darkTheme = {
	chart: {
		layout: {
			background: {
				type: 'solid',
				color: 'transparent',
			},
			lineColor: '#2B2B43',
			textColor: '#D9D9D9',
		},
		watermark: {
			color: 'rgba(0, 0, 0, 0)',
		},
		crosshair: {
			color: '#758696',
		},
		grid: {
			vertLines: {
				color: 'transparent',
			},
			horzLines: {
				color: 'transparent',
			},
		},
	},
	series: {
			topColor: '#f3e5a642',
			bottomColor: '#e5d79b',
			lineColor: '#A08440',
	},
};

const create_Chart=()=>{
    var chartElement = document.getElementById("chart");
    chart =createChart(chartElement,{height:chartElement.offsetHeight, width:chartElement.offsetWidth,rightPriceScale: {
		borderVisible: false,
        visible:false
	},timeScale:{visible:false}});
    areaSeries = chart.addAreaSeries({
        topColor: 'rgba(33, 150, 243, 0.56)',
        bottomColor: 'rgba(33, 150, 243, 0.04)',
        lineColor: 'rgba(33, 150, 243, 1)',
        lineWidth: 2,
      });

    chart.applyOptions(darkTheme.chart);
    areaSeries.applyOptions(darkTheme.series);
}