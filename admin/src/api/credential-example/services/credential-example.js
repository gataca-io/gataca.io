'use strict';

/**
 * credential-example service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::credential-example.credential-example');
