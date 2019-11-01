//Connect to Mongo database
const mongoose = require('mongoose')

//your local database url
//27017 is the default mongoDB port


const connectionString =
    'mongodb+srv://test:1111@avto-ss36s.gcp.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionString, e => {
    if (e) console.log("Db connection error", e);
});
mongoose.connection.on("connected", () => console.log("Db connected"));
mongoose.connection.on("error", e => console.log("Db error", e));




module.exports = mongoose
