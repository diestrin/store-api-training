/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  changeColor: function (req, res) {
    Products.changeColor({
      id: req.param('id'),
      color: req.param('color');
    }, function () {
      res.ok();
    });
  }
};

