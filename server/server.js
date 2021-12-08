const express = require('express');
// const {ExpressPeerServer} = require('peer'); Needed when adding the peerjs server to the express server.
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
    pingTimeout: 2000,
    cors:{
        origin: '*',
        methods: ['GET','POST']
    }
});


app.use(cors());

const PORT = process.env.PORT || 5000;

// needed when using peerjs server in tandem with express server

// const peerServer = ExpressPeerServer(server,{
//     debug: true,
//     path: '/myapp'
// })

// app.use('/', peerServer);

app.get('/', (req, res)=>{
    res.send('Server is running.')
});

io.on('connection', socket=>{
    socket.on('join-room', (room, userId)=>{
        // console.log(room, userId) This checks the room and user that need to connect
        socket.join(room)
        socket.to(room).emit('user-connected', userId)
    })
})


server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})