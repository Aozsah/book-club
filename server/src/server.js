const mongoose = require("mongoose");
require("dotenv").config();
const fastify = require("fastify")({ logger: true });
const fastifyCors = require("@fastify/cors");
const PORT = process.env.PORT || 3001;

// Mongoose setup
mongoose.set('strictQuery', false);
console.log("**********",process.env.MONGO_CONNECTION_URL)
mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {  
    console.log(`MongoDB connection error: ${err}`);
  } else {
    console.log("Mongoose is connected");
  }
});

mongoose.connection.on("connected", function () {
  console.log("Mongoose default connection is open");
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose default connection has occured " + err + " error");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose default connection is disconnected");
});

// Fastify middleware setup
fastify.register(fastifyCors, {
  origin: "*",
  allowedHeaders:
    "Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range",
  methods: "GET,POST,PUT,DELETE",
});

const userRoutes = require("./routes/user");

userRoutes.forEach((route, index) => {
  fastify.route(route);
});

const bookRoutes = require("./routes/book");

bookRoutes.forEach((route, index) => {
  fastify.route(route);
});

// server
const start = async () => {
  try {
    await fastify.listen(PORT, () => {
      fastify.log.info(`server listening on ${PORT}`);
    });
  } catch (err) {
    fastify.log.error(err);
  }
};

start();
