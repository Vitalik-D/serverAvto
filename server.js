const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require('morgan');
require("./database");
const app = express();
const PORT = process.env.PORT || 3000;
// Route requires
const product = require("./routes/product");
const phone = require("./routes/phone");
const buy = require("./routes/buy");
const api = require("./routes/api");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,PATCH,POST,DELETE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
// MIDDLEWARE

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.use("/api", api);
app.use("/posts", product);
app.use("/phone", phone);
app.use("/buy", buy);

// Starting Server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
