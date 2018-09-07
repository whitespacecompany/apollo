import encryption from './encryption'

describe('encryption', () => {
  test('throws when no file is received', async () => {
    let response
    try {
      response = await encryption({
        type: 'not_media',
        data: 'moi'
      })
    } catch(err) {
      response = err
    }

    expect(response).toEqual({ message: 'fail encryption' })
  })

  test('returns encrypted data', async () => {
    const response = await encryption({
      type: 'media',
      data: 'moi'
    })

    expect(response).toEqual({ process: 'complete' })
  })
})
