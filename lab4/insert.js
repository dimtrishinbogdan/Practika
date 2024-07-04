const mongoose = require("mongoose");

// Connection URL and database name
const url = "mongodb://localhost:27017";
const dbName = "usersdb";

// Define the User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

async function run() {
    try {
        await mongoose.connect(`${url}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Підключено до сервера");

        let users = await User.insertMany([
            { name: "Dima", age: 21 },
            { name: "Zabarovskyi", age: 21 },
            { name: "Alex", age: 24 },
        ]);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection when done
        await mongoose.connection.close();
    }
}

run().catch(console.error);