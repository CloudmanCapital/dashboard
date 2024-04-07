import {createContext, useContext, useState, useEffect, useCallback} from 'react'
import {Header} from './Header';
import {UserContext} from './App';
import { ChartContainer } from '@mui/x-charts';
import { LinePlot, LineChart, MarkPlot } from '@mui/x-charts/LineChart';   
import { fetchAccountValue, fetchAmountInvested, fetchDailyChange, fetchHistory, fetchLastUpdated } from './api';
export function MainScreen({ navigation }) {
    const {name, setName} = useContext(UserContext) || {};
    const [accountValue, setAccountValue] = useState(0);
    const [dailyChange, setDailyChange] = useState(0);
    const [amountInvested, setAmountInvested] = useState(0);
    const [accountDates, setAccountDates] = useState([]);
    const [accountValues, setAccountValues] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(0);
    setName("Aditya Behera")
    

  
    useEffect(() => {
      var firstName;
      var lastName;
      var nameArr = name.split(' ');
      if (nameArr.length >= 1) {
          firstName = nameArr[0];
      }
      if (nameArr.length >= 2) {
          lastName = nameArr[1];
      }
      fetchAccountValue({firstName: firstName, lastName: lastName}, setAccountValue);
      fetchDailyChange({firstName: firstName, lastName: lastName}, setDailyChange);
      fetchAmountInvested({firstName: firstName, lastName: lastName}, setAmountInvested);
      fetchHistory({firstName: firstName, lastName: lastName}, setAccountDates, setAccountValues);
      fetchLastUpdated({firstName: firstName, lastName: lastName}, setLastUpdated);
    }, [name]);
    
  
  
    return (
      <div className="App">
        <html data-theme="nord"></html>
        <Header navigation={navigation} useSignOut={true} setName={name}/>
        <div id="overall-row" class="flex flex-row">
          <div class="flex-none basis-2/3 pt-0">
            <div class="flex flex-row pt-3">
              <div class="flex-volu basis-1/2">
                <h1 className="ml-10" style={{ fontSize: "2rem", fontWeight: "bold" }}>{name} </h1>
                <h6 className="ml-10" style={{ fontSize: "3rem", fontWeight: "400" }}>${accountValue.toFixed(2)}</h6>
  
              </div>
  
  
              <div id="changeHolder" class="flex-none basis-1/2">
                <div id="daily-change" class="rounded-rectangle ml-auto mr-10">
                  {dailyChange}
                </div>
              </div>
            </div>
  
            <LineChart
              id="graph"
              height={300}
              leftAxis={null}
              bottomAxis={null}
              series={[{ type: 'line', curve: 'linear', data: accountValues }]}
              xAxis={[{
                scaleType: 'point', data: accountDates
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
                <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px" }}>{amountInvested}</h6>
                <h6 style={{ fontSize: "0.8rem", fontWeight: "600", paddingTop: "40px" }}>Earnings</h6>
                <h6 style={{ fontSize: "2rem", fontWeight: "400", paddingTop: "5px", paddingBottom: "35px"}}>$3.03</h6>
              </ul>
            </div>
            <div id="last-updated" class="toast">
              {"Last Updated: " + lastUpdated}
            </div>
          </div>
  
  
  
        </div>
  
      </div>
  
    );
  }