import MovieCardList from '../MovieCardList/MovieCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function Movies({
  error,
  hasSearched,
  isLoading,
  movies,
  query,
  visibleCount,
  onSearch,
  onShowMore,
}) {
  const visibleMovies = movies.slice(0, visibleCount);
  const canShowMore = visibleCount < movies.length;

  return (
    <main className="movies">
      <section className="movies__intro" aria-labelledby="movies-title">
        <p className="movies__eyebrow">Resultados</p>
        <h1 className="movies__title" id="movies-title">Busca en el catalogo de TMDb</h1>
        <SearchForm initialValue={query} onSearch={onSearch} />
      </section>

      <section className="results" aria-live="polite">
        {isLoading && <Preloader />}
        {!isLoading && error && <p className="results__message results__message_error">{error}</p>}
        {!isLoading && !error && !hasSearched && (
          <p className="results__message">Haz una busqueda para ver peliculas aqui.</p>
        )}
        {!isLoading && !error && hasSearched && movies.length === 0 && (
          <p className="results__message">No se ha encontrado nada.</p>
        )}
        {!isLoading && !error && movies.length > 0 && (
          <>
            <MovieCardList movies={visibleMovies} />
            {canShowMore && (
              <button className="results__button" type="button" onClick={onShowMore}>
                Mostrar mas
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
}

export default Movies;
