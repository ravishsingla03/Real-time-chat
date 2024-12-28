const http = require('http');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(express.static(path.join(__dirname,"public")));


io.on('connection',(socket)=>{
  socket.on('user-message',(message)=>{
    io.emit('message',message);
  })
})

app.get('/',(req,res)=>{
    res.render(index);
})

server.listen(5000,()=>{
  console.log(`server is created at PORT:5000`)
});