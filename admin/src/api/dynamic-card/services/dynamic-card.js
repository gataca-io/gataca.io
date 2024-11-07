'use strict';

/**
 * dynamic-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dynamic-card.dynamic-card');
