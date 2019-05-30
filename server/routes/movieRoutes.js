const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const axios = require('axios');
const keys = require('../../config/keys');

// const Movie = mongoose.model('movies');

module.exports = app => {
	app.get('/movie/:id', (req, res) => {
		res.send('movie route');
	});
};
