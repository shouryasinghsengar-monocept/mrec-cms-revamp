'use strict';

/**
 * data-source router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::data-source.data-source');
