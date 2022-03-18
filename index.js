import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send('sucky sucky 20 bucky?')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})