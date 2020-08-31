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
	db.Trip.findById(req.params.trip_id, (err, foundTrip) => {
		if (err) console.log('Error in trips#show:', err);

		res.json(foundTrip);
	});
};


//--------------------------/CREATE/--------------------------//
const create = (req, res) => {
	console.log('Inside Create Trip');
	console.log(req.body, 'req.body')
	console.log(req.params, 'req.params')
	db.Trip.create(req.body, (err, savedTrip) => {
		if (err) console.log('Error in trips#create:', err);
		console.log(savedTrip, 'New Trip created');
		db.TripType.findById(req.params.tt_id, (err, foundTripType) => {
			console.log(foundTripType, 'found TT in create')
			foundTripType.trips.push(savedTrip);
			foundTripType.save((err, savedTripType) => {
				console.log(savedTripType, 'saved TT in create')
				res.json(savedTrip);
			});
		});
	});
};


//--------------------------/UPDATE/--------------------------//
const update = (req, res) => {
	db.Trip.findByIdAndUpdate(
		req.params.trip_id,
		req.body,
		{ new: true },
		(err, updatedTrip) => {
			if (err) console.log('Error in trips#update:', err);
			if (!updatedTrip) {
				res
					.status(400)
					.json({ message: `Could not find Trip with id ${req.params.id}` });//### trip_id ???
			}

			res.json(updatedTrip);
		}
	);
};


//--------------------------/DELETE/--------------------------//
const destroy = (req, res) => {
	db.Trip.findByIdAndDelete(req.params.trip_id, (err, deletedTrip) => {
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
