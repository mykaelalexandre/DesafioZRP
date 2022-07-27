const axios = require('axios')
const express = require('express')
const cors = require('cors');


const port = 3003

const app = express()

app.use(express.json())
app.use(cors())


app.get('/', async (request, response) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return response.json( data )
})


app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})