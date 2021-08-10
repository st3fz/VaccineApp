import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';

import './App.scss';

function App() {

  const[ sidebar, setSidebar ] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Router>
      <div className={`navbar py-4 pl-5 ${sidebar ? 'add-left-margin' : ''}`}>
        <a className="navbar-brand" onClick={toggleSidebar}>Vaccine App</a>
      </div>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} setSidebar={setSidebar}/>
      <div className={sidebar ? 'add-left-margin' : ''}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/chat" component={Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
