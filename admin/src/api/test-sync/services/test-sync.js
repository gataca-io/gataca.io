'use strict';

/**
 * test-sync service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-sync.test-sync');
