const http = require('http');

const server = http.createServer((request, response) => {
  //listen to requests
  // console.log('headers', request.headers)
  console.log('method', request.method)
  console.log('url', request.url)
  const user = {
    name: 'Bulbasaur', 
    type: 'grass',
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
})

server.listen(3000);
