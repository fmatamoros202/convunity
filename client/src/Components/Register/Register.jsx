import React from 'react';

function Register(props) {
    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        console.log(props.match.path)
        props.history.replace('');
    }
    return (
        <div>
            <h1>Thank you for joining Convunity</h1>
            <p>Please provide the following information</p>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input></input>
                <label>Username</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Nickname</label>
                <input></input>
                <label>Native Language</label>
                <input></input>
                <label>Learning Language</label>
                <input></input>
                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;