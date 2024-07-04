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

        const deleteMax = await User.deleteOne({ name: "Max" });
        console.log('Видалений користувач Max', deleteMax.deletedCount);

        const deleteZheleznyak = await User.deleteOne({ name: "Zheleznyak" });
        console.log('Видалений користувач Zheleznyak', deleteZheleznyak.deletedCount);



        const findAndDelete24 = await User.findOneAndDelete({ age: 24 });
        console.log('Видалений користувач з віком 24 роки', findAndDeleteResult);



    } catch (err) {
        console.error(err);
    } finally {
        await mongoose.connection.close();
    }
}

run().catch(console.error);