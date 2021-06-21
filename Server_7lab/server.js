const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  ws.send("Здравствуйте, я неголосовой ассистент \"Олег\"")
  console.log('Client connected');
  ws.on("message", function(data){
      if (data == "Привет"){
        console.log("Incoming message:", data)
        ws.send("И тебе привет")
        console.log("Out message: И тебе привет" )
      }
      else {ws.send(data)}
  })
  ws.on('close', () => console.log('Client disconnected'));
});