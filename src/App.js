import React from 'react';
import './App.css';
import {ApplicationRoutes} from './ApplicationRoutes';
import {Nav} from './components';

function App() {
  
  return (
    
    <div className="App">
      <Nav />
      <ApplicationRoutes />
    </div>
  );
}

export default App;