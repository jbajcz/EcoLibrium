const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// App setup
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Static files
app.use(express.static('public'));

// Socket setup
io.on('connection', (socket) => {
    console.log('New user connected');

    // Handle game events here

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
