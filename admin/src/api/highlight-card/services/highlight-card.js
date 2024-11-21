'use strict';

/**
 * highlight-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::highlight-card.highlight-card');
