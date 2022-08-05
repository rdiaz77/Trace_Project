import React from 'react';
import Navbar from './components/Navbar';
import './style.css'
import {Route, Router, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import ContactUs from './pages/ContactUs';
import Map from './pages/Map';
import User from './pages/User';
import Visit from './pages/Visit';
import AddUserForm from './components/AddUserForm';
import AddContactForm from './components/AddContactForm';
import Error404 from './pages/Error404';
import AddUser from './pages/AddUser';




function App() {
  return (
   
    <div>
     <Navbar />
    <div>
      

        <Routes>
          <Route exact path="/404" component = {<Error404/>}/>
          <Route exact path="/" element = {<Dashboard/>}/>
          <Route exact path="/visits" element = {<Visit/>}/>

          <Route exact path="/users" element = {<User/>}>
            <Route exact path="new" element={<AddUserForm/>}/>
          </Route>

          <Route exact path="/map" element = {<Map/>}/>

          <Route exact path="contacts" element = {<Contact/>}>
            <Route exact path="new" element={<AddUser/>}/>
          </Route>

          <Route exact path="/support" element = {<ContactUs/>}/>
          
        </Routes>

      

    </div>
     

    </div>
     
  );
}

export default App;
