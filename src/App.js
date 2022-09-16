import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import HomeContainer from './containers/HomeContainer'
function App() {
  return (
    <div className="App">
      <User data={{name:'ayush mishra'}}/>
      <HomeContainer />

    </div>
  );
}

export default App;
