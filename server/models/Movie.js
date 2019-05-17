const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
	tmdbId: Number,
	tmdbRating: Number,
	title: String,
	posterPath: String,
	overview: String,
	userRating: Number
});

mongoose.model('movies', movieSchema);
