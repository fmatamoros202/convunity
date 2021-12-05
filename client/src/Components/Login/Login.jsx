import React from 'react';
import './Login.scss';
import logo from '../../assets/logo/logo-main.png';

function Login(props) {

    let onSubmit = (e)=>{
        e.preventDefault();
        props.props.history.push("dashboard");
        console.log(props);
    }

    if(!props.show){
        return null
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <img src={logo} className="modal-header__logo" alt="convunity logo"/>
                    <h3 className='modal-title'>Log-In</h3>
                </div>
                <div className='modal-body'>
                    <form className ="modal-form" onSubmit={onSubmit}>
                        <div className="modal-form-inner-container">
                            <div className="modal-input-form">
                                <input className="modal-form__input" placeholder="User Name"></input>
                                <input className="modal-form__input" placeholder="Password"></input>
                            </div>
                            <button className="modal-form__button">Log in</button>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose}className='modal-close'>Close</button>
                </div>
            </div>
            
        </div>
    );
}

export default Login;