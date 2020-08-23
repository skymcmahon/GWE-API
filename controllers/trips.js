const db = require('../models');

const index = (req, res) => {
	db.Trip.find({}, (err, foundTrips) => {
		if (err) console.log('Error in trips#index:', err);

		res.json({ trips: foundTrips });
	});
};

const show = (req, res) => {
	db.Trip.findById(req.params.id, (err, foundTrip) => {
		if (err) console.log('Error in trips#show:', err);

		res.send('Incomplete trips#show controller function');
	});
};

const create = (req, res) => {
	db.Trip.create(req.body, (err, savedTrip) => {
		if (err) console.log('Error in trips#create:', err);

		res.send('Incomplete trips#create controller function');
	});
};

const update = (req, res) => {
	db.Trip.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedTrip) => {
			if (err) console.log('Error in trips#update:', err);

			res.send('Incomplete trips#update controller function');
		}
	);
};

const destroy = (req, res) => {
	db.Trip.findByIdAndDelete(req.params.id, (err, deletedTrip) => {
		if (err) console.log('Error in trips#destroy:', err);

		res.send('Incomplete trips#destroy controller function');
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
