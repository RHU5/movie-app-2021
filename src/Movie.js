import React from 'react';
import PropTypes from 'prop-types';
import './movie.scss';

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img className="movie__img" src={poster} title={title} alt={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 140)} ...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
