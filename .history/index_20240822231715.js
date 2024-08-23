const express = require("express");
const dotenv = require("dotenv");
const {getContacts} = require("./hubspotService/hubspotService");

// Setting for running server
dotenv.config();
const port = process.env.PORT || 3030;
const app = express();

getContacts()
.then(console.log);

// Run server
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})