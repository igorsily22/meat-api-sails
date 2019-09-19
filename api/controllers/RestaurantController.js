/**
 * RestaurantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/**
 * @api{get} /restaurant List all restaurant
 * @apiName GetRestaurant
 * @apiGroup Restaurant
 * @apiVersion 0.1.0
 * @apiSuccess {String} name Name of category
 * @apiSuccess {Number} id id of category
 * @apiSuccess {date} createdAt date created
 * @apiSuccess {Category} updatedAt date last update
 * @apiSuccessExample Example data on success:
 * [
 *  {
 *    rating: 4.9,
 *    deliveryEstimate: "25m",
 *    imagePath: "assets/img/restaurants/breadbakery.png",
 *    hours: "Funciona de segunda à sexta, de 8h às 23h"
 *    createdAt: 1568910220223,
 *    updatedAt: 1568910220223,
 *    id: "5d83ab8c6ae0bd5095e0d09c",
 *    name: "Bread & Bakery"
 *    categorys:[
 *                {
 *                  createdAt: 1568910220223,
 *                  updatedAt: 1568910220223,
 *                  id: "5d83ab8c6ae0bd5095e0d09c",
 *                  name: "Acaiteria"
 *                },
 *              ]
 *  },
 *  {
 *    rating: 4.9,
 *    deliveryEstimate: "25m",
 *    imagePath: "assets/img/restaurants/breadbakery.png",
 *    hours: "Funciona de segunda à sexta, de 8h às 23h"
 *    createdAt: 1568910220223,
 *    updatedAt: 1568910220223,
 *    id: "5d83ab8c6ae0bd5095e0d09c",
 *    name: "Bread & Bakery",
 *    categorys:[
 *                {
 *                  createdAt: 1568910220223,
 *                  updatedAt: 1568910220223,
 *                  id: "5d83ab8c6ae0bd5095e0d09c",
 *                  name: "Acaiteria"
 *                },
 *              ]
 *  }
 * ]
 *
 */

/**
 * @api{post} /category Created category
 * @apiName PostCategory
 * @apiGroup Category
 * @apiVersion 0.1.0
 * @apiParam {String} name Name of category
 *  @apiSuccessExample Example data on success:
 *  {
 *    createdAt: 1568910220223,
 *    updatedAt: 1568910220223,
 *    id: "5d83ab8c6ae0bd5095e0d09c",
 *    name: "Acaiteria"
 *  }
 */
module.exports = {};
