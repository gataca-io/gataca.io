'use strict';

/**
 * test-sync router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-sync.test-sync');
