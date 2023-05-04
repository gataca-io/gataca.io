'use strict';

/**
 * gataca-wallet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gataca-wallet.gataca-wallet');
