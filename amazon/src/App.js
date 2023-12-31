import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Checkout from "./Checkout"
import Login from './Login';
import{auth} from "./firebase";
import {useStateValue} from "./StateProvider";





function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        dispatch({
          type: 'SET USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout/>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
          <Route path="/login" element= <Login/>/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
