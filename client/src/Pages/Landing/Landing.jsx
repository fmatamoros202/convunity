import './Landing.scss';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Login from '../../Components/Login/Login';
import logo from '../../assets/logo/logo-main.png';
import logoWhite from '../../assets/logo/logo-main-w.png';
// import logoGirl from '../../assets/images/logo-girl.png';
import hero from '../../assets/images/hero.png';
import quote2 from '../../assets/images/quote.png';
import quote3 from '../../assets/images/quote2.png';
import quote4 from '../../assets/images/quote4.png';

function Landing(props) {

    let onSubmit = (e)=>{
        e.preventDefault();
        props.history.push("dashboard");
    }

    const[show,setShow] = useState(false)

    return (
        <>
        <header className="header-section">
            <div className='infobar'>
                <img src={logo} className="logo" alt="convunity logo"/>
                {/* <form className ="form" onSubmit={onSubmit}>
                    <div className="form-inner-container">
                        <div className="input-form">
                            <input className="form__input" placeholder="Username"></input>
                            <input className="form__input" placeholder="Password"></input>
                        </div>
                        <button className="form__button">Log in</button>
                    </div>
                </form> */}
                <button className="infobar__button" onClick={()=>setShow(true)}>Log-In</button>
                <Login props={props} show={show} onClose={()=>setShow(false)}/>
            </div>
        </header>
        <div className="hero">
            <img className="hero__image" src={hero} alt="different chat bubbles"/>
            <div className="hero__container">
                <h3>What's Convunity?</h3>
                <p>Convunity is language fluency made easy!</p>
                <p>Use convunity to have fast conversations with native speakers to help you supplement your language learning journey.</p>
                <p>Choose the language you want to practice and your native language and voila! You are ready to practice and help others.</p>
                <Link to='/register' className="link"><div>Join for Beta Testing</div></Link>
            </div>
        </div>
        <section className="main">
            <div className="main__container">
                <img className="main__container__image" src={quote2} alt="quote bubble"/>
                <div className="main__container__elements">
                    <h3>Convunity = Conversation and Community</h3>
                    <p>When coming up with the idea for Convunity we realised that learning a new language is all about becoming conversationally adept.</p>
                    {/* <p>Yes, reading and writing are equally important, but the greatest satisfaction of learning a language comes from the ability to sustain conversations.</p>
                    <p>Convunity is an easy-to-use app that lets you have short conversations with native speakers in the language you are learning and practicing.</p> */}
                    <Link to='/register' className="link"><div>Join for Beta Testing</div></Link>
                </div>
            </div>
            <div className="main__container main__container--off-position">
                <img className="main__container__image" src={quote4} alt="quote bubble"/>
                <div className="main__container__elements">
                    <h3>We know simple is better.</h3>
                    <p>Convunity works under the premise that humans are active and busy individuals. We need instant access to the things we like to do.</p>
                    <p>Convunity will showcase a lobby-type format in which the user will see available users ready to practice or ready to help others practice.</p>
                    <Link to='/register' className="link"><div>Join for Beta Testing</div></Link>
                </div>
            </div>
            <div className="main__container">
                <img className="main__container__image" src={quote3} alt="quote bubble"/>
                <div className="main__container__elements">
                    <h3>Convunity at a glimpse...</h3>
                    <p>We are an easy-to-use video chat app.</p>
                    <p>We are not a beginners app. Basic conversational skills are required.</p>
                    <Link to='/register' className="link"><div>Join for Beta Testing</div></Link>
                </div>
            </div>
        </section>
        <footer className="footer">
            <a className="footer__link" href="https://github.com/fmatamoros202" target="_blank" rel="noreferrer">Click this text to learn more about the creator of Convunity.</a>
            <img src={logoWhite} className="footer__logo" alt="convunity logo"/>
        </footer>
        </>
    );
}

export default Landing;