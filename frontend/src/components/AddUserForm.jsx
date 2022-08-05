
import React from 'react';
import { useState } from 'react';



export default function AddUserForm(){
	
	const [user, setNewUser] = useState({
		user_firstName: '',
		user_lastName: '',
		user_email: '',
		credential_id: ''
	})

	const handleDataChange = e =>{
		setNewUser(e.target.value)
	

	};

	async function handleSubmit (e) {
	console.log(user)
		e.preventDefault();
		const db = 'http://localhost:3000/users'
    	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    };
    await fetch(db, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
  };
		
	

	
	return(
		<main>
			<h1>Add New User</h1>
			<form method="POST" action= "/users" onSubmit={handleSubmit}>
				<div className = 'form-group'>
					<label htmlFor="first name">First Name</label>
					<input className ='form-control' id="user_firstName" name="name" onChange={e => setNewUser({ ...user, user_firstName: e.target.value })} required />
				</div>
				<div className = 'form-group'>
					<label htmlFor="last Name">Last Name</label>
					<input className ='form-control'  id="user_lastName" name="lastName" onChange={e => setNewUser({ ...user, user_lastName: e.target.value })} />
				</div>
				<div className = 'form-group'>
					<label htmlFor="city">Email</label>
					<input className ='form-control' type="email" id="user_email" name="email" onChange={e => setNewUser({ ...user, user_email: e.target.value })} />
				</div>
				
			   
				<div className = 'form-group'>
					<label htmlFor="credential">Credential</label>
					<input className ='form-control' id="credential_id" name="credential" onChange={e => setNewUser({ ...user, credential_id: e.target.value })} />
				</div>
				<div>
				<input className="btn btn-primary" type="submit" value="Add New User"/>
				</div>

			</form>
		</main>




	)
}

