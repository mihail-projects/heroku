import express from 'express'
import { MongoClient, ServerApiVersion } from 'mongodb'

const app = express()

app.get('/', (req, res) => {

    const uri = "mongodb+srv://mihalisp:s4l4m4ndr4@cluster0.pdytk.mongodb.net/database?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    client.connect(async err => {
        const collection = client.db("database").collection("collection");
        res.sendStatus(await collection.estimatedDocumentCount())
        client.close();
    });

})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})