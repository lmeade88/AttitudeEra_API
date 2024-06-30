const express = require("express")
const app = express()
const PORT = 8000

const wrestlers = {
    "stonecold": {
        "name": "'Stonecold' Steve Austin",
        "birthname": "Steve Williams",
        "birthLocation": "Austin, Texas",
        "finishingMove": "Stonecold Stunner"
    },
    "the undertaker": {
        "name": "The Undertaker",
        "birthname": "Mark Callaway",
        "birthLocation": "Austin, Texas",
        "finishingMove": "Tombtone Piledriver"
    },
    "the rock": {
        "name": "The Rock",
        "birthname": "Dwayne Johnson",
        "birthLocation": "Miami, Florida",
        "finishingMove": "Rock Bottom"
    },
    "NA": {
        "error": "This wrestler was not involved in the Attitude Era"
    }

}

app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/:wrestlerName", (request, response)=>{
    const wrestlersName = request.params.wrestlerName.toLowerCase()
    if(wrestlers[wrestlersName]){
          response.json(wrestlers[wrestlersName])
    }else{
        response.json(wrestlers["NA"])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server RUNNING on ${PORT}`)
})