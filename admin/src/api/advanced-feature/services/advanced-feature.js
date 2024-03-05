'use strict';

/**
 * advanced-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advanced-feature.advanced-feature');
