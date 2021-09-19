const Joi = require('joi')

exports.validateSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(20),
    category: Joi.string().min(5).max(20),
    review: Joi.string().min(5).max(20),
    restaurant_id: Joi.number().max(25)
  })
  
  schema.validate(req)
  next()
}
