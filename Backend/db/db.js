const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log("DB Connected successfully!");
        })
        .catch((error) => {
            console.error("Error connecting to DB:", error);
        });
}

module.exports = connectToDb;


