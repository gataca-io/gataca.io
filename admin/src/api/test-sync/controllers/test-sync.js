'use strict';

/**
 * test-sync controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-sync.test-sync');
