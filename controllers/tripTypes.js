const db = require('../models');

//--------------------------/INDEX/--------------------------//
const index = (req, res) => {
	db.TripType.find({}, (err, foundTripTypes) => {
		if (err) console.log('Error in tripTypes#index:', err);

		res.json({ tripTypes: foundTripTypes });
	});
};

//--------------------------/SHOW/--------------------------//
const show = (req, res) => {
	// db.TripType.findById(req.params.id, (err, foundTripType) => {
	// 	if (err) console.log('Error in tripTypes#show:', err);

	// 	res.json(foundTripType);
	// });
	db.TripType.findById(req.params.id)
		.populate({ path: "trips" })
		.exec((err, foundTripType) => {
			if (err) console.log('Error in tripTypes#show:', err);
			res.json(foundTripType);
		});
};

//--------------------------/CREATE/--------------------------//
const create = (req, res) => {
	db.TripType.create(req.body, (err, savedTripType) => {
		if (err) console.log('Error in tripTypes#create:', err);

		res.json(savedTripType);
	});
};

//--------------------------/UPDATE/--------------------------//
const update = (req, res) => {
	db.TripType.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedTripType) => {
			if (err) console.log('Error in tripTypes#update:', err);

			if (!updatedTripType) {
				res.json({ message: `Trip Type with id: ${req.params.id} NOT found!` });
			}

			res.json(updatedTripType);
		}
	);
};

//--------------------------/DELETE/--------------------------//
const destroy = (req, res) => {
	db.TripType.findByIdAndDelete(req.params.id, (err, deletedTripType) => {
		if (err) console.log('Error in tripTypes#destroy:', err);
		//##########DELETE TRIPS TOO#############
		res.sendStatus(200);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
