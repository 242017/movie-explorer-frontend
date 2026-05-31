import About from '../About/About.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function Main({ onSearch }) {
  return (
    <main className="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="hero__eyebrow">Explora cine con TMDb</p>
          <h1 className="hero__title" id="hero-title">Encuentra tu siguiente pelicula favorita</h1>
          <p className="hero__text">
            Busca peliculas, revisa sinopsis, calificaciones y fechas de estreno en una interfaz simple y rapida.
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
      </section>
      <About />
    </main>
  );
}

export default Main;
