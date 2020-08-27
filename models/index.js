const mongoose = require('mongoose');
require('dotenv').config();

const connectionString =
	process.env.MONGODBATLAS_URI

const configOptions = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};

mongoose
	.connect(connectionString, configOptions)
	.then(() => console.log('MongoDB successfully connected...'))
	.catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
	TripType: require('./TripType'),
	Trip: require('./Trip'),
	User: require('./User'),
};
