// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.tripTypes.index);
router.get('/:id', ctrl.tripTypes.show);
router.post('/', ctrl.tripTypes.create);
router.put('/:id', ctrl.tripTypes.update);
router.delete('/:id', ctrl.tripTypes.destroy);

// exports
module.exports = router;
