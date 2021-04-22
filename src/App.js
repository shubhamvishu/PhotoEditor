import React from 'react';
import Slider from './Slider';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="main-image"/>
      <div className="sidebar">
        <SidebarItem />
      </div>
      <Slider />
    </div>
  )
}

export default App;
