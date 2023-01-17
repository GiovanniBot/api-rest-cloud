const mongoose = require("mongoose");
require("dotenv").config();

const dbUsername = encodeURIComponent(process.env.DB_USER);
const dbPassword = encodeURIComponent(process.env.DB_PW);
if (dbUsername.trim().length === 0 && dbPassword.trim().length === 0) {
    console.log("Error: Couldn't find dbUsername or dbPassword enviroment variables.");
    return;
}
const dbQueryStr = `mongodb+srv://${dbUsername}:${dbPassword}@api-rest.nvbu4oa.mongodb.net/?retryWrites=true&w=majority`;

const connectToDb = () => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(dbQueryStr);
}

module.exports = { connectToDb }