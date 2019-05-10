const express = require('express');
const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', { scope: ['profile'] })
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			// Successful authentication, redirect home.
			res.redirect('/');
		}
	);

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	// logout route
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});
};
