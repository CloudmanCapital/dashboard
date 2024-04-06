import logo from './assets/Cloudman Capital Logo Transparent.png';
import './App.css';
import { Button, View, Text } from 'react-native';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, LineChart, MarkPlot } from '@mui/x-charts/LineChart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createContext, useContext, useState, useEffect} from 'react'

const UserContext = createContext(null);


function MainScreen({ navigation }) {
  const { name } = useContext(UserContext);

  const { setName } = useContext(UserContext);

  const [accountValue, setAccountValue] = useState(0);


  setName("Aditya Behera");
  var firstName = name.split(' ')[0];
  var lastName = name.split(' ')[1];

  useEffect(() => {
    fetchAccountValue({firstName: firstName, lastName: lastName});
  }, []);
  
  const fetchAccountValue = async (data = {}) => {
      const response = await fetch('http://localhost:8080/account_value?firstName=Aditya&lastName=Behera', 
      {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      //const data = JSON.parse(await response.json());
      var value = await response.json();
      console.log("Value: " + value)
      //setAccountValue(value);
  }

  


  return (
    <div className="App">
      <html data-theme="nord"></html>
      <Header navigation={navigation} useSignOut={true} />
      <div id="overall-row" class="flex flex-row">
        <div class="flex-none basis-2/3 pt-0">
          <div class="flex flex-row pt-3">
            <div class="flex-volu basis-1/2">
              <h1 className="ml-10" style={{ fontSize: "2rem", fontWeight: "bold" }}>{name} </h1>
              <h6 className="ml-10" style={{ fontSize: "3rem", fontWeight: "400" }}>$8.20</h6>

            </div>


            <div id="changeHolder" class="flex-none basis-1/2">
              <div id="daily-change" class="rounded-rectangle ml-auto mr-10">
                +$3.08 (+48.2%) today
              </div>
            </div>
          </div>

          <LineChart
            height={300}
            leftAxis={null}
            bottomAxis={null}
            series={[{ type: 'line', curve: 'linear', data: [5, 7.10, 5.15, 7.92, 3.0, 8.08, 8.15, 6, 9, 10, 8.2] }]}
            xAxis={[{
              scaleType: 'point', data: [
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
              ]
            }]}
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
            }} />
          <div id="transactions" class="mr-10 ml-10">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <div id="right-col" class="flex-col basis-1/3">
          <div class="self-start">
            <ul class="menu bg-base-200 w-56 rounded-box">
              <h6 style={{ fontSize: "1.5rem", fontWeight: "600", paddingTop: "25px" }}>Your Account</h6>
              <h6 style={{ fontSize: "0.8rem", fontWeight: "600", paddingTop: "30px" }}>Amount Invested</h6>
              <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px" }}>$5.00</h6>
              <h6 style={{ fontSize: "0.8rem", fontWeight: "600", paddingTop: "40px" }}>Earnings</h6>
              <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px" }}>$3.03</h6>
              <h6 style={{ fontSize: "0.8rem", fontWeight: "600", paddingTop: "40px" }}>Managing Fee</h6>
              <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px", paddingBottom: "60px" }}>$0.21</h6>
            </ul>
          </div>
          <div id="last-updated" class="toast">
            Last Updated 04/06/24
          </div>
        </div>



      </div>

    </div>

  );
}

function Header({ navigation, useSignOut }) {
  const { setName } = useContext(UserContext);
  return (
    <header className="App-header">
      <img src={logo} alt="logo" style={{ padding: '20px' }} />
      {useSignOut && (
        <button class="sign-out-button" onClick={() => { navigation.navigate('Sign In'); setName("") }}>
          Sign Out
        </button>
      )}
    </header>
  );
}

function SignInScreen({ navigation }) {
  const { setName } = useContext(UserContext);
  const handleSignIn = () => {
    navigation.navigate('Cloudman Capital');
  };
  return (
    <div className="App">
      <html data-theme="nord"></html>
      <Header navigation={navigation} useSignOut={false} />
        <div id="sign-in-box" class="flex-col items-center justify-center">
          <h6 style={{ fontSize: "1.8rem", fontWeight: "600", paddingTop: "40px", textAlign: "center" }}>SIGN IN</h6>
          <label class="form-control w-full max-w-xs py-6 justify-center ml-auto mr-auto">
            <h6 style={{ fontSize: "0.8rem", fontWeight: "400", padding: "7px", textAlign: "left", WebkitTextFillColor: "gray" }}>Name</h6>
            <input type="text" placeholder="First & Last Name" class="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)} />

            <h6 style={{ fontSize: "0.8rem", fontWeight: "400", padding: "7px", paddingTop: "20px", textAlign: "left", WebkitTextFillColor: "gray" }}>Password</h6>
            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
            <div class="label">
            </div>


          </label>
          <button class="btn rounded-full w-24 btn-secondary" onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [name, setName] = useState(''); // Add state for name
  const [useSignOut, setUseSignOut] = useState(false);
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
