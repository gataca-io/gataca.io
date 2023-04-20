'use strict';

/**
 * test-dev router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-dev.test-dev');
