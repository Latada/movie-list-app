import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ poster_path, title, overview }) {
  return (
    <div>
      <img src={"http://image.tmdb.org/t/p/w300" + poster_path} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{overview}</p>
    </div>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Movie;
