const joi = require('joi');

const swaggerschemasPOST = joi.object().keys({
  title: joi.string().trim().min(3).max(100)
    .required(),
  description: joi.string().trim().min(1).max(5000)
    .required(),
  published: joi.boolean(),
});
const swaggerschemasPUT = joi.object().keys({
  title: joi.string().trim().min(3).max(100)
    .required(),
  description: joi.string().trim().min(1).max(5000)
    .required(),
  published: joi.boolean(),
});
module.exports = {
  swaggerschemasPOST,
  swaggerschemasPUT,
};
