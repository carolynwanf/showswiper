const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser');
const app = express();


//initializing server
var server = app.listen(4000, () => console.log('Running on port 4000'));

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});


// events and endpoints
const SEND_WEIGHTS = 'sendWeights'
const UPDATE_WEIGHTS = 'updateWeights'

// posting weights data to rooms when necessary (doesn't handle things that are displayed differently for the two users)
// receiving data writing to json when necessary
io.on('connection', (socket) => {
    const {roomId} = socket.handshake.query;

    // io.in(roomId).emit(SEND_WEIGHTS, weights)

    // socket.on(SEND_WEIGHTS, (data) = {
    //     // modify weights based on data.genres
    //     // emit SEND_WEIGHTS with new weights data
    // }) 
})


