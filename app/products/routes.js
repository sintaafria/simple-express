const router = require('express').Router();
const productController = require('./cotroller')

router.get('/product', productController.index);
router.get('/product/:id', productController.detail);
router.post('/product/', productController.post);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.destroy);

module.exports = router;