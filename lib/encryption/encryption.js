const process = async data => {
  return { process: 'complete' }
}

const encryption = async input => {
  if(!input || input.type !== 'media') {
    throw { message: 'fail encryption' }
  }

  return await process(input.data)
}
export default encryption
