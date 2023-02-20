const express = require('express')
const { getPets,addPet } = require('./pets.controller')
const router = express.Router()

router.get('/', getPets)
router.post('/', addPet)
module.exports = router

