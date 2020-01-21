import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GearContainer from './GearContainer';
import 'semantic-ui-css/semantic.min.css'
import HeaderContainer from './HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <GearContainer/>
    </div>
  );
}

export default App;
