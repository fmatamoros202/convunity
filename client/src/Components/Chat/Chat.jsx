import React from 'react';
import {Link} from 'react-router-dom';

function Chat(props) {
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