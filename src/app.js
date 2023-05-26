const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const socketIO = require('socket.io')(server);


app.set('port', process.env.PORT || 3000);

require('./socket')(socketIO);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto ', app.get('port'));
})
