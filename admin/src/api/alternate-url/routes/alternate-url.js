'use strict';

/**
 * alternate-url router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::alternate-url.alternate-url');
