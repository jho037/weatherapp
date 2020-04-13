import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNav from './Components/Navbar/HomeNav';
import Weathercards from './Components/Weathercards/Weathercards';


function App() {
  return (
    <div>
      <HomeNav></HomeNav>
      
      <Weathercards></Weathercards>
    </div>
    
    
  );
}

export default App;
