const express = require("express");
const dotenv = require("dotenv");
const {getContacts} = require("./hubspotService/hubspotService");

// Setting for running server
dotenv.config();
const port = process.env.PORT || 3030;
const app = express();

app.get('/contacts', (req, res)=>{
    const contact =  getContacts()
    console.log(contact)
    res.send(`query: ${JSON.stringify(contact)}`)
})


// Run server
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})