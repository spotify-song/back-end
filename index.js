const app = require("./api/server");
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("a new user just connected");

  socket.on("send_user", (user) => {
    io.emit("send_to_friend", user);
  });
});

server.listen(PORT, () => console.log(`server running in port ${PORT}`));
