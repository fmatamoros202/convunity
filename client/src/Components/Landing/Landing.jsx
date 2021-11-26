import React from 'react';
import {Link} from 'react-router-dom';

function Landing(props) {

    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        console.log(props.match.path)
        props.history.push("dashboard");
    }

    return (
        <>
        <h1>Landing Page</h1>
        <form onSubmit={onSubmit}>
            <h2>Sign-In</h2>
            <label>Username</label>
            <input></input>
            <label>Password</label>
            <input></input>
            <button>Sign-In</button>
        </form>
        <Link to='/register'><div>Register</div></Link>
        </>
    );
}

export default Landing;