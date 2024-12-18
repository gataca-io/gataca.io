'use strict';

/**
 * home-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-index.home-index');
