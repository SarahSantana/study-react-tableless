import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HelloWorld nome="Sarah"/>
          <HelloWorld nome="Suzy"/>
          <HelloWorld nome="Serena"/>
        </header>
      </div>
    );
  }
}
