import {createContext, useContext, useState, useEffect} from 'react'
import logo from './assets/Cloudman Capital Transparent Large.png';
import {UserContext} from './App';
export function Header({ navigation, useSignOut, setName }) {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" style={{ height: "75", width: "225", padding: '20px' }} />
        {useSignOut && (
          <button id="sign-out" class="sign-out-button" onClick={() => { navigation.navigate('Sign In')}}>
            Sign Out
          </button>
        )}
      </header>
    );
  }
  