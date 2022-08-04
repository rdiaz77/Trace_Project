import React from 'react';
import Navbar from './components/Navbar';
import './style.css'
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import ContactUs from './pages/ContactUs';
import Map from './pages/Map';
import User from './pages/User';
import Visit from './pages/Visit';





function App() {
  return (
   
    <div>
     <Navbar />
    <div>
      <Routes>
        <Route path="/" element = {<Dashboard/>}/>
        <Route path="/visits" element = {<Visit/>}/>
        <Route path="/users" element = {<User/>}/>
        <Route path="/map" element = {<Map/>}/>
        <Route path="contacts" element = {<Contact/>}/>
        <Route path="/support" element = {<ContactUs/>}/>
      </Routes>

    </div>
     

    </div>
     
  );
}

export default App;
