import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

const app = express()

app.get('/', (req, res) => {

    const uri = "mongodb+srv://mihalisp:s4l4m4ndr4@cluster0.pdytk.mongodb.net/database?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const collection = client.db("database").collection("collection");

    client.connect(async err => {
        await collection.estimatedDocumentCount().then(count => {
            res.send(count)
            client.close();
        })
    });

})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})