const router = require('express').Router();
const productController = require('./controller')

router.get('/product', productController.index);
router.get('/product/:id', productController.detail);
router.post('/product/', productController.post);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.destroy);
router.get('/user', productController.viewUser);
router.get('/user/:id', productController.detailUser);
router.post('/user/', productController.createUser);
router.put('/product/:id', productController.updateUser);
router.delete('/product/:id', productController.destroyUser);

module.exports = router;
 