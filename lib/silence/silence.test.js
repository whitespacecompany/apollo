import silence from './silence'

describe('silence', () => {
  test('throws when no file is received', async () => {
    let response
    try {
      response = await silence({
        type: 'not_media',
        data: 'moi'
      })
    } catch(err) {
      response = err
    }

    expect(response).toEqual({ message: 'fail silence' })
  })

  test('returns encrypted data', async () => {
    const response = await silence({
      type: 'media',
      data: 'moi'
    })

    expect(response).toEqual({ process: 'complete' })
  })
})
