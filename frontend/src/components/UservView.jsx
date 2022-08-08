import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export default function UserView(){
const id = useParams()

const[singleUser, setSingleUser] = useState({
    user_firstName: '',
    user_lastName: '',
    user_email: '',
    credential_id: ''

})

    return(

        <div>
            <p>user view goes here</p>
            <h2>the id pas was :{id}</h2>

        </div>
    )
}