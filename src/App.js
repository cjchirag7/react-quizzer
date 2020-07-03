import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
