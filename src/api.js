export const fetchAccountValue = async (data = {}, setAccountValue) => {
    const response = await fetch('http://localhost:8080/account_value', 
    {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    //const data = JSON.parse(await response.json());
    var value = await response.json();
    setAccountValue(value);
}

export const fetchDailyChange = async (data = {}, setDailyChange) => {
  const response = await fetch('http://localhost:8080/daily_change', 
  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then (response => response.text())
  setDailyChange(response);
}

export const fetchAmountInvested = async (data = {}, setAmountInvested) => {
  const response = await fetch('http://localhost:8080/amount_invested', 
  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then (response => response.text())
  //console.log(response);
  setAmountInvested(response);
}

export const fetchEarnings = async (data = {}, setEarnings) => {
  const response = await fetch('http://localhost:8080/earnings', 
  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then (response => response.text())
  //console.log(response);
  setEarnings(response);
}

export const fetchHistory = async (data = {}, setAccountDates, setAccountValues) => {
  const response = await fetch('http://localhost:8080/account_history', 
  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
  //console.log(response.times);
  setAccountDates(response.times);
  setAccountValues(response.values);
}

export const fetchLastUpdated = async (data = {}, setLastUpdated) => {
  const response = await fetch('http://localhost:8080/last_update', 
  {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.text())
  //console.log(response.times);
  setLastUpdated(response);
}

