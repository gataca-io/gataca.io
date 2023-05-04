'use strict';

/**
 * terms-of-use service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::terms-of-use.terms-of-use');
