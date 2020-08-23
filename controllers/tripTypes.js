const db = require('../models');

const index = (req, res) => {
	db.TripType.find({}, (err, foundTripTypes) => {
		if (err) console.log('Error in tripTypes#index:', err);

		res.json({ tripTypes: foundTripTypes });
	});
};

const show = (req, res) => {
	db.TripType.findById(req.params.id, (err, foundTripType) => {
		if (err) console.log('Error in tripTypes#show:', err);

		res.send('Incomplete tripTypes#show controller function');
	});
};

const create = (req, res) => {
	db.TripType.create(req.body, (err, savedTripType) => {
		if (err) console.log('Error in tripTypes#create:', err);

		res.send('Incomplete tripTypes#create controller function');
	});
};

const update = (req, res) => {
	db.TripType.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedTripType) => {
			if (err) console.log('Error in tripTypes#update:', err);

			res.send('Incomplete tripTypes#update controller function');
		}
	);
};

const destroy = (req, res) => {
	db.TripType.findByIdAndDelete(req.params.id, (err, deletedTripType) => {
		if (err) console.log('Error in tripTypes#destroy:', err);

		res.send('Incomplete tripTypes#destroy controller function');
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
