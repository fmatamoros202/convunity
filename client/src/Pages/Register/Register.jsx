import React from 'react';
import {useState} from 'react';
import './Register.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png'
import reactIcon from '../../assets/icons/react-icon.png'
import nodeIcon from '../../assets/icons/nodejs.png'
import expressIcon from '../../assets/icons/expressjs.png'
import socketIcon from '../../assets/icons/socket.png'
import webRTCIcon from '../../assets/icons/webRTC.png'
import peerjsIcon from '../../assets/icons/peerjs2.png'
import linkedinIcon from '../../assets/icons/linkedin.png'
import githubIcon from '../../assets/icons/github.png'
import logoWhite from '../../assets/logo/logo-main-w.png'
import logoGirl from '../../assets/images/logo-girl.png';

function Register(props) {

    const [error, setError] = useState('');


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
            <header className="register-header">
                <div>
                    <Link to="/">
                        <img src={logo} className="register-logo" alt="convunity logo"/>
                    </Link>
                </div>
            </header>
            <h1 className="register-main__title">Become an early Tester!</h1>
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
                <section className="tech">
                    <div className="register-main__container">
                        <div className="register-main__container__info">
                            <p className ="register-subtext">Technology stack used in Convunity</p>
                            <div className ="icons-box">
                                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={reactIcon} alt='react.js'></img></a>
                                <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={nodeIcon} alt='node.js'></img></a>
                                <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={expressIcon} alt='express.js'></img></a>
                                <a href="https://socket.io/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={socketIcon} alt='socket.io'></img></a>
                                <a href="https://webrtc.org/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={webRTCIcon} alt='webRTC'></img></a>
                                <a href="https://peerjs.com/" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={peerjsIcon} alt='peerJS'></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="register-main__container">
                        <div className="register-main__container__info">
                            <p className ="register-subtext">Get to know Convunity's creator</p>
                            <div className ="icons-box">
                                <a href="https://www.linkedin.com/in/fernando-matamoros" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={linkedinIcon} alt='LinkedIn'></img></a>
                                <a href="https://github.com/fmatamoros202" target="_blank" rel="noreferrer"><img className ="icons-box__element" src={githubIcon} alt='GitHub'></img></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="register-footer">
                <Link to="/">
                    <img src={logoWhite} className="register-footer__logo" alt="convunity logo"/>
                </Link>
            </footer>
        </>
    );
}

export default Register;