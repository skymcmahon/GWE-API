const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: Schema.Types.ObjectId,
	email: String,
	username: String,
	pasword: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
