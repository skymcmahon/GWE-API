const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
	id: Schema.Types.ObjectId,
	startDate: Date,
	itinerary: String,
	participants: Number,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
