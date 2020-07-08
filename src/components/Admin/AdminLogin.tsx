import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux'; 
import { login } from '../../actions/adminActions'

const AdminLogin = props => {
    const [credentials, setCredential] = useState({ username: '', password: '' })
    const match = useHistory();

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

    const onSubmit = event => {
        event.preventDefault();
        props.login(credentials, match)
      }
    if (localStorage.getItem("adminToken")){
        match.push("/admin/tools")
    }
    return (
        <div id="admin-login">
            <h1>Admin Login</h1>
            <form onSubmit={onSubmit}>
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
                    <input type="password"
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

const mapStateToProps = state => {
    return {
    };
  };
  
  export default connect(
  mapStateToProps,
  {login}
  )(AdminLogin)