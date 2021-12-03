import './Landing.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png';
import logoGirl from '../../assets/images/logo-girl.png';
import quote from '../../assets/images/hero.png';
import quote2 from '../../assets/images/quote.png';
import quote3 from '../../assets/images/quote2.png';

function Landing(props) {

    let onSubmit = (e)=>{
        e.preventDefault();
        props.history.push("dashboard");
    }

    return (
        <>
        <header className="header-section">
            <div className='infobar'>
                <img src={logo} className="logo" alt="convunity logo"/>
                <form className ="form" onSubmit={onSubmit}>
                    <div className="form-inner-container">
                        <div className="input-form">
                            <input className="form__input" placeholder="Username"></input>
                            <input className="form__input" placeholder="Password"></input>
                        </div>
                        <button className="form__button">Log in</button>
                    </div>
                </form>
            </div>
        </header>
        <div className="hero">
            <img className="hero__image" src={quote}/>
            <div className="hero__container">
                <h3>The best app for language fluency!</h3>
                <p></p>
                <Link to='/register' className="link"><div>Sign up for free</div></Link>
            </div>
        </div>
        <section className="main">
            <div className="main__container">
                <img className="main__container__image" src={quote}/>
                <h3>What's Convunity</h3>
                <p></p>
                <Link to='/register' className="link"><div>Sign up for free</div></Link>
            </div>
            <div className="main__container main__container--off-position">
                <img className="main__container__image" src={quote2}/>
                <h3>Convunity Landing Page</h3>
                <p></p>
                <Link to='/register' className="link"><div>Sign up for free</div></Link>
            </div>
            <div className="main__container">
                <img className="main__container__image" src={quote3}/>
                <h3>Convunity Landing Page</h3>
                <p></p>
                <Link to='/register' className="link"><div>Sign up for free</div></Link>
            </div>
        </section>
        <footer className="footer">

        </footer>
        </>
    );
}

export default Landing;