import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Survey from './Survey';
import SurveyAdmin from './SurveyAdmin';
import './App.css';
import {history} from './helpers/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route path='/login' component={SignIn}/>
          <Route exact path='/survey' component={SurveyAdmin}/>
          <Route path='/survey/:uuid' component={Survey}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
