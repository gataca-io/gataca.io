'use strict';

/**
 * test-dev controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-dev.test-dev');
