const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

app.use((req, res) => {
  res.status(200).json({ message: "Welcome to my RESTful API project. You can send a GET request to the endpoint /person/ to see the object pattern and use all the functionalities of this API. Try it yourself and have fun!" });
});

app.use("/*", (req, res) => {
  req.status(404).render("404");
});

// * Future-proof snippet for Mongoose 7.
mongoose.set("strictQuery", false);

const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);
if (dbUsername.trim().length === 0 && dbPassword.trim().length === 0) {
    console.log("Error: Couldn't find dbUsername or dbPassword enviroment variables.");
    return;
}
const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@api-rest.nvbu4oa.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(dbQueryStr)
  .then(() => {
    try {
      app.listen(port, () => console.log(`Atlas MongoDB connected!`));
    } catch (err) {
      console.log(err);
    }
  })
  .catch((err) => {
    console.log(err);
  });