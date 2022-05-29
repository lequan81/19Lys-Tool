// server.js
const express = require('express')
const app = express()
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const serverRouter = jsonServer.router(path.join(__dirname, '/data/db.json'))
const middlewares = jsonServer.defaults()
const appRouter = express.Router();

const appPort = 3000;
const serverPort = 3001;

server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
  res.status(200).jsonp({
    success: true,
  })
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    // req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.use(serverRouter)
server.listen(serverPort, () => {
  console.log('JSON Server is running')
})

appRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  app.use(express.static(path.join(__dirname, "public")));
});

appRouter.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname + '/create.html'));
  app.use(express.static(path.join(__dirname, "public")));
});

appRouter.get('/details', function (req, res) {
  res.sendFile(path.join(__dirname + '/details.html'));
  app.use(express.static(path.join(__dirname, "public")));
});

//add the router
app.use('/', appRouter);
app.listen(appPort, () => {
  console.log(`Server started on http://localhost:${appPort}`);
});