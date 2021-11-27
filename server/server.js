const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
    cors:{
        origin: '*',
        methods: ['GET','POST']
    }
});

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.send('Server is running.');
})

io.on('connection', (socket)=>{
    socket.emit('me', socket.id);
    console.log(socket.id);

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('')
    })

})

server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})