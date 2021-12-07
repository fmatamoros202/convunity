import React from 'react';
import {useState} from 'react';
import './Login.scss';
import logo from '../../assets/logo/logo-main.png';

function Login(props) {

    const [error, setError] = useState('');

    let onSubmit = (e)=>{
        e.preventDefault();
        if(e.target.username.value.trim() !== "guest" || e.target.password.value.trim()!=="convunity"){
            setError("modal-form__input--error")
            return
        }
        props.props.history.push("dashboard");
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
                                <input className={"modal-form__input "+error} placeholder="User Name" name="username"></input>
                                <input className={"modal-form__input "+error} type="password" placeholder="Password" name="password"></input>
                            </div>
                            <button className="modal-form__button">Log in</button>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <button onClick={props.onClose}className='modal-close'>Back</button>
                </div>
            </div>
            
        </div>
    );
}

export default Login;