const express = require('express');
const path = require('path');
const http = require('http')
const port = process.env.PORT || 3000; 
const socket = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, 'public')));

let cnt = 0;
setInterval(()=>{
  cnt ++;
  io.emit('student message', cnt)
}, 1000)



server.listen(port, () => {
  console.log('Socket IO server listening at port %d', port);
});
