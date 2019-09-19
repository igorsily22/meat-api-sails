/**
 * MenuItem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    imagePath: { type: "string" },
    name: { type: "string", required: true },
    description: { type: "string" },
    price: { type: "number", columnType: "float" },
    restaurant: { model: "restaurant" }
  }
};
