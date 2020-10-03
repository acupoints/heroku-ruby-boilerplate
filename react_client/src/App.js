import React from 'react';
// import logo from './logo.svg';
import './App.css';

//
import CountButton from './components/CountButton'
import CountNum from './components/CountNum'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from './components/Pages'

import { PagesNavigator } from './components/PagesNavigator'
import { PagesNotFound } from './components/PagesNotFound'

import AstronautsButton from './components/AstronautsButton'
import D3Card from './components/D3Card'

window.React = React

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <CountButton />
      <CountNum />
      <BrowserRouter>
        <PagesNavigator />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route component={PagesNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      <AstronautsButton />
      <D3Card />
    </div>
  );
}

export default App;
