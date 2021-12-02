import './Landing.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png';
import logoGirl from '../../assets/images/logo-girl.png';

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
                    <div className="form-inner-elements">
                        <input className="form__input" placeholder="Username"></input>
                        <input className="form__input" placeholder="Password"></input>
                        <button className="form__button">Log in</button>
                    </div>
                </form>
                <Link to='/register' className="link"><div>Sign up for free</div></Link>
            </div>
            <section className="hero">
                <h1>Convunity Landing Page</h1>
            </section>
        </header>
        </>
    );
}

export default Landing;