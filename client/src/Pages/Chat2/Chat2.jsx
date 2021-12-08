import React, { useRef, useState, useEffect} from 'react';
import './Chat2.scss';
import logo from '../../assets/logo/logo-main.png'
import {Link} from 'react-router-dom';
import  io  from 'socket.io-client';
import Peer from 'peerjs';

function Chat(props) {


    const myVideo = useRef();
    const userVideo = useRef()


    const [stream, setStream] = useState(null);
    const [userStream, setUserStream] = useState(null);
    const [Id, setId] = useState('')

    useEffect((props)=>{
        navigator.mediaDevices.getUserMedia({video:true, audio:true})
        .then((currentStream)=>{
            setStream(currentStream)
            myVideo.current.srcObject = currentStream

            const socket = io('https://convunity.herokuapp.com');

            const myPeer = new Peer({
                // host: '/',
                // port: '5001',
            })
            const room = '/chat'

            myPeer.on('open', id =>{
                socket.emit('join-room', room , id)
                setId(id)
            })

            myPeer.on('call', call=>{
                call.answer(currentStream)
                console.log('test')
                call.on('stream', userVideoStream=>{
                    userVideo.current.srcObject =userVideoStream
                })
            })

            socket.on('user-connected', userId=>{
                console.log('User connected: '+ userId)
                const call = myPeer.call(userId,currentStream)
                call.on('stream', stream=>{
                    setUserStream(stream)
                    userVideo.current.srcObject = stream
                })
                call.on('close', ()=>{
                    setUserStream(null);
                })
        
            })
        })

    }, []);



    return (
        <>
        <div>
            <header className="header">
                <div>
                    <img src={logo} className="chat-logo" alt="convunity logo"/>
                </div>
            </header>
            <div className="chat-container">
                <div className="chat-container__videos">
                    <div className="video-container">
                        <h2 className="video-container__header">Hello User1</h2>
                        <p className="video-container__text">Your id is <span>{Id}</span></p>
                        <video className="video-container__video video-container__video--user" ref={myVideo} autoPlay muted playsInline width="250" height="250">
                        </video>
                    </div>
                    <div className="video-container">
                        <video  className="video-container__video" ref ={userVideo} autoPlay playsInline width="250" height="250">
                        </video>
                        <h2 className="video-container__header--user2">Hi!! User2</h2>
                    </div>
                </div>
                <Link className="link"to='/dashboard'><div>End Call</div></Link>
            </div>
        </div>
        </>
    );
}

export default Chat;