import React from 'react';
import { Link, Outlet} from 'react-router-dom';


export default function Contact(){

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