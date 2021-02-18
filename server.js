//Dependencies
const express = require("express");

//Creating an instance of express
const app = express();
const PORT = process.env.PORT || 8080;

//Require routes and use.
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"))