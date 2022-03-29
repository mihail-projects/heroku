import express from 'express'
import axios from 'axios'

const app = express()

app.get('/', (req, res) => {

    var data = JSON.stringify({
        "collection": "collection",
        "database": "database",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1
        }
    });

    var config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-vlnfz/endpoint/data/beta/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'Nm52Pf1FE2JPMpyfdO4HL4nMPWSp6BDbSdbWv8Kdg6wuOqSokthyDuqyDKB2jjYG'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            res.send(JSON.stringify(response.data));
        })
        .catch(function (error) {
            res.send(error);
        });

})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})