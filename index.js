'use strict';

function paginate(params, options) {
  const _options = Object.assign({}, { defaultPage: 0, defaultHitsPerPage: 10}, options);
  const _params = {
    page: params.page || _options.defaultPage,
    hitsPerPage: params.hitsPerPage || _options.defaultHitsPerPage,
  };

  return this
    .find({})
    .skip(_params.page * _params.hitsPerPage)
    .limit(_params.hitsPerPage);
}

/**
 * @param {Schema} schema
 */

module.exports = function(schema) {
  schema.statics.paginate = paginate;
};

module.exports.paginate = paginate;
