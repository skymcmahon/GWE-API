const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: Schema.Types.ObjectId,
	email: {
		type: String,
		unique: true,
		required: [true, 'Email is required'],
	},
	password: {
		type: String,
		minlength: 4,
		required: [true, 'Password is required'],
	},
	username: {
		type: String,
		unique: true,
		required: [true, 'Userame is required'],
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
