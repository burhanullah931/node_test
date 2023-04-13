
const mongoose = require("mongoose")

async function connectDb(){
  await  mongoose.connect(process.env.DB_HOST + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  });
}

module.exports = connectDb;