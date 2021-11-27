const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const { createSocket } = require('dgram');

const io = require('socket.io')(server, {
    cors:{
        origin: server,
        methods: ['GET','POST']
    }
});

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.send('Server is running.');
})

io.on('connection', (socket)=>{
    // socket.emit('me', socket.id);
    // console.log(socket.id);
    socket.nickname = "fer"

    // socket.on('disconnect', ()=>{
    //     socket.broadcast.emit('')
    // })

    // socket.on('custom-event', (number, string)=>{
    //     console.log(number,string);
    // })
    socket.on('join-room', room =>{
        socket.join(room);
        console.log(room);
        console.log(socket.id)
    })


})

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})