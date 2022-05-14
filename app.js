const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

const { userRouter } = require("./routes/users.routers");

app.use(cors());

const server = http.createServer(app);

const { Server } = require("socket.io");

// Utils
const { sequelize } = require("./util/database");

// enable JSON incoming data
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    /*es donde lo voy a escuchar, puerto 3001 */
    methods: ["GET", "POST"],
  },
});

io.on("connection", socket => {
  socket.on("send_message", data => {
    // socket.broadcast.emit("receive_message", data);
    console.log(data);
  });

  app.use("/api/v1/users", userRouter);
});

sequelize
  .authenticate()
  .then(() => console.log("database authenticated"))
  .catch(error => console.log(error));

server.listen(3000, () => {
  console.log("Listen port 3000");
});
