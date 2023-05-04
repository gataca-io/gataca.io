'use strict';

/**
 * resources service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resources.resources');
