import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('sucky sucky 20 bucky?')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})