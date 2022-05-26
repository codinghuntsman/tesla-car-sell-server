const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');



//-------Middleware---------
app.use(cors());
app.use(express.json());

// pass: gHlseJm07Ctonez7
// name: tesla-manufacturing

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1uon8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);

async function run() {

    try {
        await client.connect();
        console.log("server connected");
        const productCollection = client.db("tesla-manufacturing").collection("products");
        const orderCollection = client.db("tesla-manufacturing").collection("orders");


        //--------Get all data from database----------
        app.get('/products', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });



        //--------add a new booking or create--------------------
        app.post('/purchase', async (req, res) => {
            const purchaseInfo = req.body;
            const query = { name: purchaseInfo.name, email: purchaseInfo.email, phone: purchaseInfo.phone, quantity: purchaseInfo.quantity, bankAccount: purchaseInfo.bankAccount }
            const result = await orderCollection.insertOne(query);
            res.send(result);
        });

        //-------Get a single Product from database---------
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await productCollection.findOne(query);
            res.send(result);
        });

    }
    finally {
        // await client.close();
    }

}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello from tesla manufacturing !')
})

app.listen(port, () => {
    console.log(`Tesla apps listening on ${port}`)
})