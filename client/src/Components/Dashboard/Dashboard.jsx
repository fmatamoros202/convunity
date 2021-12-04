import React from 'react';
import './Dashboard.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png'
import logoGirl from '../../assets/images/logo-girl.png';


function Dashboard(props) {

    return (
                <>
                <header className="dashboard-header">
                    <div>
                        <Link to="/">
                            <img src={logo} className="dashboard-logo" alt="convunity logo"/>
                        </Link>
                    </div>
                </header>
                <div className="dashboard-main">
                    <h1 className="dashboard-main__title">Welcome User</h1>
                    <div className="dashboard-main__container">
                        <img className="dashboard-main__container__image" src={logoGirl} alt="A woman chatting on her phone"></img>
                        <div className="dashboard-main__container__info">
                            <p className ="dashboard-subtext">Please provide the following information:</p>
                            <Link className="link" to='/chat'><div>Lobby</div></Link>
                        </div>
                    </div>
                </div>
                <footer className="footer">
    
                </footer>
            </>
    );
}

export default Dashboard;