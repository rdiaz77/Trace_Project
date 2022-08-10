import React from 'react';
import { Link} from 'react-router-dom';


export default function Contact(){


async function getAllContacts(){

    const response = await fetch('http://localhost:3000/contacts')
    const contacts = response.json()
    console.log(contacts)

}



    

 

 
    return(

        <>
        <div>
           <h1>Contacts list page</h1>
        </div>

        <button>
            <Link to= "new">Add New Contact</Link>

        </button>
      

        </>
    )
}