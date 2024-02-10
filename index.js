const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Socket Lover!')
})

const io = new Server(httpServer, {
    path: "/socket",
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("New Client Connected with ID", socket.id)
    console.log("Socket Token", socket.handshake.auth.token)
    socket.send("Connected")
});

httpServer.listen(3000);