const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();

// Routers
const { userRouter } = require("./routes/users.routes");
const { linkRouter } = require("./routes/links.routes");
const { iconsRouter } = require("./routes/icons.routes");
const { categoriesRouter } = require("./routes/categories.routes");
const { productsRouter } = require("./routes/products.routes");
const { userCartRouter } = require("./routes/userCart.routes");
const { productsLoadedRouter } = require("./routes/productsLoaded.routes");

app.use(cors());

// const server = http.createServer(app);

// const { Server } = require("socket.io");

// enable JSON incoming data
app.use(express.json());

/* const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", socket => {
  socket.on("send_message", data => {
    // socket.broadcast.emit("receive_message", data);
    console.log(data);
  });
}); */

// categories
app.use("/api/v1/categories", categoriesRouter);

// links
app.use("/api/v1/links", linkRouter);

// users
app.use("/api/v1/users", userRouter);

// products
app.use("/api/v1/products", productsRouter);

// userCart
app.use("/api/v1/userCart", userCartRouter);

// productsLoaded
app.use("/api/v1/loadedProducts", productsLoadedRouter);

// icons
app.use("/api/v1/icons", iconsRouter);

app.use((err, req, res, next) => {
  /**
   * este middleware fuera de la ruta necesita que
   * next( something ) contenga un argumento
   */
  const status = err.statusCode || 500;
  // res.status(status);

  res.status(status).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = { app };
