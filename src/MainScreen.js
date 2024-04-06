import {createContext, useContext, useState, useEffect, useCallback} from 'react'
import {Header} from './Header';
import {UserContext} from './App';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, LineChart, MarkPlot } from '@mui/x-charts/LineChart';   
export function MainScreen({ navigation }) {
    const {name, setName} = useContext(UserContext) || {};
  
    const [accountValue, setAccountValue] = useState(0);
  
    var firstName;
    var lastName;
    var nameArr = name.split(' ');
    if (nameArr.length >= 1) {
        firstName = nameArr[0];
    }
    if (nameArr.length >= 2) {
        lastName = nameArr[1];
    }

    const nameString = () => {
        let nS = "";
        for (let i = 0; i < nameArr.length; i++) {
            nS.concat(nameArr[i]);
        }
        return nS;
    }
  
    useEffect(() => {
      //fetchAccountValue({firstName: firstName, lastName: lastName});
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
        <Header navigation={navigation} useSignOut={true} setName={nameString}/>
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
              id="graph"
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
                <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px", paddingBottom: "35px"}}>$3.03</h6>
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