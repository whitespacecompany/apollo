import WebSocket from 'ws'

//server
import server from './server'

describe('server', () => {
  let client
  let connection

  beforeEach(done => {
    client = new WebSocket('http://127.0.0.1:1920/')

    client.on('open', () => {
      connection = 'established'
      done()
    })
  })

  afterEach(() => {
    client.close()
  })

  afterAll(() => {
    server.close()
  })
  
  test('establishes connection', () => {
    expect(connection).toEqual('established')
  })

  test('responds to version request', done => {
    client.send(JSON.stringify({ type: 'version' }))
    client.on('message', response => {
      expect(response).toBe('0.0.1')
      done()
    })
  })

  test('throws when no file is received', done => {
    client.send(JSON.stringify({ type: 'moi' }))
    client.on('message', response => {
      expect(JSON.parse(response)).toEqual({ message: 'fail service' })
      done()
    })
  })
})
