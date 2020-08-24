const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Trip = require('./Trip');

const tripType = new Schema({
	id: Schema.Types.ObjectId,
	title: String,
	length: Number,
	participants: Number,
	meals: Number,
	cost: Number,
	description: String,
	imgUrl: String,
	parks: Array,
	// parks: [
	// 	{
	// 		id: Schema.Types.ObjectId,
	// 		ref: 'Park',
	// 	},
	// ],
	trips: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Trip',
		},
	],
});

const TripType = mongoose.model('TripType', tripType);

module.exports = TripType;
