import React from 'react';
import {Link} from 'react-router-dom';
import { io } from 'socket.io-client';

function Chat(props) {
    // console.log(props.match.url)

    const socket = io('http://localhost:8080')
    socket.on('connect', ()=>{
        console.log(socket.id)
    })
    const room = props.match.url

    socket.emit('join-room', room , socket.id)
    return (
        <>
            <h1>Video Chat</h1>
            <div>
                <video width="250" height="250" poster=''>
                    <source src=''/>
                </video>
                <video width="250" height="250">
                    <source src='' />
                </video>
            </div>
            <Link to='/dashboard'><div>End Call</div></Link>
        </>
    );
}

export default Chat;