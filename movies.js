const mongoose = require("mongoose");

const Movies = new mongoose.Schema({
    movieName: {
    type: String
  },
  movieRating: {
    type: Number,
  },
  releasedDate: {
    type: Date,
    default: Date.now,
  },
  directorName: {
    type: String
  },
});

module.exports = mongoose.model("MoviesDetail", Movies);
