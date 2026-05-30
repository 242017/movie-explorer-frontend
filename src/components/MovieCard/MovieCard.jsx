import { getPosterUrl } from '../../utils/tmdbApi.js';

function formatYear(releaseDate) {
  return releaseDate ? new Date(releaseDate).getFullYear() : 'Sin fecha';
}

function MovieCard({ movie }) {
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <li className="card">
      <a className="card__link" href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" rel="noreferrer">
        {posterUrl ? (
          <img className="card__image" src={posterUrl} alt={`Poster de ${movie.title}`} />
        ) : (
          <div className="card__placeholder">Sin poster</div>
        )}
        <div className="card__content">
          <div className="card__meta">
            <span>{formatYear(movie.release_date)}</span>
            <span>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
          </div>
          <h2 className="card__title">{movie.title}</h2>
          <p className="card__text">{movie.overview || 'Esta pelicula no tiene sinopsis disponible.'}</p>
        </div>
      </a>
    </li>
  );
}

export default MovieCard;
