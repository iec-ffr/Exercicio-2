import React from 'react';
import './App.css';
import {ApplicationRoutes} from './ApplicationRoutes';
import { Busca, Nav } from './components';

function App() {
  
  return (
    
    <div className="App">
      <Nav/>
      <Busca/>
      <ApplicationRoutes />
    </div>
  );
}

export default App;