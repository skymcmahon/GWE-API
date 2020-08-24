const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

// REGISTER CONTROLLER
const register = (req, res) => {
	console.log('register');
};

// LOGIN CONTROLLER
const login = (req, res) => {
	console.log('login');
};

// REGISTER CONTROLLER
const verify = (req, res) => {
	console.log('verify');
};

module.exports = {
	register,
	login,
	verify,
};
