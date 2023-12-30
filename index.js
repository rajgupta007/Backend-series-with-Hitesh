require('dotenv').config()
const express = require('express')

const app = express()

const port = 6000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('this is Raj Twitter handle kingpolo404')
})
app.get('/login', (req, res) => {
    res.send('<h1>please login at my youtube channel Anyone Can Code ACC </h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>Anyone Can Code ✨✨✨ </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})