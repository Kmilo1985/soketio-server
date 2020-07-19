const path = require('path')
const express = require('express');
const app = express();
const { listen } = require('socket.io');

// settings configurar servidor
app.set('port', process.env.PORT || 3000);

// static
app.use(express.static(path.join(__dirname, 'public')));

// inicializamos el servidor
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})

// uso de socket con socketIo

// webSocket
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('New conection', socket.id);
})