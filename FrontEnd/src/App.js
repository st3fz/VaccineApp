// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/chat" component={Chat}/>
      </Switch>
    </Router>
  );
}

export default App;
