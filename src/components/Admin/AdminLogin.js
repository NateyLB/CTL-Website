import React, { useState } from 'react';

const AdminLogin = props => {
    const [credentials, setCredential] = useState({ username: '', password: '' })

    const changeHandler = event =>{
        setCredential({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }
    const validate = () =>{
        if(credentials.username.length > 0 && credentials.password.length > 0){
            return false
        }
        return true
    }
    console.log(credentials)

    return (
        <div id="admin-login">
            <h1>Admin Login</h1>
            <form>
                <label>
                    Username:
                    <input type ="text"
                            name="username"
                            value={credentials.username}
                            onChange={changeHandler}
                    />
                </label>
                <label>
                    Password:
                    <input type="text"
                            name="password"
                            value={credentials.password}
                            onChange={changeHandler}
                    />
                </label>
                <button disabled={validate()} type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLogin;