
import './App.css';
import {Header} from './Header';
import {SignInScreen} from './SignInScreen';
import {MainScreen} from './MainScreen';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createContext, useContext, useState, useEffect, useCallback} from 'react'

export const UserContext = createContext(null);


const Stack = createNativeStackNavigator();

function App() {
  const [name, setName] = useState(''); // Add state for name
  const [useSignOut, setUseSignOut] = useState(false);
  return (

    <NavigationContainer>
      <UserContext.Provider value={{ name, setName }}>
        <Stack.Navigator initialRouteName="Cloudman Capital">
          <Stack.Screen name="Cloudman Capital" component={MainScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>

  );
}

export default App;
