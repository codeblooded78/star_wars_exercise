import React from 'react'
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";

function App() {
    console.log()
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/dashboard"/>
          )}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route exact path="*" render={() => (
                <Redirect to="/dashboard"/>
            )}/>


        </Switch>
      </div>
  );
}

export default App;
