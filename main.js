// const EventEmitter = require('node:events');
// const myEvent = new EventEmitter();

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connectDb = require('./database/db')
require("dotenv").config();
const PORT = process.env.PORT;

const routes = require("./routes/web");
app.use(bodyParser.json());


app.use(routes);
 
app.set('view engine', 'pug');

// myEvent.on('test-event', function(data){
//     console.log("this is first listner");
//     console.log(data);
// })

// app.get('/', (req, res) => {
//     // myEvent.emit('test-event', {name: "burhan"})
//     res.send("hello world");
// });


connectDb().then(() =>{ 
    app.listen(PORT, ()=>{
        console.log(`server is running at http://localhost:${PORT}`)
    })
})
