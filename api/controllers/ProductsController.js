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
      name: req.param('name'),
      description: req.param('description'),
      price: req.param('price'),
      image: req.param('image'),
      category: req.param('category'),
      stock: req.param('stock')
    }, function () {
      res.ok();
    });
  }
};
