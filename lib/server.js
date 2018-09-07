import '@babel/polyfill'
import service from './service/service'
// import silence from './silence/silence'

import WebSocket from 'ws'
const wss = new WebSocket.Server({
  host: '127.0.0.1',
  port: 1920
})

// wss server
wss.on('connection', ws => {
  //console.log('connection')
  ws.on('message', message => {
    const messageObject = JSON.parse(message)
    switch(messageObject.type) {
      case 'version':
        return ws.send('0.0.1')
      default:
        return resolveRequest(ws, messageObject)
    }
  })
})

wss.on('listening', () => {
  //console.log(`listen`)
})

const resolveRequest = async (ws, input) => {
  try {
    const data = await service(input)
    ws.send(JSON.stringify(data))
  } catch(err) {
    ws.send(JSON.stringify(err))
  }
}

export default wss
