/*
* Author: David Shefcik
* Created: 11/16/19
* Project | File: Spotify Queue Authentication API | src/index.js
* Purpose: Create express server, configure middleware for express server, and add routes to the express server.
*/

"use strict"

// Configure dotenv
require("dotenv").config();

// Module imports
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Create server
const app = express();

// Add/Configure middleware
// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Load routes
require(path.join(__dirname, "./routes/auth/url"))(app);
require(path.join(__dirname, "./routes/catch"))(app); // Catch all route

// Start server on port specified in .env file
app.listen(process.env.PORT, () => {
    console.log(`Authentication express server started on port ${process.env.PORT}!`);
});