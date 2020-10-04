import React from 'react';
// import logo from './logo.svg';
import './App.css';

//
import './components/ui/styles.css'
import SlyHeader from './components/ui/SlyHeader'
import SlyBanner from './components/ui/SlyBanner'
//
// import CountButton from './components/CountButton'
// import CountNum from './components/CountNum'
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
import SlyPageLogin from './components/ui/SlyPageLogin'
import SlyPageSignup from './components/ui/SlyPageSignup'

import { PagesNavigator } from './components/PagesNavigator'
import { PagesNotFound } from './components/PagesNotFound'

// import AstronautsButton from './components/AstronautsButton'
import D3Card from './components/D3Card'

window.React = React

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <SlyHeader />
      {/* <CountButton />
      <CountNum /> */}
      <BrowserRouter>
        <PagesNavigator />
        <D3Card />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} />
            <Route path="/users/login" component={SlyPageLogin} />
            <Route path="/users/signup" component={SlyPageSignup} />
            <Route component={PagesNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
      {/* <AstronautsButton /> */}
      {/* <D3Card /> */}
      
      {/* <D3Card />
      <D3Card />
      <D3Card />
      <D3Card />
      <D3Card />

      <D3Card />
      <D3Card />
      <D3Card />
      <D3Card />
      <D3Card /> */}

      <SlyBanner />

    </div>
  );
}

export default App;
