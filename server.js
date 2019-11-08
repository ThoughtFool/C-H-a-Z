const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

// View Engine (ejs):
app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes:
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/game", require("./routes/game"));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, "public")));

// app.use('/public', express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));