'use strict';

/**
 * step service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::step.step');
