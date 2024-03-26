'use strict';

/**
 * credential service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credential.credential');
