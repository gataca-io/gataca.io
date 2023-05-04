'use strict';

/**
 * sectors-web3 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sectors-web3.sectors-web3');
