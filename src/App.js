import logo from './assets/Cloudman Capital Logo Transparent.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" 
        style={{ width: '12%', height: '40%', padding: '60px'}}/>
        <button class="sign-out-button">Sign Out</button>
      </header>
      <div> {/* Main body */}
      <div class="horizontal-div">
        <div class="left-align-container"> {/*Left side (graph)*/}
            <div class="horizontal-div">
              <div>
                <h1 style={{ fontSize: "2rem" }}>Aditya Behera</h1>
              </div>
              <div class="rounded-rectangle">
                +$3.08 (+48.2%) today
              </div>
            </div>
        </div>
        </div> {/*Right side (account info) */}
        <div> 
        </div>
      </div>
    </div>
  );
}

export default App;
