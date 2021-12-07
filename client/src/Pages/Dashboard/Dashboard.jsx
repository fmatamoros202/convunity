import React from 'react';
import './Dashboard.scss';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo/logo-main.png'
import logoWhite from '../../assets/logo/logo-main-w.png'
import avatar from '../../assets/images/avatar.svg';


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
                    <h1 className="dashboard-main__title">Welcome User1</h1>
                    <div className="dashboard-main__container">
                        <div className="dashboard-main-inner-container">
                            <img className="dashboard-main__container__image" src={avatar} alt="A woman chatting on her phone"></img>
                            <div className="dashboard-main__container__info">
                                <p className ="dashboard-subtext">Click the button below to join User2 in conversation</p>
                                <Link className="link" to='/chat'><div>Lobby</div></Link>
                            </div>
                        </div>
                        <div className="dashboard-main__container__box">Learning: French</div>
                        <div className="dashboard-main__container__box">Fluent: English</div>
                    </div>
                </div>
                <footer className="dashboard-footer">
                    <Link to="/">
                        <img src={logoWhite} className="dashboard-footer__logo" alt="convunity logo"/>
                    </Link>
                </footer>
            </>
    );
}

export default Dashboard;