import React from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png'
import logoGirl from '../../assets/images/logo-girl.png';

function Register(props) {
    let onSubmit = (e)=>{
        e.preventDefault();
        console.log(e);
        console.log(props.match.path)
        props.history.replace('/');
    }
    return (
        <>
            <header className="header">
                <div>
                    <Link to="/">
                        <img src={logo} className="register-logo" alt="convunity logo"/>
                    </Link>
                </div>
            </header>
            <div className="register-main">
                <h1 className="register-main__title">Thank you for joining Convunity!</h1>
                <div className="register-main__container">
                    <img className="register-main__container__image" src={logoGirl} alt="A woman chatting on her phone"></img>
                    <div className="register-main__container__info">
                        <p className ="register-subtext">Please provide the following information:</p>
                        <form className ="register-form"onSubmit={onSubmit}>
                            {/* <label>Name</label> */}
                            <input className ="register-form__input" placeholder="UserName"></input>
                            {/* <label>Username</label> */}
                            <input className ="register-form__input" placeholder="Password"></input>
                            {/* <label>Email</label> */}
                            <input className ="register-form__input" placeholder="Confirm Password"></input>
                            {/* <label>Nickname</label> */}
                            <input className ="register-form__input" placeholder="Email"></input>
                            {/* <label>Native Language</label> */}
                            <input className ="register-form__input" placeholder="Native Language"></input>
                            {/* <label>Learning Language</label> */}
                            <input className ="register-form__input" placeholder="Learning Language"></input>
                            <button className ="register-button">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer">

            </footer>
        </>
    );
}

export default Register;