import {createContext, useContext, useState, useEffect, useCallback} from 'react'
import { Header } from './Header';
import {UserContext} from './App';
//const UserContext = createContext(null);
export function SignInScreen({ navigation }) {
    const { setName } = useContext(UserContext) || {};
    const handleSignIn = useCallback(() => {
      navigation.navigate('Cloudman Capital');
    }, [navigation]);
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