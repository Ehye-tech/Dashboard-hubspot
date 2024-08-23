const {getAllContacts} = require("../service/contactService");
const {compareTimeStamps}  = require("../service/TimeService")

async function getContacts(){
    try {   
        return await getAllContacts()
        .then((d) => compareTimeStamps(d))
    } catch (error) {
        console.error(`[Controller Error]: ${error}`)
    }
}