/**
 * Reviews.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", required: true, unique: true },
    date: { type: "ref", columnType: "date" },
    rating: { type: "number", columnType: "float" },
    comments: { type: "string", required: true },
    restaurant: { model: "restaurant" }
  }
};
