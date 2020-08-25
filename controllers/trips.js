const db = require('../models');

//--------------------------/INDEX/--------------------------//
const index = (req, res) => {
	db.Trip.find({}, (err, foundTrips) => {
		if (err) console.log('Error in trips#index:', err);

		res.json({
			trips: foundTrips,
			numberOfTrips: foundTrips.length,
			dateRequested: new Date().toLocaleTimeString(),
		});
	});
};

//--------------------------/SHOW/--------------------------//
const show = (req, res) => {
	db.Trip.findById(req.params.id, (err, foundTrip) => {
		if (err) console.log('Error in trips#show:', err);

		res.json(foundTrip);
	});
};

//--------------------------/CREATE/--------------------------//
const create = (req, res) => {
	db.Trip.create(req.body, (err, savedTrip) => {
		if (err) console.log('Error in trips#create:', err);

		res.json(savedTrip);
	});
};

//--------------------------/UPDATE/--------------------------//
const update = (req, res) => {
	db.Trip.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedTrip) => {
			if (err) console.log('Error in trips#update:', err);
			if (!updatedTrip) {
				res
					.status(400)
					.json({ message: `Could not find Trip with id ${req.params.id}` });
			}

			res.json(updatedTrip);
		}
	);
};

//--------------------------/DELETE/--------------------------//
const destroy = (req, res) => {
	db.Trip.findByIdAndDelete(req.params.id, (err, deletedTrip) => {
		if (err) console.log('Error in trips#destroy:', err);

		res.sendStatus(200);
	});
};

//--------------------------/EXPORT/--------------------------//
module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
