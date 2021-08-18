import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react';
import Average from './Average';

// 클래스형
/*
class App extends Component {
  render() {
    return (
      <Demo/>
    );
  }
}
*/

// 함수형

const App = () => {
  return <Average/>
};


export default App;
