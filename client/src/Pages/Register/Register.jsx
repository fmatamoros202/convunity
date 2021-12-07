import React from 'react';
import {useState} from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png'
import logoWhite from '../../assets/logo/logo-main-w.png'
import logoGirl from '../../assets/images/logo-girl.png';

function Register(props) {

    const [error, setError] = useState('')


    let onSubmit = (e)=>{
        e.preventDefault();
        if(!e.target.name.value.trim() || !e.target.email.value.trim()){
            setError("register-form__input--error")
            return;
        }
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
            <h1 className="register-main__title">Become an Early Tester!</h1>
            <div className="register-main">
                <div className="register-main__container">
                    <img className="register-main__container__image" src={logoGirl} alt="A woman chatting on her phone"></img>
                    <div className="register-main__container__info">
                        <p className ="register-subtext">Please provide the following information:</p>
                        <form className ="register-form"onSubmit={onSubmit}>
                            {/* <label>Name</label> */}
                            <input className ={"register-form__input "+error} placeholder="Full Name" name="name"></input>
                            {/* <label>Username</label> */}
                            <input className ={"register-form__input "+error} placeholder="Email" name="email"></input>
                            <button className ="register-button">Join the Community</button>
                        </form>
                    </div>
                </div>
                <div className="register-main__container">
                    {/* <img className="register-main__container__image" src={logoGirl} alt="A woman chatting on her phone"></img> */}
                    <div className="register-main__container__info">
                        <p className ="register-subtext">Please provide the following information:</p>
                        <form className ="register-form"onSubmit={onSubmit}>
                            {/* <label>Name</label> */}
                            <input className ={"register-form__input "+error} placeholder="Full Name" name="name"></input>
                            {/* <label>Username</label> */}
                            <input className ={"register-form__input "+error} placeholder="Email" name="email"></input>
                            <button className ="register-button">Join the Community</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="register-footer">
                <Link to="/">
                    <img src={logoWhite} className="footer__logo" alt="convunity logo"/>
                </Link>
            </footer>
        </>
    );
}

export default Register;