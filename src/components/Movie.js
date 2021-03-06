import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.scss';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
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
    </Link>
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
