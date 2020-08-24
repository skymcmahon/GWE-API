// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// Current Path = '/api/auth'

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.get('/verify', ctrl.auth.verify);

// exports
module.exports = router;
