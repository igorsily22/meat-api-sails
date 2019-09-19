/**
 * Restaurant.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", required: true, unique: true },
    deliveryEstimate: { type: "string" },
    rating: { type: "number", columnType: "float" },
    imagePath: { type: "string" },
    about: { type: "string" },
    hours: { type: "string" },
    category: { model: "category" },
    menuItems: { collection: "menuItem", via: "restaurant" },
    reviews: { collection: "review", via: "restaurant" }
  }
};
