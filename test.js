const logger = require('./logger/prod-logger');

logger.error(new Error('testing the winston'));
logger.info('testing the winston');
logger.warn('testing the winston');
