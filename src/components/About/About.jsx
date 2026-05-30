function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__content">
        <h2 className="about__title" id="about-title">Sobre el proyecto</h2>
        <p className="about__text">
          Movie Explorer es una aplicacion React conectada a la API de TMDb. El proyecto muestra resultados
          de busqueda en tarjetas reutilizables, guarda la ultima busqueda en el navegador y maneja estados
          de carga, errores y resultados vacios.
        </p>
      </div>
      <ul className="about__list" aria-label="Caracteristicas">
        <li className="about__item">Busqueda por titulo</li>
        <li className="about__item">Tarjetas responsivas</li>
        <li className="about__item">Resultados guardados localmente</li>
      </ul>
    </section>
  );
}

export default About;
