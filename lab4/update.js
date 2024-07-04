const mongoose = require("mongoose");
const url = "mongodb://localhost:27017";
const dbName = "usersdb";


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

        const findOneAndUpdateResult = await User.findOneAndUpdate(
            { age: 24 },
            { age: 25 },
            { new: true }
        );
        console.log('Дані оновлені:', findOneAndUpdateResult);


        const updateManyResult = await User.updateMany(
            { name: "Alex" },
            { name: "Bob" }
        );
        console.log('Ім`я користувача оновлено:', updateManyResult.nModified);


        const updateOneResult = await User.updateOne(
            { name: "Dima" },
            { name: "Dima Zabarovskyi", age: 33 }
        );
        console.log('Дані користувача оновлено:', updateOneResult.nModified);

    } catch (err) {
        console.error(err);
    } finally {

        await mongoose.connection.close();
    }
}

run().catch(console.error);