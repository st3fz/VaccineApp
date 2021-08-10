import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    <Router>
      <Navbar onchange={(e) => { onchange(e) }}/>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
