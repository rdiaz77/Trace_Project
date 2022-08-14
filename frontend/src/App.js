import React from 'react';
import Navbar from './components/Navbar';
import './style.css'
import {Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Map from './pages/Map';
import User from './pages/User';
import Visit from './pages/Visit';
import AddUserForm from './components/AddUserForm';
import Error404 from './pages/Error404';
import Login from "./pages/Login"
import AddContactsForm from './components/AddContactForm'
import AddVisitForm from './components/AddVisitForm';
import ContactUsForm from './components/ContactUsForm';
import EditUserForm from './components/EditUserForm';
import EditVisitForm from './components/EditVisitForm';
import EditContactForm from './components/EditContactForm';
import ShowUser from './components/ShowUser';
import ShowVisit from './components/ShowVisit';
import ShowContact from './components/ShowContact';





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
          <Route exact path='/visits/:id' element={<ShowVisit />} />
          <Route exact path ='/visits/:id/edit' element={<EditVisitForm/>}/>


          <Route exact path="/users" element = {<User/>}/>
          <Route exact path="/users/new" element={<AddUserForm/>}/>
          <Route exact path='/users/:id' element={<ShowUser />} />
          <Route exact path ='/users/:id/edit' element={<EditContactForm/>}/>

          <Route exact path="/map" element = {<Map />}/>

          <Route exact path="/contacts" element = {<Contact/>}/>
          <Route exact path="/contacts/new" element={<AddContactsForm/>}/>
          <Route exact path='/contacts/:id' element={<ShowContact />} />
          <Route exact path ='/contacts/:id/edit' element={<EditContactForm/>}/>

          <Route exact path="/support" element = {<ContactUsForm/>}/>
          
          <Route exact path="/" element = {<Dashboard/>}/>
          
        </Routes>

      

    </div>
     

    </div>
     
  );
}

export default App;
