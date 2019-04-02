const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const emesa = 'mongodb://localhost/';
const api_port = 3002;
const routes =require("./routes");


const app = express();
const router = express.Router();

mongoose.connect(
  emesa, 
  { useNewUrlParser:true }
);

  let db = mongoose.connection;
  db.once('open', ()=> console.log('Connection to database is established'));
  db.on('error', console.error.bind(console, "Database connection error"));
  
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(logger("dev"));

  mongoose.set('useFindOneAndUpdate', false);
  
  app.use("/api",routes);

  app.listen(api_port, () => console.log(`LISTENING ON PORT ${API_PORT}`));
