/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

/**
 * @api{get} /category List all categories
 * @apiName GetCategory
 * @apiGroup Category
 * @apiVersion 0.1.0
 * @apiSuccess {String} name Name of category
 * @apiSuccess {Number} id id of category
 * @apiSuccess {date} createdAt date created
 * @apiSuccess {date} updatedAt date last update
 * @apiSuccessExample Example data on success:
 * [
 *  {
 *    createdAt: 1568910220223,
 *    updatedAt: 1568910220223,
 *    id: "5d83ab8c6ae0bd5095e0d09c",
 *    name: "Acaiteria"
 *  },
 *  {
 *    createdAt: 1568893456234,
 *    updatedAt: 1568893456234,
 *    id: "5d83ab8c6ae0bd5095e0d09c",
 *    name: "Padaria"
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
