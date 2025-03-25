const https = require('http');
const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'data', 'data.json');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/currenttime', function (req, res) {
  res.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label>Your name</label><input type='text' name='name' /><button type='submit'>Submit</button></form>"
  );
});

app.post('/store-user', function (req, res) {
  const name = req.body.name;
  const fileData = fs.readFileSync(pathFile);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(name);
  console.log(existingUsers);
  fs.writeFileSync(pathFile, JSON.stringify(existingUsers));
  res.send('Your name is:' + name + ' ,thats beautiefull!');
});

app.get('/stored-dataUsers', function (req, res) {
  const fileData = fs.readFileSync(pathFile);
  const userNames = JSON.parse(fileData);
  console.log(userNames);
  var htmlCode = '';
  var counter = 1;
  for (const user of userNames) {
    htmlCode += '<li>Name ' + counter + ': ' + user + '</li>';
    counter++;
  }
  htmlCode = '<article><ul>' + htmlCode + '</ul></article>';
  console.log(htmlCode);
  res.send(htmlCode);
});

app.listen(3000);
// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World</h1><br><a href='/currenttime'>Link</a>");
//   }
// }

// const server = https.createServer(handleRequest);
// const hostname = "127.0.0.1";
// const port = 3000;
// server.listen(port, hostname);
