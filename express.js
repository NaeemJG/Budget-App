const express = require('express')
const app = express();

app.use(express.static('public'))
app.listen(process.env.PORT, () => {
    console.log(`Aye must be the monaay!`)
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})