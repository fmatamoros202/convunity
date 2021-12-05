const express = require('express');
// const {ExpressPeerServer} = require('peer');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
// const {v4: uuidV4 } = require('uuid');

const io = require('socket.io')(server, {
    pingTimeout: 2000,
    cors:{
        origin: '*',
        methods: ['GET','POST']
    }
});


app.use(cors());

const PORT = process.env.PORT || 5000;

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
        console.log(room, userId)
        socket.join(room)
        socket.to(room).emit('user-connected', userId)
    })
})


server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})