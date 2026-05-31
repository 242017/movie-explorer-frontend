import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import Movies from './Movies/Movies.jsx';
import Footer from './Footer/Footer.jsx';
import NotFound from './NotFound/NotFound.jsx';
import { searchMovies } from '../utils/tmdbApi.js';

const STORED_RESULTS_KEY = 'movieExplorerResults';
const STORED_QUERY_KEY = 'movieExplorerQuery';

function getStoredMovies() {
  const savedMovies = localStorage.getItem(STORED_RESULTS_KEY);

  if (!savedMovies) {
    return [];
  }

  try {
    return JSON.parse(savedMovies);
  } catch {
    localStorage.removeItem(STORED_RESULTS_KEY);
    return [];
  }
}

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(getStoredMovies);
  const [query, setQuery] = useState(() => localStorage.getItem(STORED_QUERY_KEY) || '');
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(() => Boolean(localStorage.getItem(STORED_RESULTS_KEY)));
  const [error, setError] = useState('');

  function saveSearchResults(nextQuery, nextMovies) {
    localStorage.setItem(STORED_QUERY_KEY, nextQuery);
    localStorage.setItem(STORED_RESULTS_KEY, JSON.stringify(nextMovies));
  }

  async function handleSearch(nextQuery) {
    const cleanQuery = nextQuery.trim();

    if (!cleanQuery) {
      setError('Por favor, introduce una palabra clave');
      setHasSearched(true);
      navigate('/movies');
      return;
    }

    setIsLoading(true);
    setError('');
    setHasSearched(true);
    setVisibleCount(3);
    navigate('/movies');

    try {
      const results = await searchMovies(cleanQuery);
      setMovies(results);
      setQuery(cleanQuery);
      saveSearchResults(cleanQuery, results);
    } catch (requestError) {
      console.error(requestError);
      setMovies([]);
      setError(
        'Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleShowMore() {
    setVisibleCount((currentCount) => currentCount + 3);
  }

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main onSearch={handleSearch} />} />
        <Route
          path="/movies"
          element={(
            <Movies
              error={error}
              hasSearched={hasSearched}
              isLoading={isLoading}
              movies={movies}
              query={query}
              visibleCount={visibleCount}
              onSearch={handleSearch}
              onShowMore={handleShowMore}
            />
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
