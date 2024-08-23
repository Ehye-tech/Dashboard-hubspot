
async function getContacts(){
    try {   
        return await getAllContacts()
        .then((d) => compareTimeStamps(d))
    } catch (error) {
        console.error(`[Controller Error]: ${error}`)
    }
}