import {createContext, useContext, useState, useEffect} from 'react'
import logo from './assets/Cloudman Capital Logo Transparent.png';
import {UserContext} from './App';
export function Header({ navigation, useSignOut, setName }) {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" style={{padding: '20px' }} />
        {useSignOut && (
          <button id="sign-out" class="sign-out-button" onClick={() => { navigation.navigate('Sign In')}}>
            Sign Out
          </button>
        )}
      </header>
    );
  }
  