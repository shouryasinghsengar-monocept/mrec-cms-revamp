'use strict';

/**
 * data-source service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-source.data-source');
