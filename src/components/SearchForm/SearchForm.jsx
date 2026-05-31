import { useState } from 'react';

function SearchForm({ initialValue = '', onSearch }) {
  const [searchText, setSearchText] = useState(initialValue);
  const [inputError, setInputError] = useState('');

  function handleChange(evt) {
    setSearchText(evt.target.value);
    if (evt.target.value.trim()) {
      setInputError('');
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!searchText.trim()) {
      setInputError('Por favor, introduce una palabra clave');
      return;
    }

    onSearch(searchText);
  }

  return (
    <form className="search" onSubmit={handleSubmit} noValidate>
      <label className="search__label" htmlFor="movie-search">
        Buscar peliculas
      </label>
      <div className="search__row">
        <input
          className="search__input"
          id="movie-search"
          name="query"
          onChange={handleChange}
          placeholder="Matrix, Amelie, Batman..."
          type="text"
          value={searchText}
        />
        <button className="search__button" type="submit">Buscar</button>
      </div>
      <span className="search__error">{inputError}</span>
    </form>
  );
}

export default SearchForm;
