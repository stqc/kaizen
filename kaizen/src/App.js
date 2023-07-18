import './App.css';
import Side from './side';
import Nav from './Nav';
import Info from './TkInfo';
import Tax from './tax';
import Bar from './bar';
import Wallet from './WalletInfo';
import "./connection";
import Globe from "./globe.png";
import Twitter from "./twtter.png";
import Tele from "./tele.png";
import Med from "./med.png";
import ETH from "./etherscan-logo-circle-light.png";

function App() {
  return (
    <div className="App">
     <Side/>
     <Nav/>
     <div className='main-content'>
        <div>
          <Info/>
          <Bar/>
          <Tax />
        </div>
        <Wallet/>
     </div>
     <div className='footer'>
       <div className='f-logo'>
         <img src={Globe}/>
       </div>
       <div className='f-logo'>
         <img src={Twitter}/>
       </div>
       <div className='f-logo'>
         <img src={Tele}/>
       </div>
       <div className='f-logo'>
         <img src={Med} style={{width:"100%", height:"50%", paddingTop:"7.5px"}}/>
       </div>
       <div className='f-logo'>
         <img src={ETH}/>
       </div>
     </div>
    </div>
  );
}

export default App;
