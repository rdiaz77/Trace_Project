const React = require('react')


export default function newUser(){
    return (
            <main>
                <h1>This is a new form</h1>
                <form method="POST" action= "/user">
                    <div className = ''>
                        <label htmlFor="user_firstName">User First Name</label>
                        <input className ='' id="user_firstName" name="user_firstName" required />
                    </div>

                    <div className = ''>
                        <label htmlFor="user_lastName">User Last Name</label>
                        <input className ='' id="user_lastName" name="user_lastName" required />
                    </div>
                  
                    <div className = ''>
                        <label htmlFor="user_email">Email Address</label>
                        <input className ='' id="user_email" name="user_email" />
                    </div>
                   
                    <div className = ''>
                        <label htmlFor="credential_id">Password</label>
                        <input className ='' id="credential_id" name="credential_id" required />
                    </div>
                    <div>
                    <input className="btn btn-primary" type="submit" value="Add New User"/>
                    </div>

                </form>
            </main>
        
    )

}

