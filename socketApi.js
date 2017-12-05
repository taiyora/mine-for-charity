var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

// Code for updating online user count
var users_online = 0;

io.on('connection', function(socket) {
    users_online++;
    io.sockets.emit('users_online', users_online);

    socket.on('disconnect', function() {
        users_online--;
        io.sockets.emit('users_online', users_online);
    });
});

// Code for updating network stats
var request = require('request');

function updateStats() {
    setInterval(function() {
        request('https://api.coinhive.com/stats/site?secret=' + process.env.CH_SECRET, function(err, res, body) {
            if (!err && res.statusCode == 200) {
                body_json = JSON.parse(body);
                io.sockets.emit('hashes_rate', body_json.hashesPerSecond);
                io.sockets.emit('hashes_total', body_json.hashesTotal);
            }
        });
    }, 10000);
}

updateStats();

module.exports = socketApi;
