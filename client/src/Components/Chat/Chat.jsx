import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import  io  from 'socket.io-client';
import  Peer  from 'simple-peer';

function Chat(props) {

    const socket = io('https://convunity.herokuapp.com');

    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] =useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');
    const [idToCall, setIdToCall] = useState('');

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(()=>{
        const socket = io('https://convunity.herokuapp.com');
        navigator.mediaDevices.getUserMedia({video:true, audio:true})
            .then((currentStream)=>{
                setStream(currentStream)

                myVideo.current.srcObject = currentStream;
            });
        
        socket.on('me', (id)=>{
            setMe(id)
        });
        socket.on('calluser', ({ from, name: callerName, signal })=>{
            setCall({isReceivedCall: true, from, name: callerName, signal})
        });
    }, []);

    const answerCall = ()=>{
        setCallAccepted(true);

        const peer = new Peer({initiator:false, trickle:false, stream});

        peer.on('signal', (data)=>{
            socket.emit('answercall', {signal:data, to:call.from});
        });

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })

        peer.signal(call.signal);

        connectionRef.current = peer;
    }

    const callUser = (id)=>{
        const peer = new Peer({initiator:true, trickle:false, stream});

        peer.on('signal', (data)=>{
            socket.emit('calluser', {userToCall: id, signalData: data, from: me, name});
        });

        peer.on('stream', (currentStream)=>{
            userVideo.current.srcObject = currentStream;
        })

        socket.on('callaccepted', (signal)=>{
            setCallAccepted(true);

            peer.signal(signal);
        })

        connectionRef.current = peer;
    }

    const leaveCall = () =>{
        setCallEnded(true);
        connectionRef.current.destroy();


    }
    console.log(me);
    return (
        <>
            <h1>Video Chat</h1>
            <h2>Hello {name || 'User'}</h2>
            <p>Your id is {me}</p>
            <div>
                {
                    stream && (
                        <video ref={myVideo} autoPlay muted playsInline width="250" height="250">
                        </video>
                    )
                }
                {
                    callAccepted && !callEnded && (
                        <>
                        <h3>Hi! {call.name || 'User'}</h3>
                        <video  ref={userVideo} autoPlay playsInline width="250" height="250">
                        </video>
                        </>
                    )
                }
                <section>
                    {/* <form> */}
                        <label>Name</label>
                        <input placeholder="Please write your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                        <label>Make a Call</label>
                        <input placeholder ="Id to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)}></input>
                        {
                            callAccepted && !callEnded ? (
                                
                                <button onClick={leaveCall}>Hang Up</button>
                                
                            ):(
                                <button onClick={()=>{callUser(idToCall)}}>Call</button>
                            )
                        }
                    {/* </form> */}
                </section>
                <>
                    {call.isReceivedCall && !callAccepted && (
                        <div>
                            <p>{call.name} is calling:</p>
                            <button onClick={answerCall}>Answer Call</button>
                        </div>
                    )
                    
                    }
                </>
            </div>
            <Link to='/dashboard'><div>End Call</div></Link>
        </>
    );
}

export default Chat;