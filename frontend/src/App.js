import React from 'react';
import Navbar from './components/Navbar';
import './style.css'
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
   
    <div>
     <Navbar />
    <div>
      <Routes>
        <Route path="/" element = {<Dashboard/>}/>
      </Routes>

    </div>
     

    </div>
     
  );
}

export default App;
