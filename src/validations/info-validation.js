const Joi = require("joi");

const info = {
    query: Joi.object().keys({
        error: Joi.boolean(),
    }),
};

module.exports = {
    info,
};