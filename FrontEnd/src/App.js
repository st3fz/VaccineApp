import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';
import TopNavbar from './components/TopNavbar/TopNavbar';
import LoginSignup from './modals/LoginSignup/LoginSignup';

import './App.scss';

function App(props) {

  const[ sidebar, setSidebar ] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <Router>
      <TopNavbar sidebar={sidebar} toggleSidebar={toggleSidebar} />
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
