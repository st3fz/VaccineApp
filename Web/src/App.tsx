import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
import LoginSignup from './modals/LoginSignup/LoginSignup';

import './App.scss';

function App() {

  const[ sidebar, setSidebar ] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Router>
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
      <div className={sidebar ? 'add-left-margin' : ''}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/auth" component={LoginSignup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
