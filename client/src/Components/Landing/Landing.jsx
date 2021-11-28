// import React, { useState } from 'react';
import {Link} from 'react-router-dom';
// import { io } from 'socket.io-client';

function Landing(props) {

    // const [info, setInfo] =useState('')
    
    // const socket = io('http://localhost:8080')
    // socket.on('connect', ()=>{
    //     console.log(socket.id)
    //     socket.emit('custom-event', 10,'testing');
    // })

    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        console.log(props.match.path)
        props.history.push("dashboard");
    }

    return (
        <>
        <h1>Convunity Landing Page</h1>
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