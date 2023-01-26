const { urlencoded } = require('express');
const express = require('express')
const app = express()
const fs = require('fs')
var bodyParser = require('body-parser');



var cors = require('cors')
app.use(cors())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// content = {name:"don",description:"No description"}

// let previous


// fs.readFile('file/service.json',(err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     previous = JSON.parse(data);
//     previous.push(content)
//     previous = JSON.stringify(previous)
//         fs.writeFile('file/service.json',previous, (err) => {
//         if (err) throw err;
//             console.log("saved");
//         });
//   })

// content2 = {name:"don2",description:"No description2"}
// content2 = JSON.stringify(content2)
// app.get("/",function(req,res){
//     fs.readFile('file/service.json', (error,data) =>{
//         if(error){
//             console.log(error);
//             return;
//         }
//     })
// })


// content = {name:"don",description:"No description"}

// let service = JSON.parse(fs.readFileSync('file/service.json'));
// console.log(service)
// service.push(content)
// fs.writeFileSync('file/service.json', JSON.stringify(service));

// let service2 = JSON.parse(fs.readFileSync('file/service.json'));
// console.log(service2[service2.length - 1]);

app.get('/', function(req,res){
    let service =(fs.readFileSync('file/service.txt'));
    res.send(service);
})

app.post('/hero', function(req,res){
    let service = JSON.parse(fs.readFileSync('file/service.txt'));
    service.push(req.body)
    console.log(service)
    fs.writeFileSync('file/service.txt', JSON.stringify(service));
    setTimeout(3000)
    res.send(JSON.stringify(service));
})


app.listen(3000,()=>{
    console.log("server is running");
})

