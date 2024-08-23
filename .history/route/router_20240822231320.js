const express = require('express')

const app = express()

app.get('/test/:id',(req, res)=>{
    const {id} = req.params
    console.log(id)
    res.send(`query: ${JSON.stringify(id)}`)
})