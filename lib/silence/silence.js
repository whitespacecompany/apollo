const process = async data => {
  return { process: 'complete' }
}

const silence = async input => {
  if(!input || input.type !== 'media') {
    throw { message: 'fail silence' }
  }

  return await process(input.data)
}
export default silence
