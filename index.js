const express = require("express");
const dotenv = require("dotenv");
const {getAllContacts} = require("./service/contactService");
const {
    getDomain,
    filterDomain,
    compareTimeStamps,
    convertTimetoUnix,
} = require('./service/utilService');

// Setting for running server
dotenv.config();
const port = process.env.PORT || 3030;
const app = express();


async function getContacts(){
    try {   
        return await getAllContacts()
        .then((d) => compareTimeStamps(d))
    } catch (error) {
        console.error(`[Controller Error]: ${error}`)
    }
}

getContacts()
.then(console.log);

// Run server
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})