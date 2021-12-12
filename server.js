const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const Pizza = require("./models/pizzaModel");
const db = require("./db");
app.use(express.json());
const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/oredersRoute");
const cors = require("cors");
const passportSetup=require('./passport')
//session
app.use(
  cookieSession({ name: "session", keys: ["key"], maxAge: 24 * 60 * 60 * 100 })
);
//passport library
app.use(passport.initialize());
app.use(passport.session());

//cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", ordersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => `server is running on port`);
