"use strict"

const numberOfFilms = prompt('How many movies you have seen?')

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: {},
        privat: false
};

const a = prompt('One of your lost movies?',''),
      b = prompt('Rate this movie?', ''),
      c = prompt('One of your lost movies?',''),
      d = prompt('Rate this movie?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);


