import MovieCard from '../MovieCard/MovieCard.jsx';

function MovieCardList({ movies }) {
  return (
    <ul className="cards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieCardList;
