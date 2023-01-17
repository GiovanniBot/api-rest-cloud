const express = require("express");
const { connectToDb } = require("./db");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    version: "1.0",
    message: "Welcome to my RESTful API project. You can send a GET request to the endpoint /person/ to see the object pattern and use all the functionalities of this API. Try it yourself and have fun!",
    endpoints: [
      {
        path: "/person",
        methods: ["GET", "POST", "PATCH", "DELETE"]
      },
      {
        path: "/",
        methods: "GET"
      }
    ]
  });
});

app.use((req, res) => {
  req.status(404).render("404");
});

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
