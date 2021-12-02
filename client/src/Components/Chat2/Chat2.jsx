import React, { useRef, useState, useEffect} from 'react';
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
                host: '/',
                port: '5001'
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
            <h1>Video Chat</h1>
            <h2>Hello User1</h2>
            <p>Your id is {Id}</p>
            <div>
                <video  ref={myVideo} autoPlay muted playsInline width="250" height="250">
                </video>
                <h3>Hi! User2</h3>
                <video   ref ={userVideo} autoPlay playsInline width="250" height="250">
                </video>
            </div>
            <Link to='/dashboard'><div>End Call</div></Link>
        </>
    );
}

export default Chat;