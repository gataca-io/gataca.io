'use strict';

/**
 * test-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-dev.test-dev');
