// import silence from '../silence/silence'
// import encryption from '../encryption/encryption'

const google = async input => {
  return { transcript: 'complete' }
}

export const transcript = async input => {
  return { transcript: 'received' }
}

const service = async input => {
  if(!input || input.type !== 'media') {
    throw { message: 'fail service' }
  }

  return await google(input.data)
}
export default service
