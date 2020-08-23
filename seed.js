const db = require('./models');
const data = require('./tripTypesData.json');

db.TripType.deleteMany({}, (err, deletedTripTypes) => {
	db.TripType.create(data.tripTypes, (err, seededTripTypes) => {
		if (err) console.log(err);

		console.log(data.tripTypes.length, 'tripTypes created successfully');

		process.exit();
	});
});
