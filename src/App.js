import logo from './assets/Cloudman Capital Logo Transparent.png';
import './App.css';
import { Button, View, Text } from 'react-native';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, LineChart, MarkPlot } from '@mui/x-charts/LineChart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createContext, useContext, useState} from 'react'

const UserContext = createContext(null);

function MainScreen({ navigation }) {
  const { name } = useContext(UserContext);
  const { setName } = useContext(UserContext);
  return (
    <div className="App">
      <html data-theme="nord"></html>
      <header className="App-header">
        <img src={logo} alt="logo" 
        style={{padding: '60px'}}/>
        <button class="sign-out-button" onClick={() => {navigation.navigate('Sign In'); setName("")}}>Sign Out</button>
      </header>
      <div class="flex flex-row">
        <div class="flex-none basis-2/3 pt-0">
           <div class="flex flex-row pt-3">
            <div class="flex-none basis-1/2">
              <h1 style={{fontSize: "2rem", fontWeight: "bold"}}>{name} </h1>
              <h6 style={{fontSize: "3rem", fontWeight: "400"}}>$8.20</h6>
            </div>
              
              
            <div class="flex-none basis-1/2">
              <div class="rounded-rectangle">
                  +$3.08 (+48.2%) today
              </div>
            </div>
        </div>

        <LineChart
      width={900}
      height={300}
      leftAxis={null}
      bottomAxis={null}
      series={[{ type: 'line', curve: 'linear', data: [5, 7.10, 5.15, 7.92, 3.0, 8.08, 8.15, 6, 9, 10, 8.2] }]}
      xAxis={[{ scaleType: 'point', data: [
        '3/1',
        '3/2',
        '3/3',
        '3/4',
        '3/5',
        '3/6',
        '3/7',
        '3,8',
        '3/9',
        '3/10',
        '3/11'
      ] }]}
      sx={{
        '.MuiLineElement-root': {
          stroke: '#35D2A2',
          strokeWidth: 5,
        },
        '.MuiMarkElement-root': {
          stroke: '#35D2A2',
          scale: '0.5',
          fill: '#35D2A2',
          strokeWidth: 2,
        },
      }}

    
/>
        </div>
        
        <div class="flex-none basis-1/3">
            
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

function SignInScreen({ navigation }) {
  const {setName} = useContext(UserContext);
  const handleSignIn = () => {
    navigation.navigate('Cloudman Capital');
  };
  return (
    
    <div className="App">
      <html data-theme="nord"></html>
      <header className="App-header">
        <img src={logo} alt="logo" 
        style={{padding: '60px'}}/>
      </header>

      <div class="flex flex-row pt-3">
            <div class="flex-none basis-1/3">
              
            </div>
            <div class="basis-1/3">
            <h6 style={{fontSize: "1.8rem", fontWeight: "600", paddingTop: "40px", textAlign: "left"}}>SIGN IN</h6>
            <label class="form-control w-full max-w-xs py-6">
              <h6 style={{fontSize: "0.8rem", fontWeight: "400", padding: "7px", textAlign: "left", WebkitTextFillColor: "gray"}}>Name</h6>
              <input type="text" placeholder="First & Last Name" class="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)} />

              <h6 style={{fontSize: "0.8rem", fontWeight: "400", padding: "7px", paddingTop: "20px", textAlign: "left", WebkitTextFillColor: "gray"}}>Password</h6>
              <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
              <div class="label">
              </div>
            

            </label>
            <button class="btn rounded-full w-24 btn-secondary" onClick={handleSignIn}>Sign In</button>
            
            </div>
            <div class="flex-none basis-1/3">
              
            </div>
      </div>
    </div>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [name, setName] = useState(''); // Add state for name
  return (
    
    <NavigationContainer>
      <UserContext.Provider value={{ name, setName }}>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="Cloudman Capital" component={MainScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
      </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
   
  );
}

export default App;
