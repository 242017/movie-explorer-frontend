const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const token = import.meta.env.VITE_TMDB_TOKEN;

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`TMDb request failed: ${res.status}`));
}

export function getPosterUrl(path) {
  return path ? `${IMAGE_BASE_URL}${path}` : '';
}

export function searchMovies(query) {
  const params = new URLSearchParams({
    query,
    include_adult: 'false',
    language: 'es-MX',
    page: '1',
  });

  return fetch(`${BASE_URL}/search/movie?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      accept: 'application/json',
    },
  })
    .then(checkResponse)
    .then((data) => data.results || []);
}
