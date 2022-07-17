"use strict";


const  numberOfFilms = +prompt("How many movies have you seen?",''),
    a = prompt('One of your last movies you saw?',''),
    b = prompt('How much do you rate it?',''),
    c = prompt('One of your last movies you saw?',''),
    d = prompt('How much do you rate it?','');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};



personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);



