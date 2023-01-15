const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API Routes.
app.get("/", (req, res, next) => {
  res.json({
    message: "iai",
  });
});

// Future-proof snippet for Mongoose 7.
mongoose.set('strictQuery', false);

// DB Connection.
const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);
if ((dbUsername && dbPassword).length < 1) return console.log('Enviroment variables wasn\'t defined.');
const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@api-rest.nvbu4oa.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(dbQueryStr)
    .then(() => {
        try {
            app.listen(port, () => console.log(`MongoDB Atlas connected!`));
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err);
    });