'use strict';

/**
 * gataca-vouch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gataca-vouch.gataca-vouch');
