/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    color: {
      type: 'string',
      enum: ['red', 'blue', 'orange']
    }
  },
  changeColor: function (opts, done) {
    Products.update(opts.id, {color: opts.color}, done);
  }
};
