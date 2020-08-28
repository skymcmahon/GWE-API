//--------------------------/IMPORTS/--------------------------//
const router = require('express').Router();
const ctrl = require('../controllers');

//--------------------------/ROUTES/--------------------------//

// #######################
//        TRIP TYPE
router.get('/', ctrl.tripTypes.index);
router.get('/:id', ctrl.tripTypes.show);
router.post('/', ctrl.tripTypes.create);
router.put('/:id', ctrl.tripTypes.update);
router.delete('/:id/delete', ctrl.tripTypes.destroy);

// #######################
//          TRIP
router.get('/:tt_id/trips', ctrl.trips.index);
router.get('/:tt_id/trips/:trip_id', ctrl.trips.show);
router.post('/:tt_id/trips', ctrl.trips.create);
router.put('/:tt_id/trips/:trip_id', ctrl.trips.update);
router.delete('/:tt_id/trips/:trip_id', ctrl.trips.destroy);  //ASK MELISA?

//--------------------------/EXPORT/--------------------------//
module.exports = router;