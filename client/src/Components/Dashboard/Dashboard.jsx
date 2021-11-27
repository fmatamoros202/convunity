import React from 'react';
import {Link} from 'react-router-dom';

function Dashboard(props) {

    return (
        <div>
            <h1>Welcome User</h1>
            <Link to='/chat'><div>Lobby</div></Link>
        </div>
    );
}

export default Dashboard;