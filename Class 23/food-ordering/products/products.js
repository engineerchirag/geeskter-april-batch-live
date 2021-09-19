const express = require('express')
const router = express.Router()
const controller = require('./controllers/products-controller')
const validator = require('./validators/product-validator')

router.get('/', controller.getProducts)
router.post('/', validator.validateSchema, controller.createProduct)

module.exports = router