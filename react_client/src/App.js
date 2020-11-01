import React from 'react';
// import logo from './logo.svg';
import './App.css';

//
import './components/ui/styles.css'
import SlyHeader from './components/ui/headers/SlyHeader'
import SlyBanner from './components/ui/SlyBanner'
//
// import CountButton from './components/CountButton'
// import CountNum from './components/CountNum'
import {
  // BrowserRouter,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'
// import {
//   Home,
//   About,
//   Events,
//   Products,
//   Contact
// } from './components/Pages'
import SlyPageLogin from './components/ui/SlyPageLogin'
import SlyPageSignup from './components/ui/SlyPageSignup'
import SlyPageGetStarted from './components/ui/SlyPageGetStarted'

import SlyNotes from './components/ui/notes/SlyNotes'
import SlyNotesView from './components/ui/notes/SlyNotesView'
import SlyNotesSearch from './components/ui/notes/SlyNotesSearch'
import SlyNotesEdit from './components/ui/notes/SlyNotesEdit'
import SlyPaperclip from './components/ui/SlyPaperclip'

import SlyYourProfiles from './components/ui/yours/SlyYourProfiles'
import SlyYourTools from './components/ui/yours/SlyYourTools'
import SlyDashboards from './components/ui/yours/SlyDashboards'
import SlyBooks from './components/ui/yours/SlyBooks'
import SlyManuals from './components/ui/yours/SlyManuals'
import SlyWorkflows from './components/ui/yours/SlyWorkflows'
import SlySettings from './components/ui/yours/SlySettings'

import SlyCommonArticles from './components/ui/commons/SlyCommonArticles'
import SlyCommonQuestionBanks from './components/ui/commons/SlyCommonQuestionBanks'
import SlyCommonSurveys from './components/ui/commons/SlyCommonSurveys'
import SlyCommonHome from './components/ui/commons/SlyCommonHome'

import SlyCommonMissingParts from './components/ui/commons/SlyCommonMissingParts'
import SlyCommonSolutions from './components/ui/commons/SlyCommonSolutions'

// import { PagesNavigator } from './components/PagesNavigator'
import { PagesNotFound } from './components/PagesNotFound'

// import AstronautsButton from './components/AstronautsButton'
// import D3Card from './components/D3Card'

window.React = React

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <CountButton />
      <CountNum /> */}
      <HashRouter>
        <SlyHeader />
        {/* <PagesNavigator /> */}
        <div className="main">
          {/* <D3Card /> */}
          <Switch>
            <Route exact path="/" component={SlyCommonHome} />
            {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact} /> */}

            <Route path="/users/login" component={SlyPageLogin} />
            <Route path="/users/signup" component={SlyPageSignup} />
            <Route path="/articles/getting-started" component={SlyPageGetStarted} />

            <Route path="/my/SlyNotes" component={SlyNotes} />
            <Route path="/my/SlyNotesView" component={SlyNotesView} />
            <Route path="/my/SlyNotesSearch" component={SlyNotesSearch} />
            <Route path="/my/SlyNotesEdit" component={SlyNotesEdit} />
            <Route path="/my/SlyPaperclip" component={SlyPaperclip} />

            <Route path="/my/SlyYourProfiles" component={SlyYourProfiles} />
            <Route path="/my/SlyYourTools" component={SlyYourTools} />
            <Route path="/my/SlyDashboards" component={SlyDashboards} />
            <Route path="/my/SlyBooks" component={SlyBooks} />
            <Route path="/my/SlyManuals" component={SlyManuals} />
            <Route path="/my/SlyWorkflows" component={SlyWorkflows} />
            <Route path="/my/SlySettings" component={SlySettings} />

            <Route path="/my/SlyCommonArticles" component={SlyCommonArticles} />
            <Route path="/my/SlyCommonQuestionBanks" component={SlyCommonQuestionBanks} />
            <Route path="/my/SlyCommonSurveys" component={SlyCommonSurveys} />
            <Route path="/my/SlyCommonHome" component={SlyCommonHome} />

            <Route path="/my/SlyCommonMissingParts" component={SlyCommonMissingParts} />
            <Route path="/my/SlyCommonSolutions" component={SlyCommonSolutions} />

            <Route component={PagesNotFound} />
          </Switch>
        </div>
        <SlyBanner />
      </HashRouter>
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


    </div>
  );
}

export default App;
