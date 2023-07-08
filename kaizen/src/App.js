import './App.css';
import Side from './side';
import Nav from './Nav';
import Info from './TkInfo';
import Tax from './tax';
import Bar from './bar';
import Wallet from './WalletInfo';
import "./connection";

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
    </div>
  );
}

export default App;
