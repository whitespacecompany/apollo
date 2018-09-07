import service, {transcript} from './service'

describe('service', () => {
  test('throws when no file is received', async () => {
    let response
    try {
      response = await service({
        type: 'not_media',
        data: 'moi'
      })
    } catch(err) {
      response = err
    }

    expect(response).toEqual({ message: 'fail service' })
  })

  test('returns encrypted data', async () => {
    const response = await service({
      type: 'media',
      data: 'moi'
    })

    expect(response).toEqual({ transcript: 'complete' })
  })

  test('sends file to google', async () => {
    const response = await transcript({
      data: 'moi'
    })

    expect(response).toEqual({ transcript: 'received' })
  })
})
