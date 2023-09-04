
let express = require('express');
let app = express();
require('./dbConnection');
let router = require('./router/router');
let port = process.env.port || 3000;

let http = require ('http').createServer(app);
let io = require ('socket.io')(http);
const {Socket} = require('socket.io');



app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router)

io.on('connection',(socket)=>{
    console.log('User has Connected');
    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});


http.listen(port, ()=>{
    console.log('express server started');
});


