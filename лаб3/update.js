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

        const findOneAndUpdateResult = await col.findOneAndUpdate(
            { age: 24 },
            { $set: { age: 25 } },
            { returnOriginal: false }
        );
        const updateManyResult = await col.updateMany(
            { name: "Alex" },
            { $set: { name: "Bob" } }
        );
        console.log('Ім`я користувача оновленоs:', updateManyResult.modifiedCount);

        // Update one document
        const updateOneResult = await col.updateOne(
            { name: "Max" },
            { $set: { name: "Max Zheleznyak", age: 33 } }
        );
        console.log('Дані користувача оновлено:', updateOneResult.modifiedCount);
    } finally {
        await client.close();
    }
}

run().catch(console.error);