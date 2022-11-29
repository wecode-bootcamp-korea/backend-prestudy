const http = require("http")
const fs = require("fs")

const server = http.createServer();

const httpRequestListener = (request, response) => {
  const { url, method } = request
  
  if (method === 'GET' && url === '/ping') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({message : 'pong'}))
  }

  if (method === 'GET' && url === '/') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({message : 'Hello! This is Main Page 🙌'}))
  }

  if (method === 'GET' && url === '/signin') {
    const signinPage = fs.readFileSync('./signin.html')
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end(signinPage)
  }

  if (method === 'GET' && url === '/lists') {
    const listPage = fs.readFileSync('./user-list.html')
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.end(listPage)
  }

  if (method === 'POST' && url === '/signin') {
    let body = ''
    
    request.on('data', (data) => {
      body += data;
    })

    request.on('end', () => {
      const user = JSON.parse(body)
      const { email, password, realEmail, realPassword } = user
      if ( email === realEmail && password === realPassword ) {
        response.writeHead(200, { 'Location': './user-list.html'})
        response.end()
      }
    })
  }  
}

server.on("request", httpRequestListener)

server.listen(3000, '127.0.0.1' ,() => {
  console.log(`Listening on Port 3000`);
});