const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017";
const dbName = "usersdb";

async function run() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("ϳ�������� �� �������");

        const db = client.db(dbName);
        const col = db.collection('users');
       
        // Delete one document
        const deleteMax = await col.deleteOne({ name: "Max" });
        console.log('��������� ���������� Max:', deleteMax.deletedCount);
        // Delete one document
        const deleteZheleznyak = await col.deleteOne({ name: "Zheleznyak" });
        console.log('��������� ���������� Zheleznyak:', deleteZheleznyak.deletedCount);

        const findAndDelete24 = await col.findOneAndDelete({ age: 24 });
         console.log('��������� ���������� � ���� 24 ����', findAndDelete24);
    } finally {
        await client.close();
    }
}

run().catch(console.error);