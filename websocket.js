const http = require('http')
const server = http.createServer((req, res) => {})

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

server.listen(3001, () => {
  console.log('WebSocket server listening on port 3001')
})
