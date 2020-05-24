import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import './App.css';
import About from './About';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar /><hr/>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
