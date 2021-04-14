import React from 'react';
import './detail.scss';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { state } = this.props.location;
    if (state) {
      return (
        <div className="detail">
          <div className="movie movie--width">
            <img
              className="movie__img movie--pos"
              src={state.poster}
              title={state.title}
              alt={state.title}
            />
            <div className="movie__data">
              <h3 className="movie__title">{state.title}</h3>
              <ul className="genres">
                {state.genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <h5 className="movie__year">{state.year}</h5>
              <p className="movie__summary">{state.summary}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Detail;
