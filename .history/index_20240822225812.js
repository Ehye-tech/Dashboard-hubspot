const express = require("express");
const dotenv = require("dotenv");
const {getAllContacts} = require("./service/contactService");
const {compareTimeStamps}  = require("./service/TimeService")

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

import {Express,Request,Response} from 'express'
function routes(app: Express) {
    app.get('/healthcheck',(req:Request, res:Response)=>res.sendStatus(200))
}



// Run server
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})
