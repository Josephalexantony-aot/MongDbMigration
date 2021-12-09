const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')
router.get('/migrate', eventController.init)

module.exports = router  
