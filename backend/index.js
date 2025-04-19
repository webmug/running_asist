const express = require('express')
const app = express()
const port = 8001

app.get('/', (req, res) => {
 res.send('Running Assist Backend')
})

app.listen(port, () => {
 console.log(`Running Assist backend listening on port ${port}`)
})