const express = require('express')
const app = express();

app.use(express.static('public'))
app.listen(8888, () => {
    console.log(`Aye must be the monaay!`)
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})