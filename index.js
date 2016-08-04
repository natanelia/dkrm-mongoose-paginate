'use strict';

function paginate(params, options = { defaultPage: 0, defaultHitsPerPage: 10}) {
  const _params = {
    page: params.page || options.defaultPage,
    hitsPerPage: params.hitsPerPage || options.defaultHitsPerPage,
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
