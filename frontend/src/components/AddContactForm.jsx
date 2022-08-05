import React from 'react';



export default function AddContactForm(){

    return(
        <>  
			<h1>Add New Contact</h1>
			<form method="POST" action= "/users">
				<div className = 'form-group'>
					<label htmlFor="first name">First Name</label>
					<input className ='form-control' id="contact_firstName" name="name" required />
				</div>
				<div className = 'form-group'>
					<label htmlFor="last Name">Last Name</label>
					<input className ='form-control'  id="contact_lastName" name="lastName" />
				</div>
				<div className = 'form-group'>
					<label htmlFor="city">Email</label>
					<input className ='form-control' type="email" id="contact_email" name="email" />
				</div>
				<div className = 'form-group'>
					<label htmlFor="city">Phone</label>
					<input className ='form-control' type="phone" id="contact_phone" name="phone" />
				</div>
				
			   
				<div className = 'form-group'>
					<label htmlFor="place">Contact works at:</label>
					<input className ='form-control' id="place_id" name="place" required />
				</div>
				<div>
				<input className="btn btn-primary" type="submit" value="Add New Contact"/>
				</div>

			</form>
        
        
        </>
    )
}