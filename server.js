const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();

// View Engine (ejs):
app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes:
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/game", require("./routes/game"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));