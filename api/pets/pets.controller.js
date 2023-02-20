const petService = require('./pets.service')
const logger = require('../../services/logger.service')

async function getPets(req, res) {
  try {
    logger.debug('Getting Pets')
// console.log(req)
    // let isOneWay = JSON.parse(req.query.isOneWay) 
    // console.log(isOneWay)
    const pets = await petService.query()

    res.json(pets)
  } catch (err) {
    logger.error('Failed to get pets', err)
    res.status(500).send({ err: 'Failed to get pets' })
  }
}

async function addPet(req, res) {
  try {
    logger.debug('Getting Pets')
// console.log(req.query.pet.Segments)
    let pet = JSON.parse(JSON.stringify(req.query.pet) ) 
    console.log(pet)
    const newPet = await petService.save(pet)

    res.json(newPet)
  } catch (err) {
    logger.error('Failed to get pets', err)
    res.status(500).send({ err: 'Failed to get pets' })
  }
}

module.exports = {
  getPets,
  addPet
}
