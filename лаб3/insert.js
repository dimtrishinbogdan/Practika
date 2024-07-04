const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "usersdb";

async function run() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Підключено до сервера");

        const db = client.db(dbName);
        const col = db.collection('users');

        await col.insertMany([
            { name: "Max", age: 21 },
            { name: "Zheleznyak", age: 21 },
            { name: "Alex", age: 24 }
        ]);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

run().catch(console.error);