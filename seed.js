const db = require('./models');
const data = require('./tripTypesData.json');
// const data = require('./tripData.json');

db.TripType.deleteMany({}, (err, deletedTripTypes) => {
	db.TripType.create(data.tripTypes, (err, seededTripTypes) => {
		if (err) console.log(err);
		console.log(data.tripTypes.length, 'tripTypes created successfully');
		process.exit();
	});
});

// db.Trip.deleteMany({}, (err, deletedTrips) => {
// 	db.Trip.create(data.trips, (err, seededTrips) => {
// 		if (err) console.log(err);
// 		console.log(data.trips.length, 'trips created successfully');
// 		process.exit();
// 	});
// });
