import React from 'react';

import './App.css';
import Banner from './Components/Banner/Banner';
// import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
   
  );
}

export default App;
