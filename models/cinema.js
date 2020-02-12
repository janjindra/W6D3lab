const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getListOfFilmTitles = function (){
  const result = this.films.map((film) => {
    return film.title;
  });
   return result;
};

Cinema.prototype.findFilmByTitle = function (filmTitle){
  const filmByTitle = this.films.find((film) => {
    return (film.title === filmTitle);
  });
  return filmByTitle;
};

Cinema.prototype.filterFilmsByGenre = function (filmGenre){
  const filmsByGenre = this.films.filter((film) => {
    return (film.genre === filmGenre);
  });
  return filmsByGenre;
};

Cinema.prototype.checkFilmsByYear = function (filmYear) {
  const checkFilms = this.films.some((film) => { //// use SOME
    return film.year === filmYear;
  });
  return checkFilms;
};

Cinema.prototype.checkNoFilmsByYear = function (filmYear) {
  const checkFilms = this.films.every((film) => { //// use SOME
    return film.year === filmYear;
  });
  return checkFilms;
};

Cinema.prototype.checkAllFilmsAreLongerThan = function (filmLength) { /// use EVERY
  const checkFilms = this.films.every((film) => { //// use SOME
    return film.length === filmLength;
  });
  return checkFilms;
  };

Cinema.prototype.getRunningTime = function () {
  let total = this.films.reduce((runningTimeTotal, film) => {
    return runningTimeTotal + film.length;
  }, 0);
  return total;
};



module.exports = Cinema;
