const express = require("express");
const { connectToDb } = require("./db");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const personRoutes = require("./routes/personRoutes");
const indexRoute = require("./routes/indexRoute");
const notFindRoute = require("./routes/notFindRoute");

app.use("/person", personRoutes);
app.use("/", indexRoute);
app.use(notFindRoute);

connectToDb()
  .then(() => {
    try {
      app.listen(port, () =>
        console.log(`Connection with Atlas MongoDB established`)
      );
    } catch (err) {
      console.log(err);
    }
  })
  .catch((err) => {
    console.log(err);
  });
