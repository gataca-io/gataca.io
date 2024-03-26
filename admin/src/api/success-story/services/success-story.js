'use strict';

/**
 * success-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::success-story.success-story');
