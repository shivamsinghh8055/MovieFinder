const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("express").Router();
const MoviesDetail = require("./movies")

// middleware
app.use(cors());
app.use(router);
app.use(express.json())
dotenv.config();

//MongoDB Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//Routes

//Show all data in the collection:
app.get("/movies-detail",(req, res) => {
    MoviesDetail.find((err, movie) => {
      if (err) {
        res.send(err);
      }
      res.json(movie);
    });
  });


app.get("/movies-detail",(req, res) => {
    MoviesDetail.find((err, movie) => {
        if (err) {
        res.send(err);
        }
        res.json(movie);
    });
});

// Filter the movies on the basis of the director's name:
app.get("/movies-detail/director/:directorName",async (req, res) => {
    const filteredMovies = await MoviesDetail.find({ directorName : req.params.directorName });
    res.json(filteredMovies);
});

//Filter the movies whose rating is more than 7:
app.get("/movies-detail/above-seven",async (req, res) => {
    const filteredMovies = await MoviesDetail.find().where('movieRating').gt(7).exec();
    res.json(filteredMovies);
});

//Add a record to the collection:
app.post("/movies-detail", (req, res) => {
    const { movieName } = req.body;
    const { movieRating } = req.body;
    const { releasedDate } = req.body;
    const { directorName } = req.body;
    const movie = new MoviesDetail({
        movieName: movieName,
        movieRating: movieRating,
        releasedDate: new Date(releasedDate),
        directorName: directorName,
      });
      movie.save((err, movie) => {
        if (err) {
          res.send(err);
        }
        res.json(movie);
      });
});

//Delete a record from the collection using movieID:
app.delete("/movies-detail/:movieID",(req, res) => {
    MoviesDetail.deleteOne({ _id: req.params.movieID })
      .then(() => res.json({ message: "Movie Deleted" }))
      .catch((err) => res.send(err));
  });

// router.post("/add-movies-detail",async (req, res) => {
//     console.log(req.body);
//     const { movieName } = req.body;
//     const { movieRating } = req.body;
//     const { releasedDate } = req.body;
//     const { directorName } = req.body;
//     console.log(movieName);
//     const movie = new MoviesDetail({
//         movieName: movieName,
//         movieRating: movieRating,
//         releasedDate:releasedDate,
//         directorName: directorName,
//       });
//       movie.save((err, movie) => {
//         if (err) {
//           res.send(err);
//         }
//         res.json(movie);
//       });
// })

app.listen(5000 , ()=>{
    console.log("server has started in port 5000")
})
