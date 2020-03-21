const http = require('http');
const fs = require('fs');
const myinfoSampleData = fs.readFileSync('./data.json', 'utf8');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(myinfoSampleData);
});

server.listen(8080);
