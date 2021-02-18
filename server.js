//Dependencies
const express = require("express");

//Creating an instance of express
const app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));

//Require routes and use.
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"))

// Listening to the PORT
app.listen(PORT, () => {
    console.log(`==> 🌎 App running on http://localhost:${PORT}`);
})