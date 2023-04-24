'use strict';

/**
 * test-do service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-do.test-do');
