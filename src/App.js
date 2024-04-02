import logo from './assets/Cloudman Capital Logo Transparent.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <html data-theme="cupcake"></html>
      <header className="App-header">
        <img src={logo} alt="logo" 
        style={{padding: '60px'}}/>
        <button class="sign-out-button">Sign Out</button>
      </header>
      <div class="flex flex-row pt-6">
        <div class="flex-none basis-2/4 pt-0">
          <h1 style={{fontSize: "2rem", fontWeight: "bold"}}>Aditya Behera </h1>
          <h6 style={{fontSize: "3rem", fontWeight: "400"}}>$8.20</h6>
        </div>
        <div class="flex-none basis-1/4">
            <div class="rounded-rectangle">
                +$3.08 (+48.2%) today
            </div>
        </div>
        <div class="flex-none basis-1/4">
            
            <ul class="menu bg-base-200 w-56 rounded-box">
              <h6 style={{fontSize: "1.5rem", fontWeight: "600", paddingTop: "25px"}}>Your Account</h6>
              <h6 style={{fontSize: "0.8rem", fontWeight: "600", paddingTop: "30px"}}>Amount Invested</h6>
              <h6 style={{fontSize: "2rem", fontWeight: "400", paddingTop: "5px"}}>$5.00</h6>

              <h6 style={{fontSize: "0.8rem", fontWeight: "600", paddingTop: "40px"}}>Earnings</h6>
              <h6 style={{fontSize: "2rem", fontWeight: "400", paddingTop: "5px"}}>$3.03</h6>

              <h6 style={{fontSize: "0.8rem", fontWeight: "600", paddingTop: "40px"}}>Managing Fee</h6>
              <h6 style={{fontSize: "2rem", fontWeight: "400", paddingTop: "5px", paddingBottom: "60px"}}>$0.21</h6>
            </ul>
        </div>
      </div>
    </div>
    
  );
}

export default App;
