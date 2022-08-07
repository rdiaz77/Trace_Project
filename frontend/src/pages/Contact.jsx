import React from 'react';
import { Link, Outlet} from 'react-router-dom';


export default function Contact(){


    let contacts = fetch('http://localhost:3000/contacts')
    .then(res => res.json())
    .then(contact => console.log(contact))
    .catch(err =>console.log(err))

    console.log(contacts)

 let arr1 = [1,2,5,7,9]

 let iter = arr1.map(x => x + 1)
 console.log(iter)

 
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