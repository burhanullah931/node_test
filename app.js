

const http = require("http");
const fs = require("fs");
const PORT = 3000

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('pages/home.html', "utf8", (err,data) => {
            console.log(data)
            if(err) throw err;
            res.write(data)
            res.end();
        });
        // res.writeHead(200, { 'Content-Type': 'application/json' });
        // res.end(JSON.stringify({
        //   data: 'Hello World!',
        // }));
    }else
    if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('pages/about.html', 'utf8', (err, data) => {
            if(err) throw err
            res.write(data)
        })
        res.end();
    }else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write("page not found");
        res.end();
    }

})

console.log(`server is running at http://localhost:${PORT}`);

server.listen(PORT);


// const Circle = require('./circle')

// const circle = new Circle();

// console.log(circle.area(5))
// console.log(circle.circum(5))