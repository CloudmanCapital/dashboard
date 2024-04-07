import {createContext, useContext, useState, useEffect, useCallback} from 'react'
import { Header } from './Header';
import {UserContext} from './App';
import {checkUserExists} from './api';

export function SignInScreen({ navigation }) {
    const {name}  = useContext(UserContext) || {};
    const { setName } = useContext(UserContext) || {};
    const [password, setPassword] = useState(''); // Add state for password
    const [error, setError] = useState(false); // Add state for password


      
    return (
      <div className="App">
        <html data-theme="nord"></html>
        <Header navigation={navigation} useSignOut={false} />
          <div id="sign-in-box" class="flex-col items-center justify-center">
            <h6 style={{ fontSize: "1.8rem", fontWeight: "600", paddingTop: "40px", textAlign: "center" }}>SIGN IN</h6>
            <label class="form-control w-full max-w-xs py-6 justify-center ml-auto mr-auto">
              <h6 style={{ fontSize: "0.8rem", fontWeight: "400", padding: "7px", textAlign: "left", WebkitTextFillColor: "gray" }}>Name</h6>
              <input type="text" placeholder="First & Last Name" class="input input-bordered w-full max-w-xs" onChange={(e) => {setName(e.target.value)}} />
  
              <h6 style={{ fontSize: "0.8rem", fontWeight: "400", padding: "7px", paddingTop: "20px", textAlign: "left", WebkitTextFillColor: "gray" }}>Password</h6>
              <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" onChange={(e) => setPassword(e.target.value)} />
              <div class="label">
              </div>
              {error &&
              <div role="alert" class="alert alert-error w-fit" >
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Name or password incorrect.</span>
              </div>}
  
            </label>
            <button class="btn rounded-full w-24 btn-secondary" onClick={() => handleSignIn()}>Sign In</button>
           
           
            
        </div>
       
      </div>
    );
    
    async function handleSignIn( ) {
      let firstName;
      let lastName;
      let nameArr = name.split(' ');
      if (nameArr.length >= 1) {
          firstName = nameArr[0];
      }
      if (nameArr.length >= 2) {
          lastName = nameArr[1];
      }
      
      var userExists =  await checkUserExists({firstName: firstName, lastName: lastName});
      if (userExists) {
        console.log("User exists");
      }
      else {
        console.log("User does not exist");
      }
      var passwordGood = false;
      if (password === "123") {
        passwordGood = true;
      }
        
      if (userExists && passwordGood) {
        navigation.navigate('Cloudman Capital');
      }
      else {
        setError(true);
      }

}
  }

