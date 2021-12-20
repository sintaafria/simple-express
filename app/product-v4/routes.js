const router = require('express').Router();
const controller = require('./controller');

router.post('/product/', controller.post);
router.get('/product', controller.index);
router.get('/product/:id', controller.detail);
router.put('/product/:id', controller.update);
router.delete('/product/:id', controller.destroy);

module.exports = router;