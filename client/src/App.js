import React, { Component } from 'react';
import './App.css';
import 'bulma';
import TabList from './components/Navigation/TabList';

class App extends Component {
  render () {
    return (
      <div className="App columns">
        <div className="column">
          <TabList/>
        </div>
      </div>
    );
  }
}

export default App;
