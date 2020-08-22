const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripType = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	length: Number,
	participants: Number,
	cost: Number,
	description: String,
	parks: [
		{
			id: Schema.Types.ObjectId,
			ref: 'Park',
		},
	],
	trips: [
		{
			id: Schema.Types.ObjectId,
			ref: 'Trip',
		},
	],
});

const TripType = mongoose.model('TripType', tripType);

module.exports = TripType;
