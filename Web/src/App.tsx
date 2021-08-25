import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar/Navbar';
import LoginSignup from './modals/LoginSignup/LoginSignup';

import './App.scss';

function App() {

  const[ isSidebarOpen, setIsSidebarOpen ] = useState<boolean>(false);

  const toggleSidebar: ()=>void = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <Router>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={isSidebarOpen ? 'add-left-margin' : ''}>
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
