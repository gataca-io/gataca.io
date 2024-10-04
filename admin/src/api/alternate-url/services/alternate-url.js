'use strict';

/**
 * alternate-url service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alternate-url.alternate-url');
