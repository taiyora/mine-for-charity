var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

var users_online = 0;

io.on('connection', function(socket) {
    users_online++;
    io.emit('users_online', users_online);

    socket.on('disconnect', function() {
        users_online--;
        io.emit('users_online', users_online);
    });
});

module.exports = socketApi;
