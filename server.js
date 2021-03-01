//Dependencies
const express = require("express");
const path = require("path")

//Creating an instance of express
const app = express();
const PORT = process.env.PORT || 8080;

// Read URL/JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Require routes and use.
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));
app.use(express.static("public"));

// Listening to the PORT
app.listen(PORT, () => {
    console.log(`==> 🌎 App running on http://localhost:${PORT}`);
})