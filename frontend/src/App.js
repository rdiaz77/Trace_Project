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
import Error404 from './pages/Error404';
import Login from "./pages/Login"
import UserView from './components/UservView';
import AddContactsForm from './components/AddContactForm'
import AddVisitForm from './components/AddVisitForm';
import ContactUsForm from './components/ContactUsForm';
import EditUserForm from './components/EditUserForm';

function App() {
  return (
   
    <div>
     <Navbar />
    <div>
      

        <Routes>
         <Route exact path="/login" element = {<Login/>}/>
          <Route exact path="/404" component = {<Error404/>}/>

          <Route exact path="/visits" element = {<Visit/>}/>
          <Route exact path="/visits/new" element = {<AddVisitForm/>}/>

          <Route exact path="/users" element = {<User/>}/>
          <Route exact path="/users/new" element={<AddUserForm/>}/>
          <Route exact path='/users/:id' element={<UserView />} />
          <Route exact path ='/users/edit/:id' element={<EditUserForm/>}/>

          <Route exact path="/map" element = {<Map/>}/>

          <Route exact path="/contacts" element = {<Contact/>}/>
          <Route exact path="/contacts/new" element={<AddContactsForm/>}/>
          

          <Route exact path="/support" element = {<ContactUsForm/>}/>
          
          <Route exact path="/" element = {<Dashboard/>}/>
          
        </Routes>

      

    </div>
     

    </div>
     
  );
}

export default App;
