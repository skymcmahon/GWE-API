// imports
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();
const port = process.env.PORT || 4000;
const app = express();

// middleware - CORS
app.use(cors());

// middleware - JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware - API routes
app.use('/api/triptypes', routes.tripTypes);
// app.use('/api/trips', routes.trips);
// app.use('/api/auth', routes.auth);

// connection
app.listen(port, () => console.log(`Server is running on port ${port}`));
