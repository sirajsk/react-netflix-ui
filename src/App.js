import React from 'react';
import {Orginals,action,commedy,Horror,documentry} from './url'
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
      <RowPost url={Orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={commedy} title='Commedy Movies' isSmall/>
      <RowPost url={Horror} title='Horror Movies' isSmall/>
      <RowPost url={documentry} title='Documentry Movies' isSmall/>
      

    </div>
   
  );
}

export default App;
