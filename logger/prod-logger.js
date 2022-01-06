const { createLogger, format, transports } = require('winston');

const { combine, timestamp, errors, json } = format;

const loggerProd = createLogger({
  format: combine(timestamp(), errors({ stack: true }), json()),
  transports: [new transports.Console(), new transports.File({ filename: 'logger/prod-loggings.log' })],
});

module.exports = loggerProd;
